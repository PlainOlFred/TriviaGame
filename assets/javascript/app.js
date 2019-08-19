$(document).ready(function(){

    const qusFact = function(qus, ans){
        let q = qus;
        let a = ans;

        return{
            qus:q,
            ans:a,
        }
    }
    
    let qus1 = qusFact('What is best band','rush')
    let qus2 = qusFact('whos saw it', 'me' )
    
    console.log(qus1.qus)
    console.log(qus1.ans)
    console.log(qus2.qus)
    console.log(qus2.ans)



    //click to start
    let gameStart = false;
    const timer = new Array(101).fill(0).map((x,index) => index).reverse()
    

    let countDown = function(){
        setInterval(()=>$('#clockButton').text(timer.shift()), 1000)
        
    }

    let gameReady =function(){
        gameStart=true
        $(this).html('<h4>Ready...</h4>').unbind()
        setTimeout(()=>{$('#clockButton').html('<h4>Set...<h4>')}, 1000)
        setTimeout(()=>{$('#clockButton').html('<h4>Go!!!</h4>')}, 1750)
        setTimeout(()=> countDown(), 2000)
    }

    // setInterval(()=>timer.forEach((x)=>{x;console.log(x)}), 1000)
     
     
    
    $('#clockButton').click(gameReady)

    

    $('.ansOption').click(function(){
        console.log('triva');
        
    })
    // setInterval(()=>console.log('hi'), 1000)
    
})

