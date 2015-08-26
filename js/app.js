$(document).ready(function() {

  var currentQuestion = 1
  var score = 0 
  startGame();
  nextQuestion();

  /*---Clicking start---*/

  function startGame() {
  $('#commence-button').click(function() {
    $("#landing-page").fadeOut(1000);
    $("#quiz-interface").fadeIn(1000);
    gameInterface();
  })

  $('#new-button').click(function() {
    $("#quiz-interface").fadeOut(1000);
    $("#landing-page").fadeIn(1000);
  })

  /*---Game interface---*/

  function gameInterface() {
    score = 0;
    questionIndex = 0;
    displayQuestion();
  }

  function nextQuestion() {
    $("#submit-blue-button").click(function() {
      questionIndex++;
      displayQuestion();
    });
  }

  function displayQuestion() {
    $(".question").text(quiz[questionIndex].question);
    $("#option1").text(quiz[questionIndex].choices[0]);
    $("#option2").text(quiz[questionIndex].choices[1]);
    $("#option3").text(quiz[questionIndex].choices[2]);
    $("#option4").text(quiz[questionIndex].choices[3]);
    $("#question-number").text(questionIndex+1);
  }


  /*--- Questions--- */
  var quiz = [ 

  {question:"What was the name of Ash Ketchum's first starter Pokemon?",
  choices: ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"]
  },

  {question:"What is Kadabra's final evolution?",
  choices: ["Abra", "Abrakadabra", "Alakazam", "Mega Alakazam"]
  },

  {question:"How does Chansey evolve into Blissey?",
  choices: ["Happiness", "Friendship", "Love", "Holding an item"]
  },

  {question:"Which Pokemon would be the most effective in a battle against Chikorita?",
  choices: ["Milotic", "Pichu", "Nidoking", "Chimchar"]
  },

  {question:"What type of Pokemon is Gengar?",
  choices: ["Ghost", "Poison", "Dark and Ghost", "Poison and Ghost"]
  }

  ]}
});