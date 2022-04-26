// Score definitions THERE IS A BETTER WAY I'M SURE
var score = 100; //Decrease for every wrong answer
var question1 = document.querySelector("#1");
var question2 = document.querySelector("#2");
var question3 = document.querySelector("#3");
var question4 = document.querySelector("#4");

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
    wrong1: "wrong answer 1",
    wrong2: "wrong answer 2",
    wrong3: "wrong answer 3"
}

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
    wrong1: "wrong answer 1",
    wrong2: "wrong answer 2",
    wrong3: "wrong answer 3"
}

var qObj4 = {
    theQuestion: "This is the fourth question. Choose wisely",
    rightAnswer: "whatever",
    wrong1: "wrong answer 1",
    wrong2: "wrong answer 2",
    wrong3: "wrong answer 3"
}

var objArray = [qObj1, qObj2, qObj3, qObj4];


// ================= Display Section? =============================

// Create a function that displays the Current Question, which will in turn display Answer Options
function currentQuestion() {
    for (var i = 0; i < objArray.length; i++){
        question = objArray[i].theQuestion;
        correct = objArray[i].rightAnswer;
        wrong1 = objArray[i].wrongAnswer1;
        wrong2 = objArray[i].wrongAnswer2;
        wrong3 = objArray[i].wrongAnswer3;
        console.log(question);
    }

    var answer1;
    var answer2;
    var answer3;
    var answer4;
}

currentQuestion();