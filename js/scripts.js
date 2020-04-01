var vowels = ["a","i","u","e","o"];

$(document).ready(function(){
  $("#input-form").submit(function(event){
    event.preventDefault();

    var userInput = $("#user-input").val();
    var userInputLowerCase = userInput.toLowerCase(); //lowercase
    var userInputLetters = userInputLowerCase.split(""); //array
    // console.log(userInputLetters)
    var score = 0;
    for(var i = 0; i < userInputLetters.length; i++){
      if (userInputLetters[i] === "a"){
        score ++;
      } else if (userInputLetters[i] === "i"){
        score ++;
      } else if (userInputLetters[i] === "u"){
        score ++;
      } else if (userInputLetters[i] === "e"){
        score ++;
      } else if (userInputLetters[i] === "o"){
        score ++;
      }
    }
    // console.log(score)
    $("#result").append(score);

    
    // userInputLetters.forEach(function(userInputLetter){
    //   var inputVowel = [];
    //   if (userInputLetter === "a"){
    //      inputVowel.push(userInputLetter); //koko
    //   };
    //   console.log(inputVowel);
    // });  
  });
});