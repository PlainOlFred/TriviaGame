$(document).ready(function(){
   

    const qusFact = function(qus, ans, wro1, wro2, wro3){
        let q = qus;
        let a = ans;
        let w1 = wro1;
        let w2 = wro2;
        let w3 = wro3;

        return{
            qus:q,
            ans:a,
            wro1: w1,
            wro2: w2,
            wro3: w3
        }
    }
    
    let qus1 = qusFact('What is best band','Rush','not rush1', 'not rush2', 'not rush3')
    let qus2 = qusFact('whos saw it', 'Me' , 'not me1', 'not me2' , 'not me3')
    let qus3 = qusFact('what color is the sky', 'blue', 'red', 'red', 'red')
    let qus4 = qusFact('What is next?', 'This One', 'That one', 'That One', 'That One') 

    const qusBank = [qus1, qus2, qus3, qus4]
    let timerOn = false
    let time = 9
    let countDown


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
         let rndQus= qusBank[Math.floor(Math.random()*qusBank.length)]
         let rdAns= rndQus.ans
         let rndQusArr = [rndQus.ans, rndQus.wro1, rndQus.wro2, rndQus.wro3]

         let randomArr= []
         do{
         randomArr.push(rndQusArr.splice(Math.floor(Math.random()*rndQusArr.length),1))
        } while(rndQusArr.length > 0)

        $('#ansQusText').text(rndQus.qus)
        $('#ansOption1').text(randomArr[0])
        $('#ansOption2').text(randomArr[1])
        $('#ansOption3').text(randomArr[2])
        $('#ansOption4').text(randomArr[3])

        $('.ansOption').click(timer)
        $('.ansOption').click(()=> console.log(timerOn))

        

         
    }
    
    
    //starts game
    $('#clock').click(function(){
        $(this).unbind()
        oneRound()
         
    })
    
    
})
