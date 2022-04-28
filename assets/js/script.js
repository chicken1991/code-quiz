var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#startbtn");
var quiz = document.querySelector("#quiz")
var scoreEl = document.querySelector("#score")
var userName = document.querySelector("#userName");


var score;
var timerCount = 4;
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
}

init();

startButton.addEventListener("click", startGame);

//storeScore() stores the user's score in local storage ================= TO DO


//userPrompt() will ask the user to input their name, =================== TO DO
//which will be attributed to their score

function currentQuestion(){
}


function gameOver(){
  //hide quiz
  quiz.setAttribute("style", "display:none");
  //display Quiz Over or something
  // storeScore();
  localStorage.setItem("Score", score);
  scoreEl.textContent = score;
  // userPrompt();
  localStorage.userName("User Name", userName);
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