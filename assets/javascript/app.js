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
    
    let qus1 = qusFact('What is best band','rush','not rush1', 'not rush2', 'not rush3')
    let qus2 = qusFact('whos saw it', 'me' , 'not me1', 'not me2' , 'not me3')

    qusBank = [qus1, qus2]


    let gameStart=false;;
    const timer = new Array(30).fill(0).map((x,index) => index).reverse()
    

    let countDown = function(){
        setInterval(()=>$('#clockButton').text(timer.shift()), 1000)
        
    }

    let oneRound= function(){
        countDown()
        rnQus = Math.floor(Math.random()*qusBank.length)
        setTimeout(()=>{$('#qusAnsText').html(`<h1>${qusBank[rnQus].qus}</h1`)}, 250)
        
        
        //randominize
        let newArr = [qusBank[rnQus].ans, qusBank[rnQus].wro1, qusBank[rnQus].wro2, qusBank[rnQus].wro3]
        
        let rnQusArr=[]; 
        do{
            rnQusArr.push(newArr.splice(Math.floor(Math.random()*newArr.length),1))

        } while(newArr.length >0)

        
        console.log(rnQusArr)
        



        setTimeout(()=>{$('#ansOptions1').text(rnQusArr[0])}, 500) 
        setTimeout(()=>{$('#ansOptions2').text(rnQusArr[2])}, 500)
        setTimeout(()=>{$('#ansOptions3').text(rnQusArr[1])}, 500)
        setTimeout(()=>{$('#ansOptions4').text(rnQusArr[3])}, 500)

        $('.ansOption').click(function(){
            let userguess = $(this)

            
        })
        
        
            
           
    }

    let gameReady =function(){
        $(this).html('<h4>Ready...</h4>').unbind(); console.log('this :' +this)
        setTimeout(()=>{$('#clockButton').html('<h4>Set...<h4>')}, 1000)
        setTimeout(()=>{$('#clockButton').html('<h4>Go!!!</h4>')}, 1750)
        setTimeout(()=> oneRound(), 2000)
        gameStart=true;
        
    }

    

    // setInterval(()=>timer.forEach((x)=>{x;console.log(x)}), 1000)
     
     
    //click to start
    $('#clockButton').click(gameReady)

    

   
    // setInterval(()=>console.log('hi'), 1000)
    
})

