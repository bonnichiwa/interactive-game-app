$(document).ready(function() {

  // var score = 0 
  startGame();

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
}

  /*---Game interface---*/

  function gameInterface() {
    score = 0;
    questionIndex = 0;
    console.log("Current score: " + score);
    displayQuestion();
  }

  $("#submit-blue-button").click(function() {
    checkAnswer();
  });


  function displayQuestion() {
    $('input:radio[name=radio]').attr('checked',false);
    $(".question").text(quiz[questionIndex].question);
    $("#option1").text(quiz[questionIndex].choices[0]);
    $("#option2").text(quiz[questionIndex].choices[1]);
    $("#option3").text(quiz[questionIndex].choices[2]);
    $("#option4").text(quiz[questionIndex].choices[3]);
    $("#question-number").text(questionIndex+1);
    questionIndex++;
  }

  /*---Checking Answers---*/

  function checkAnswer() {
    var playerAnswer = $("input[name='radio']:checked").val();
    console.log("The player answered: " + playerAnswer);
      if ($("input[name='radio']:checked").size() > 0) {
        if (playerAnswer == quiz[questionIndex].answer) {
          console.log("Score: + 1");
          score++;
          console.log("New current score: " + score);
          $("#score-number").text(score);
        }
        displayQuestion();
      } else {
        alert("Please select a valid answer");
      }
  }


  /*--- Questions--- */
  var quiz = [ 

  {question:"What was the name of Ash Ketchum's first starter Pokemon?",
  choices: ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"],
  answer: 4
  },

  {question:"What is Kadabra's final evolution?",
  choices: ["Mega Alakazam", "Abra", "Abrakadabra", "Alakazam"],
  answer: 1
  },

  {question:"How does Chansey evolve into Blissey?",
  choices: ["Happiness", "Friendship", "Love", "Holding an item"],
  answer: 2
  },

  {question:"Which Pokemon would be the most effective in a battle against Chikorita?",
  choices: ["Milotic", "Pichu", "Nidoking", "Chimchar"],
  answer: 4
  },

  {question:"What type of Pokemon is Gengar?",
  choices: ["Ghost", "Poison", "Dark and Ghost", "Poison and Ghost"],
  answer: 4
  }

  ]

});
