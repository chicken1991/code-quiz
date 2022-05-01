var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startbtn");
var quiz = document.querySelector("#quiz");
var stats = document.querySelector("#gameOver");
var scoreEl = document.querySelector("#score");
var userName = document.querySelector("#userName");
var displayQuestion = document.querySelector("#question");
var displayedAnswers = document.querySelector("#answers");
// var answerLi = document.createElement("li");
// var answerBtn = document.createElement("button");


var qObj;

var score = 0;
var timerCount = 10;
var timer;
var wrongAnswer;
var rightAnswer;
var allAnswered;

//create init() - start timer will default to displayed
function init(){
    score = 0; 
    quiz.setAttribute("style", "display:none");
    stats.setAttribute("style", "display:none");
    timerEl.setAttribute("style", "display:none");
}
init();


//create startTimer to begin game - hide start timer
function startGame() {

    //make disappear startBtn
    startButton.setAttribute("style", "display:none;");
    //make appear quiz
    quiz.setAttribute("style", "display:block");
    //make timer disappear
    timerEl.setAttribute("style", "display:block");
    
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount >= 0) {
          // Tests if win condition is met
          if (allAnswered && timerCount > 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            gameOver(); // wtf does this do?
          }
        }
        // Tests if time has run out
        if (timerCount === 0 || questionNumber <= 0) {
          // Clears interval
          clearInterval(timer);
          gameOver(); //what do? store score and assign to user input name

        }
        console.log(timerCount);
      }, 1000);
      nextQuestion();
}

// init();


startButton.addEventListener("click", startGame);


//storeScore() stores the user's score in local storage ================= TO DO


//userPrompt() will ask the user to input their name, =================== TO DO
//which will be attributed to their score

// ================= Object definitions ==========================

var obj1 = {
  theQuestion: "This is question 1",
  objAnswers: [
    "answer 1",
    "answer 2",
    "answer 3"
  ],
  correct: "answer 1"
}

var obj2 = {
  theQuestion: "This is question 2",
  objAnswers: [
    "answer 1",
    "answer 2",
    "answer 3"
  ],
  correct: "answer 2"
}

var obj3 = {
  theQuestion: "This is question 3",
  objAnswers: [
    "answer 1",
    "answer 2",
    "answer 3"
  ],
  correct: "answer 3"
}

var objArray = [obj1, obj2, obj3]
var objIndex = 0
var questionNumber = objArray.length;

function nextQuestion(){
    qObj = objArray[objIndex].theQuestion;
    //display the question
    displayQuestion.textContent = qObj;   

    //Create answer buttons from each possible answer in the obj 
        function renderAnswers() {
          //if any answers are available at this time, remove them
          for(var x = 0; x < objArray[objIndex].objAnswers.length; x++){
            var answerLi = document.createElement("li");
            var answerBtn = document.createElement("button");
            displayedAnswers.appendChild(answerLi);
            answerLi.appendChild(answerBtn);
            answerBtn.textContent = objArray[objIndex].objAnswers[x];
            answerBtn.addEventListener("click", checkAnswers);          }
        }   
    renderAnswers();
    console.log(objIndex);
}

// function renderAnswers() {
//   displayQuestion.appendChild(answerBtn);
//   answerBtn.textContent = 
// }

//checks if answer is correct or not. Either way, modify score, clear buttons, then load new question
function checkAnswers(event){
  console.log(event.target.innerText);
  if (event.target.innerText === objArray[objIndex].correct){
    console.log("correct!");
    score += 10;
    objIndex++;
   } else {
     console.log("WRONG");
     score -= 10;
     objIndex++;
   }
   displayedAnswers.textContent = "";
   questionNumber--;
   if(questionNumber > 0){
     nextQuestion()
   } else {
     gameOver()
   }
}

function gameOver(){
  stats.setAttribute("style", "display:block");
  //hide quiz
  quiz.setAttribute("style", "display:none");
  //display Quiz Over or something
  // storeScore();
  localStorage.setItem("Score", score);
  scoreEl.textContent = score;
  // userPrompt();
  // localStorage.userName("User Name", userName);
  // renderScores();
}

function renderScores(){
  //display all user scores in some text box or smthng
}