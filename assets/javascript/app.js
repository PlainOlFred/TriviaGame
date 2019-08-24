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


    let gameStart=false;
    //timer
    const timer = new Array(10).fill(0).map((x,index) => index).reverse()
    let countDown = function(){
        setInterval(()=>$('#clockButton').text(timer.shift()), 1000)
        
    }

    let gameReady =function(){
        $(this).html('<h4>Ready...</h4>').unbind(); 
        setTimeout(()=>{$('#clockButton').html('<h4>Set...<h4>')}, 1000)
        setTimeout(()=>{$('#clockButton').html('<h4>Go!!!</h4>')}, 1750)
        setTimeout(()=> oneRound(), 2000)
        gameStart=true;  
    }

    //end of roud Modals
    function oneRoundModal(){
        $('.ansOption').attr('disabled','disabled')

    }
    

    let oneRound= function(){
        countDown()
        rnQus = Math.floor(Math.random()*qusBank.length)//random number for the question number
        setTimeout(()=>{$('#qusAnsText').html(`<h1>${qusBank[rnQus].qus}</h1`)}, 500)
        
        let rdArr = [qusBank[rnQus].ans, qusBank[rnQus].wro1, qusBank[rnQus].wro2, qusBank[rnQus].wro3]
        let rdAns = rdArr[0]//this round answer
        
        
        //randominize
        let rnQusArr=[]; 

        do{
            rnQusArr.push(rdArr.splice(Math.floor(Math.random()*rdArr.length),1))
        } while(rdArr.length >0)

        setTimeout(()=>{$('#ansOptions1').text(rnQusArr[0])}, 500) 
        setTimeout(()=>{$('#ansOptions2').text(rnQusArr[2])}, 500)
        setTimeout(()=>{$('#ansOptions3').text(rnQusArr[1])}, 500)
        setTimeout(()=>{$('#ansOptions4').text(rnQusArr[3])}, 500)

        $('.ansOption').click(function(){
            
            let userGuess = $(this).text()
            if(userGuess===rdAns){
                setTimeout(()=>{$('#qusAnsText').html(`<h1>Correct</h1`)}, 250)
            }else
            setTimeout(()=>{$('#qusAnsText').html(`<h1>Wrong. Wrong. Wrong: Correct Answer is ${rdAns}</h1>` )}, 250)
            

            qusBank.splice(rnQus,1)

            oneRoundModal()

        })
       
        
        
            
           
    }

    

    

    // setInterval(()=>timer.forEach((x)=>{x;console.log(x)}), 1000)
     
     
    //click to start
    $('#clockButton').click(gameReady)

    

   
    // setInterval(()=>console.log('hi'), 1000)
    
})
