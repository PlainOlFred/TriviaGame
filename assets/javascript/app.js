$(document).ready(function(){
   

    const qusFact = function(qus, ans, wro1, wro2, wro3, url){
        let q = qus;
        let a = ans;
        let w1 = wro1;
        let w2 = wro2;
        let w3 = wro3;
        let u = url

        return{
            qus:q,
            ans:a,
            wro1: w1,
            wro2: w2,
            wro3: w3,
            url: u
        }
    }
    
    let qus1 = qusFact('What is best band','Rush','not rush1', 'not rush2', 'not rush3')
    let qus2 = qusFact('whos saw it', 'Me' , 'not me1', 'not me2' , 'not me3')
    let qus3 = qusFact('what color is the sky', 'blue', 'red', 'red', 'red')
    let qus4 = qusFact('What is next?', 'This One', 'That one', 'That One', 'That One') 

    
        let qusBank = [qus1, qus2, qus3, qus4]
        let usedQus = []
        let qusCorrect = 0
        let qusWrong = 0
        let timerOn = false
        let time = 9
        let countDown //timer interval
        let roundTime // round timeout
    


    function timer(){ //when called should start/stop
        
        
        if(timerOn === false){
            $('#clock').text('10')
            countDown = setInterval(()=>{
                $('#clock').text(time)
                time--}, 1000)
            timerOn = true
        }else{
            clearInterval(countDown) 
            timerOn = false
        }
        
    }

    oneRound = function(){
        
        timer()
        randomNum = Math.floor(Math.random()*qusBank.length)
         let rndQus= qusBank[randomNum]
         usedQus.push(qusBank.splice(randomNum,1))
         

         let rdAns= rndQus.ans
         let rndQusArr = [rndQus.ans, rndQus.wro1, rndQus.wro2, rndQus.wro3]

         let randomArr= []
         do{
         randomArr.push(rndQusArr.splice(Math.floor(Math.random()*rndQusArr.length),1))
        } while(rndQusArr.length > 0)

        $('#qusAnsText').html(`<h1>${rndQus.qus}</h1>`)
        $('#ansOption1').text(randomArr[0])
        $('#ansOption2').text(randomArr[1])
        $('#ansOption3').text(randomArr[2])
        $('#ansOption4').text(randomArr[3])

       
        $('.ansOption').click(function(){
            timer()
            clearTimeout(roundTime)
            let userGuess = $(this).text()
            
            if(userGuess == rdAns && time >0){
                $('.ansOption').unbind()
                $('#qusAnsText').html('<h1>Correct</h1>')
                qusCorrect += 1
            } else{
                $('.ansOption').unbind()
                $('#qusAnsText').html(`<h1>Wrong. Correct Answer: ${rdAns}</h1>`)
                qusWrong += 1
            }
            if(qusBank.length === 0){
                setTimeout(function(){
                    $('#ansOption1').text('Number Correct: '+ qusCorrect)
                    $('#ansOption2').text('Number Wrong: '+ qusWrong)
                    $('#ansOption3').text('Unanswered: ' + (usedQus.length - qusCorrect - qusWrong))
                    $('#ansOption4').text('Play again')

                    $('#ansOption4').click(()=>{
                        //restart game
                        qusBank = [qus1, qus2, qus3, qus4]
                        usedQus = []
                        qusCorrect = 0
                        qusWrong = 0
                        timerOn = false
                        time = 9
                    
                        oneRound()
                    })
                }, 1000)

            }else{
                setTimeout(function(){ //next question
                    time = 9
                    oneRound()
                }, 3000)
            }
        })


        roundTime = setTimeout(function(){
            timer()
            $('.ansOption').unbind()

            if(qusBank.length === 0){
                setTimeout(function(){
                    $('#ansOption1').text('Number Correct: '+ qusCorrect)
                    $('#ansOption2').text('Number Wrong: '+ qusWrong)
                    $('#ansOption3').text('Unanswered: ' + (usedQus.length - qusCorrect - qusWrong))
                    $('#ansOption4').text('Play again')

                    $('#ansOption4').click(()=>{
                        //restart game
                        qusBank = [qus1, qus2, qus3, qus4]
                        usedQus = []
                        qusCorrect = 0
                        qusWrong = 0
                        timerOn = false
                        time = 9
                    
                        oneRound()
                    })
                }, 1000)

            }else{
                setTimeout(function(){ //next question
                    time = 9
                    oneRound()
                }, 3000)
            }
        
            
           
      
        }, 10000)
        
         
    
    
}    
    //starts game
    $('#clock').click(function(){
        $(this).unbind()
        oneRound()
         
    })


})
