let readLineSync = require("readline-sync");
let userName = readLineSync.question(`What's your name?`);
console.log(`Welcome ${userName} ^.^ 
Today we are going to play a quiz about the famous american tv series FRIENDS !
NOTE:only use alphabets to answer the questions`);
let myCounter = 0;
let myQuiz = (question, answer) => {
  let userAnswer = readLineSync.question(question);
  if (userAnswer === answer) {
    myCounter++;
    console.log("Correct !");
  } else {
    console.log("Worng *.*");
    myCounter--;
  }
  console.log("Current Score : ", myCounter);
  console.log("--------------------");
};

let myQuestions = [
  { question: " How many seasons of Friends are there?", answer: "ten" },
  {
    question: "Joey played Dr. Drake Ramoray on which soap opera show?",
    answer: " Days of Our Lives",
  },
  { question: " How many times did Ross get divorced?", answer: "three" },
  { question: "What store does Phoebe hate?", answer: "pottery barn" },
  {
    question: "Rachel got a job with which company in Paris?",
    answer: "Louis Vuitton",
  },
  { question: "Monica dated an ophthalmologist named?", answer: "richard" },
];

myQuestions.forEach((value) => {
  myQuiz(value.question, value.answer);
});

console.log(`Your score is : `, myCounter);