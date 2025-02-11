// I need to add the player input into a variable into the file.
let askTheQuestion = "You won! Can we do a best out of three?";
// This is a function is going to run when the shot button is hunt.
// Also this function is going to return a lower case input to check in the If statement
function gamePlay() {
  // This is getting that what the play said and putting it inside a variable
  let theShot = document.getElementById("thePlayerShot").value;
  // In this line I make play inner to me a lower case by ues a toLowerCase() down below.
  //  console.log(typeof theShot);
  //  this is printing in the clg the Lower Case Word
  //   console.log(theShot === "rock");
  let lower = theShot.toLowerCase();
  //   console.log(lower);
  //   console.log(lower === "rock");
  if (lower === "rock"){
    // console.log("They put Rock");  
    // Print the words that I have lost best two out of three.
    document.getElementById("printMyShot").innerHTML = "Winner";
    // This is going to print b/c you want to do three rounds
    document.getElementById("asksTheQuestion").innerHTML = askTheQuestion;
    
  }
  

  // Now that I have made this lower Case I can put that in a If statement
}
