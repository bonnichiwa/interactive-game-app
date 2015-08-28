$(document).ready(function() {

  startGame();

  /*---Clicking start---*/

  function startGame() {
    openingSong();
    $('#commence-button').click(function() {
      $("#landing-page").fadeOut(1000);
      $("#quiz-interface").fadeIn(1000);
      $("#opening-song")[0].pause();
      battleSong();
      gameInterface();
    })

    $('#new-button').click(function() {
    $("#quiz-interface").fadeOut(1000);
    $("#landing-page").fadeIn(1000);
    $("#battle-song")[0].pause();
    openingSong();
  })
}

  
  /*---Music--*/

  function openingSong() {
    $('#opening-song')[0].volume = 0.5;
    $('#opening-song')[0].load();
    $('#opening-song')[0].play();
  }

  function battleSong() {
    $('#battle-song')[0].volume = 0.5;
    $('#battle-song')[0].load();
    $('#battle-song')[0].play();
  }

  function endingSong() {
    $('#end-song')[0].volume = 0.5;
    $('#end-song')[0].load();
    $('#end-song')[0].play();
  }

  /*---Game interface---*/

  function gameInterface() {
    score = 0;
    questionIndex = 0;
    $("#score-number").text("-");
    $(".poke-tabs").find('li').removeClass();
    $(".poke-tabs").find('li').addClass("tbd");
    console.log("Current score: " + score);
    console.log("Current question index: " + questionIndex);
    displayQuestion();
  }

  $("#submit-blue-button").click(function() {
    checkAnswer();
  });


  function displayQuestion() {
    if (questionIndex < 5) {
      $('input:radio[name=radio]').attr('checked',false);
      $(".question").text(quiz[questionIndex].question);
      $("#option1").text(quiz[questionIndex].choices[0]);
      $("#option2").text(quiz[questionIndex].choices[1]);
      $("#option3").text(quiz[questionIndex].choices[2]);
      $("#option4").text(quiz[questionIndex].choices[3]);
      $("#question-number").text(questionIndex+1);
      console.log("Current question index: " + questionIndex);
    } else {
      $('#battle-song')[0].pause();
      endingSong();
      $("#quiz-interface").fadeOut(1000);
      $("#congrats-end").fadeIn(1000);
      endGame();
    }
  }

  /*---Checking Answers---*/

  function checkAnswer() {
    var playerAnswer = $("input[name='radio']:checked").val();
    console.log("The player answered: " + playerAnswer);
    console.log("For question index #: " + questionIndex);
      if ($("input[name='radio']:checked").size() > 0) {
        if (playerAnswer == quiz[questionIndex].answer) {
          console.log("Score: + 1");
          // $("#super-effective").css("display","block");
          score++;
          console.log("New current score: " + score);
          $("#score-number").text(score);
          $(".tbd[value=" + questionIndex + "]")
          .removeClass("tbd")
          .addClass("correct");
        } else {
          $(".tbd[value=" + questionIndex + "]")
          .removeClass("tbd")
          .addClass("wrong");
        }
        questionIndex++;
        $(".explanation[value=" + questionIndex + "]").fadeIn(500);
        $(".explanation[value=" + questionIndex + "]").click(function() {
          $(".explanation[value=" + questionIndex + "]").fadeOut(500);
          displayQuestion();
        })
      } else {
        alert("Please select a valid answer");
      }
  }

  /*-- End game--*/
  function endGame() {
    $("#final-score").text(score);
    $("#try-button").click(function() {
      $('#end-song')[0].pause();
      $("#congrats-end").fadeOut(2000);
      $("#landing-page").fadeIn(2000);
      startGame();
    });
  }


  /*--- Questions--- */
  var quiz = [ 

  {question:"What was the name of Ash Ketchum's first starter Pokemon?",
  choices: ["Bulbasaur", "Charmander", "Squirtle", "Pikachu"],
  answer: 4
  },

  {question:"Which Pokemon is Kadabra's final evolution?",
  choices: ["Mega Alakazam", "Abra", "Abrakadabra", "Alakazam"],
  answer: 1
  },

  {question:"What does Chansey need to evolve into Blissey?",
  choices: ["Happiness", "Friendship", "Love", "Holding an item"],
  answer: 2
  },

  {question:"Who would be the most effective in a battle against Chikorita?",
  choices: ["Milotic", "Pichu", "Nidoking", "Chimchar"],
  answer: 4
  },

  {question:"Which of the following type(s) of Pokemon is Gengar?",
  choices: ["Ghost", "Poison", "Dark and Ghost", "Poison and Ghost"],
  answer: 4
  }

  ]

});
