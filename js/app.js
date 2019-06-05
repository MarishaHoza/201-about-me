'use strict';

// reminder to self: command + d to select multiple instances of same text selected

// -------- TODO ------
/*
add descriptive console logs
add info to html page and convert to unordered list
write a user story for my readme file
add an ordered list top 10 something
*/


// --------------- Global variables -------------------

// questions
var quizQuestions = ['Did I grow up in North Pole?', 'Do I believe that dogs are better than cats?', 'Am I taller than an average-size muskox?', 'Do I like puns?', 'Is my vision better than 20/20?', 'How many tattoos do I have?', 'Can you guess one of my top 5 favorite things to do outside of work?'];

// answers
var correctAnswers = ['yes', 'no', 'yes', 'yes', 'no', '2'];
var incorrectAnswers = ['no', 'yes', 'no', 'no', 'yes'];
var top5 = ['paint', 'hike', 'kayak', 'ski', 'game'];

// other
var answeredCorrectly = 'Correct!';
var answeredIncorrectly = 'WRONG.';
var remindRules = 'You need to answer with a "yes" or "no"';
var responses = [];
var numCorrectResponses = 0;



// =========================== BEGIN QUIZ ===============================

// introduction alert explaining the quiz
alert('Welcome to the quiz of Marisha Hoza! \nThe following questions have a yes or no answer.');


// ----------------------- yes/no quiz questions ----------------------------
// IF MORE QUESTIONS ARE ADDED TO THE YES / NO SECTION, REMEMBER TO UPDATE THE FOR LOOP BREAK POINT

for (var i = 0; i < 5; i++){
  // ask the user a question from our quiz questions array
  // change their response to lowercase and store it in a temporary variable
  var temp = prompt(quizQuestions[i]).toLowerCase();
  console.log('question ' + i + ' user\'s response was : ' + temp);

  // if the user responds with a "y" or "n", change the format of their response to a standard "yes" or "no" value and add it to the responses array
  // if they respond with something else, add it to the responses array as-is
  if (temp === 'y'){
    responses.push('yes');
  } else if (temp === 'n'){
    responses.push('no');
  } else {
    responses.push(temp);
  }

  // if the user answers correctly, display the correct answer text and add to their tally
  if (responses[i] === correctAnswers[i]){
    alert(answeredCorrectly);
    numCorrectResponses++;
    console.log('user got the answer right.');

  // if the user answers incorrectly, display the incorrect answer text
  } else if (responses[i] === incorrectAnswers[i]){
    alert(answeredIncorrectly);
    console.log('user got the answer wrong');

  // if the user answers in a bad format display the explanation text
  } else {
    alert(remindRules);
    console.log('user didn\'t input their answer correctly');
  }

  console.log('number of correct answers so far : ' + numCorrectResponses);
}


// ----------------------- quiz questions with a number guess ----------------------------
alert('My last two questions don\'t need a yes/no response. Go ahead and answer as you see fit.');


// set some new variables
var remainingResponses = 4;
var gotIt = false;


// while the user still has response attempts and they haven't gotten the correct answer
while (remainingResponses > 0 && gotIt === false){

  // prompt the question
  var guessedNumber = prompt(quizQuestions[i]);
  console.log('question ' + i + ' user guessed : ' + guessedNumber);

  // if they got the right answer, let them know, set the gotIt tracker to true to break the loop, and increment their number of correct responses
  if (guessedNumber === correctAnswers[i]) {
    alert(answeredCorrectly);
    gotIt = true;
    numCorrectResponses++;
    console.log('correct');

  // if their response is less than the correct answer, decrement their remaining attempts and let them know.
  } else if (guessedNumber < correctAnswers[i]) {
    remainingResponses--;
    alert('More than that! Try again. You have ' + remainingResponses + ' tries left.');
    console.log('wrong - correct answer is more');


  // if their response is greater than than the correct answer, decrement their remaining attempts and let them know.
  } else if (guessedNumber > correctAnswers[i]) {
    remainingResponses--;
    alert('Less than that! Try again. You have ' + remainingResponses + ' tries left.');
    console.log('wrong - correct answer is less');

  // if they didn't use a number, decrement their remaining attempts and let them know
  } else {
    remainingResponses--;
    alert('Try choosing a number this time. You have ' + remainingResponses + ' tries left.');
    console.log('wrong - need to input number');
  }

  console.log('number of correct answers so far : ' + numCorrectResponses);
}



// ----------------------- quiz questions with multiple valid answers ----------------------------

// reset reamining responses to 6, reset gotIt to false, and add 1 to the quiz question counter
remainingResponses = 6;
gotIt = false;
i++;

// while the user still has response attempts and they haven't gotten the correct answer
while (remainingResponses > 0 && gotIt === false) {

  // prompt the question, change the response to lowercase
  var guessedActivity = prompt(quizQuestions[i]).toLowerCase();
  console.log('question ' + i + ' user guessed : ' + guessedActivity);

  // set up a loop to go through all the valid correct answers
  for (var j = 0; j < top5.length; j++){

    // if the user's guess is one of the valid answers, let them know, break the while loop, and increment their correct response tracker
    if (guessedActivity === top5[j]){
      alert(answeredCorrectly + ' my answers were : ' + top5.join(', '));
      gotIt = true;
      numCorrectResponses++;
      console.log('correct');
    }
  }

  // if their answer doesn't match any of the correcct answers
  if (gotIt === false){

    // decrement their number of remaining attempts
    remainingResponses--;
    console.log('wrong');

    // if they still have remaining attempts, let them know how many
    if (remainingResponses > 0){
      alert(answeredIncorrectly + ' You have ' + remainingResponses + ' tries left.');
      console.log('number of remaining responses : ' + remainingResponses);

      // if they have no more attempts, let them know what the correct answers were
    } else {
      alert(answeredIncorrectly + ' my answers were : ' + top5.join(', '));
      console.log('no more responses');
    }
  }

  console.log('number of correct answers so far : ' + numCorrectResponses);
}


// =========================== END QUIZ ===============================

// alert the user about their quiz score
alert('That\'s the end of the quiz! You got ' + numCorrectResponses + ' out of ' + quizQuestions.length + ' correct!');

// write their score to the page
document.getElementById('numberCorrect').innerHTML = numCorrectResponses;
document.getElementById('numQuestions').innerHTML = quizQuestions.length;
