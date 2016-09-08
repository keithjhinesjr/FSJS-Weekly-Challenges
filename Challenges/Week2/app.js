//create function
  //control and return statements

//Prompt user for input and store variable

function processInput(message)

{
  
    if(message == "hello")
    {
        return("What's up?");
    
    }
    
    
    else{
        return("You suck!");
    }
    
    
}

var userInput = prompt("Hello");

var response = processInput(userInput);

console.log(response);

processInput(userInput);

//Call function

//Alert user results
