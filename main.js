// I need to add the player input into a variable into the file.


let askTheQuestion = "You won! Can we do a best out of three?";
// This is the function that is going to be called when the button is clicked
function gamePlay() {
  // This is the variable that is going to be called when the button is clicked
  let theShot = document.getElementById("thePlayerShot").value;
  // In this line I make play inner to me a lower case by ues a toLowerCase() down below.
  //  console.log(typeof theShot);
  //  this is printing in the clg the Lower Case Word
  //   console.log(theShot === "rock");
  let lower = theShot.toLowerCase();
  //   console.log(lower);
  //   console.log(lower === "rock");
  if (lower === "rock"){
    console.log("They put Rock");  
    // Print the words that I have lost best two out of three.
    document.getElementById("printMyShot").innerHTML = "Winner";
    // This is going to print b/c you want to do three rounds
    document.getElementById("asksTheQuestion").innerHTML = askTheQuestion;
    
    
  }
  else if (lower === "paper"){
    document.getElementById("printMyShot").innerHTML = "You lost";
    // This is going to print b/c you want to do three rounds
    document.getElementById("asksTheQuestion").innerHTML = askTheQuestion
  
  }
  else if (lower === "scissors"){
    document.getElementById("printMyShot").innerHTML = "Tie";
    // This is going to print b/c you want to do three rounds
    document.getElementById("asksTheQuestion").innerHTML = askTheQuestion
  }
  else {
    document.getElementById("printMyShot").innerHTML = "You put something else or I'm not sure what that is";
  }

  // Now that I have made this lower Case I can put that in a If statement
}
