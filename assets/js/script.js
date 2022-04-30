var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startbtn");
var quiz = document.querySelector("#quiz")
var scoreEl = document.querySelector("#score")
var userName = document.querySelector("#userName");
var question = document.querySelector("#question");
var answer1 = document.getElementById("#btn1");
var answer2 = document.getElementById("#btn2");
var answer3 = document.getElementById("#btn3");
var answer4 = document.getElementById("#btn4");

var score;
var timerCount = 50;
var timer;
var wrongAnswer;
var rightAnswer;
var allAnswered;

//create init() - start timer will default to displayed
function init(){
    score = 0; 
    quiz.setAttribute("style", "display:none");
}


//create startTimer to begin game - hide start timer
function startGame() {

    //make disappear startBtn
    startButton.setAttribute("style", "display:none;");
    //make appear quiz
    quiz.setAttribute("style", "display:block");

    
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
        if (timerCount === 0) {
          // Clears interval
          clearInterval(timer);
          gameOver(); //what do? store score and assign to user input name
        }
        console.log(timerCount);
      }, 1000);
      currentQuestion();

}

init();

startButton.addEventListener("click", startGame);

//storeScore() stores the user's score in local storage ================= TO DO


//userPrompt() will ask the user to input their name, =================== TO DO
//which will be attributed to their score

// ================= Object definitions ==========================

var qObj1 = {
  theQuestion: "This is the first question. Choose wisely",
  rightAnswer: "Choose me!",
  wrongAnswer1: "wrong answer 1",
  wrongAnswer2: "wrong answer 2",
  wrongAnswer3: "wrong answer 3"
}
console.log(qObj1);

var qObj2 = {
  theQuestion: "This is the second question. Choose wisely",
  rightAnswer: "whatever",
  wrongAnswer1: "wrong answer 1",
  wrongAnswer2: "wrong answer 2",
  wrongAnswer3: "wrong answer 3"
}

var qObj3 = {
  theQuestion: "This is the third question. Choose wisely",
  rightAnswer: "whatever",
  wrongAnswer1: "wrong answer 1",
  wrongAnswer2: "wrong answer 2",
  wrongAnswer3: "wrong answer 3"
}

var qObj4 = {
  theQuestion: "This is the fourth question. Choose wisely",
  rightAnswer: "whatever",
  wrongAnswer1: "wrong answer 1",
  wrongAnswer2: "wrong answer 2",
  wrongAnswer3: "wrong answer 3"
}

// array for the objects
var objArray = [qObj1, qObj2, qObj3, qObj4];
var btnClicker = document.querySelector(".butt");

function currentQuestion(){
  for (var i = 0; i < 1; i++){

    // For question objArray[i] display the question and the answers
    question.textContent = objArray[i].theQuestion;
    answer1.textContent = objArray[i].rightAnswer;
    answer2.textContent = objArray[i].wrongAnswer1;
    answer3.textContent = objArray[i].wrongAnswer2;
    answer4.textContent = objArray[i].wrongAnswer3;
    // display each button thing for the li stuff and things
    // debugger;
    //display objArray[i] until an answer is selected
    btnClicker.addEventListener("click", function() {
        if (objArray[i].rightAnswer){
            console.log("Right");
            score = score + (100/objArray.length);
        } else if (!objArray[i].rightAnswer){
            console.log("WRONNNGGG");
            timercount -= 10;
        }
    });


}
}


function gameOver(){
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

// function currentQuestion(){
  //put the question text in #question
  //randomize the order of answers in a new array?
  //display each answer in the array
  //add eventlistener to all buttons
  // if (answer == correct)
  //  increase score
  //  next question
  // else
  //  reduce time
  //  next question

  // return gameOver=True

// init();
//   startButton();
//     startTimer();
//         currentQuestion();
//             if right, move on
//             else subract time and move on
//         endTimer();
//     receiveInput();
// displayScore()
// }