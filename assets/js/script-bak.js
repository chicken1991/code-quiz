// Score definitions THERE IS A BETTER WAY I'M SURE
var score = 100; //Decrease for every wrong answer
var question = document.querySelector("#question");
var answer1 = document.getElementById("#btn1");
var answer2 = document.getElementById("#btn2");
var answer3 = document.getElementById("#btn3");
var answer4 = document.getElementById("#btn4");



// Where do I store the questions? Object and parse with JSON?

// How do I want to do the buttons? Each object has a Right Answer and three set Wrong Answers,
// and the buttons will be randomly displayed

// if an answer is selected, set the attribute of that question as either True or False
//      If false, score is decreased
//      If true, score remains the same

// At the end of the quiz, display all answers?
//      If attribute is Wrong Answer, display selected answer in red
//      If attribute is Right Answer, display selected answer in green

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
var btnClicker = document.querySelectorAll(".butt");

console.log(btnClicker);
//hardcoded stuff for fun
// question.textContent = objArray[1].theQuestion;
// answer1.textContent = objArray[1].rightAnswer;

// array for the arrays < wtf?

// Create a function that displays the Current Question, which will in turn display Answer Options
function currentQuestion() {

    for (var i = 0; i < 1; i++){

        // For question objArray[i] display the question and the answers
        question.textContent = objArray[i].theQuestion;
        answer1.textContent = objArray[i].rightAnswer;
        answer2.textContent = objArray[i].wrongAnswer1;
        answer3.textContent = objArray[i].wrongAnswer2;
        answer4.textContent = objArray[i].wrongAnswer3;
        // display each button thing for the li stuff and things
        debugger;
        //display objArray[i] until an answer is selected
        btnClicker[i].addEventListener("click", function() {
            if (objArray[i].rightAnswer){
                console.log("Right");
            } else {
                console.log("WRONNNGGG");
            }
        });


    }
}


// currentQuestion();
