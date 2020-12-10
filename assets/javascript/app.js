const startBtn = document.querySelector("#startBtn");
const gameInfo = document.querySelector('#gameInfo')
const questionCount = document.querySelector("#questionCount");
const questionLeft  = document.querySelector("#questionCount span");
const instructions = document.querySelector("#instructions");

const clock = document.querySelector('#clock');

const questionText = document.querySelector("#questionText");
const answerChoices = document.querySelector("#answerChoices");

let isTimer = false;
let timerId;
let timer;




// let gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=efON0kuaf67AQ7xZbpJnftqbH8mQgHwh&q=${rdAns}&rating=g&limit=1`;

function getGif() {
  console.log("getGIf: " + rdAns);
  $.ajax({
    url: gifUrl,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    let ansGif = response.data.image_original_url;

    let ansGifImage = $("<img>");

    ansGifImage.attr("src", ansGif);
    ansGifImage.attr("alt", "image");
    ansGifImage.addClass("gifImage");

    $("#ansGif").css("display", "inline-block").prepend(ansGifImage);
    $(".gifImage").css("display", "block");
  });
}

function handleTimer() {
  clock.textContent = timer;
  if(isTimer) {
    clearInterval(timerId)
    console.log("timer clear")
    isTimer = false;
  } else {
    timerId = setInterval(tick, 1000);
    isTimer = true;
  }

}

function tick() {
  console.log("tick");
  timer--;

  if(timer <= 0) {
    handleTimer();
    return oneRound();
  } 

  clock.textContent = timer;
}



function oneRound() {
  timer = 10;
  // clock.textContent = timer;

  // check question
  handleTimer();
  
  const rndQus = Math.floor(Math.random() * questions.length);
   
  const currentQuestion = questions.splice(rndQus, 1).pop();

  questionLeft.textContent = questions.length;

  renderQuestion(currentQuestion)
}

function renderQuestion(question) {
  console.log(question);
  const randomChoices = [];
  // randomize  answers
  // TODO concat correct answer or add to questions


  const choices = question.choices;
  choices.push(question.answer)


  // do {
  //   randomChoices.push(
  //     rndQusArr.splice(Math.floor(Math.random() * rndQusArr.length), 1)
  //   );
  // } while (rndQusArr.length > 0);


  // render question
  questionText.textContent = question.question;

  answerChoices.innerHTML = "";

  for(let i = 0; i < choices.length; i++) {
    
    const choice = document.createElement('p')
    choice.setAttribute("class", "answerChoice");

      choice.textContent = choices[i];
      console.log(choice)

      answerChoices.appendChild(choice)
  }




}

//starts quiz
function startQuiz() {
  startBtn.setAttribute("class", "hide")
  //update game info
  instructions.setAttribute("class", "hide");
  questionCount.removeAttribute("class");

  // TODO comibine store question
  questionLeft.textContent = 10;


  oneRound();


}

function handleChoiceClick() {
  handleTimer();
}

startBtn.addEventListener("click", startQuiz);

answerChoices.addEventListener("click", handleChoiceClick);
