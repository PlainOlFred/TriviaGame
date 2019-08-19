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
    
    let qus1 = qusFact('What is best band','rush','not rush', 'not rush', 'not rush')
    let qus2 = qusFact('whos saw it', 'me' , 'me', 'me' , 'me')

    qusBank = [qus1, qus2]
    
    console.log(qus1.qus)
    console.log(qus1.ans)
    console.log(qus2.qus)
    console.log(qus2.ans)



    
    let gameStart=false;;
    const timer = new Array(101).fill(0).map((x,index) => index).reverse()
    

    let countDown = function(){
        setInterval(()=>$('#clockButton').text(timer.shift()), 1000)
        
    }

    let oneRound= function(){
        countDown()
        setTimeout(()=>{$('#qusAnsText').html(`<h1>${qusBank[Math.floor(Math.random()*2)].qus}</h1`)}, 250)
        
        
            
           
    }

    let gameReady =function(){
        $(this).html('<h4>Ready...</h4>').unbind()
        setTimeout(()=>{$('#clockButton').html('<h4>Set...<h4>')}, 1000)
        setTimeout(()=>{$('#clockButton').html('<h4>Go!!!</h4>')}, 1750)
        setTimeout(()=> oneRound(), 2000)
        gameStart=true;
        
    }

    

    // setInterval(()=>timer.forEach((x)=>{x;console.log(x)}), 1000)
     
     
    //click to start
    $('#clockButton').click(gameReady)

    

    $('.ansOption').click(function(){
        console.log('triva');
        
    })
    // setInterval(()=>console.log('hi'), 1000)
    
})

