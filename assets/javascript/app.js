$(document).ready(function(){

    const questionBank = [[],[],[]]

    //click to start
    let gameStart = false;
    const timer = new Array(11).fill(0).map((x,index) => index).reverse()
    

    let countDown = function(){
        setInterval(()=>$('#clockButton').text(timer.shift()), 1000)
        
    }

    let gameReady =function(){
        gameStart=true
        $(this).text('Ready...').unbind()
        setTimeout(()=>{$('#clockButton').text('Set...')}, 1000)
        setTimeout(()=>{$('#clockButton').text('Go!!!')}, 1750)
        setTimeout(()=> countDown(), 2000)
    }

    // setInterval(()=>timer.forEach((x)=>{x;console.log(x)}), 1000)
     
     
    
    $('#clockButton').click(gameReady)

    

    $('.ansOption').click(function(){
        console.log('triva');
        
    })
    // setInterval(()=>console.log('hi'), 1000)
    
})

