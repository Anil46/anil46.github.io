function populate() {
  if(quizObject.isEnd()){
    console.log("Congrats.... your quiz has been completed")
  }else{
    var element = document.querySelector("#question")
  var questionObject = quizObject.getQuestionObject()
  element.innerHTML = questionObject.text

  questionObject.options.forEach((option, i) => {
    document.getElementById("choice" + i).innerHTML = option;
    addGussEvent("choice"+i,option)
  });
}
  }

function addGussEvent(id,option){
  document.getElementById(id,option).addEventListener("click",function(){
    quizObject.checkCorrectAnswer(option)
  })

}
class Question {
  constructor(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
  }
}

var questions = [
  new Question(
    "Which is not An Object Oriented Programming Language ? ",
    ["C", "C++", "Java", "C"],
    "C"
  ),
  new Question(
    "Which Language is Used for styling the webpages ? ",
    ["HTML", "CSS", "Java", "Jquery"],
    "CSS"
  ),
  new Question(
    "THere are _ main components in OOP Language ? ",
    ["1", "2", "3", "4"],
    "4"
  ),
  new Question(
    "Which Language is used for Web apps ? ",
    ["PHP", "PYthon++", "Java", "All"],
    "All"
  ),
  new Question(
    "Which is MVC ? ",
    ["Language", "Library", "Framework", "All"],
    "Framework"
  ),
];

class Quiz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionindex = 0;
  }
}
Quiz.prototype.getQuestionObject = function () {
  return this.questions[this.questionindex]
}

Quiz.prototype.checkCorrectAnswer=function(answer){
  if(this.questions[this.questionindex].answer == answer){
    console.log("congrats you selected correct answer")
    this.score ++;
  }
  this.questionindex ++;
  populate()
 
}
Quiz.prototype.isEnd=function(){
  return this.questions.length == this.questionindex
}
var quizObject = new Quiz(questions);


populate()

