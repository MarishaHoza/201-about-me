'use strict';

// command + d to select multiple instances of same text selected

var quizQuestions = ['Does Sanda Claus ride a motorcycle?', 'Is a muskox more similar to a moose than a yak?', 'Is your favorite color blue?', 'Pineapple pizza is a valid type of pizza.', 'Some dinosaurs were larger than a blue whale.'];

var answerText = ['The official Santa Claus of the United States lives in North Pole, Alaska (my home town). He\'s frequently seen riding around town on a harley.', 'A muskox is almost nothing like a moose. I\'ll add a pic for you later.', '(because Monty Python and the Holy Grail)', 'A pineapple may be a fruit, but so is a tomato!', 'Blue whales are the largest animal to have ever lived on earth (that we know of). However, there are some living organisms (like trees and mushrooms) that are larger.'];

// introduction alert explaining the quiz
alert('Welcome to the quiz of Marisha Hoza! \nThe following questions have a yes or no answer.');

// quiz question
var santa = prompt(quizQuestions[0]).toLowerCase();
if (santa === 'yes' || santa === 'y' || santa === 'yep' || santa === 'yee'){
  alert('Heck yeah he does! ' + answerText[0]);
} else if (santa === 'no' || santa === 'n' || santa === 'nope') {
  alert('Wrong! ' + answerText[0]);
} else {
  alert('Try answering the next question with a yes or no! The answer to this question was yes. ' + answerText[0]);
}

// quiz question
var muskox = prompt(quizQuestions[1]).toLowerCase();
if (muskox === 'yes' || muskox === 'y' || muskox === 'yep' || muskox === 'yee'){
  alert('WRONG. ' + answerText[1]);
} else if (muskox === 'no' || muskox === 'n' || muskox === 'nope') {
  alert('Nice! You probably already know what a muskox is, but I\'ll also be adding a pic of one for you later. ');
} else {
  alert('Try answering the next question with a yes or no! The answer to this question was no. ' + answerText[1]);
}

// quiz question
var colorBlue = prompt(quizQuestions[2]).toLowerCase();
if (colorBlue === 'yes' || colorBlue === 'y' || colorBlue === 'yep' || colorBlue === 'yee'){
  alert('You may pass the Bridge of Death ' + answerText[2]);
} else if (colorBlue === 'no' || colorBlue === 'n' || colorBlue === 'nope') {
  alert('You are cast into the Gorge of Eternal Peril ' + answerText[2]);
} else {
  alert('Try answering the next question with a yes or no! The answer to this question was yes. ' + answerText[2]);
}

// quiz question
var pizza = prompt(quizQuestions[3]).toLowerCase();
if (pizza === 'yes' || pizza === 'y' || pizza === 'yep' || pizza === 'yee'){
  alert('Agreed! ' + answerText[3]);
} else if (pizza === 'no' || pizza === 'n' || pizza === 'nope') {
  alert('Stop hating on other people\'s pizza!! ' + answerText[3]);
} else {
  alert('Try answering the next question with a yes or no! The answer to this question was yes. ' + answerText[3]);
}

// quiz question
var whale = prompt(quizQuestions[4]).toLowerCase();
if (whale === 'yes' || whale === 'y' || whale === 'yep' || whale === 'yee'){
  alert('I\'m not sure if you realize how big blue whales are! ' + answerText[4]);
} else if (whale === 'no' || whale === 'n' || whale === 'nope') {
  alert('Correct! ' + answerText[4]);
} else {
  alert('Why are you trying to break things?! You\'ll have to refresh the page if you want to try some valid answers. ' + answerText[4]);
}


