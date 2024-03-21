



function sayMyName() {
  console.log("r");
  console.log("e");
  console.log("h");
  console.log("a");
  console.log("n");
}

// sayMyName()

function addTwoNumbers(number1, number2) {

  let result = number1 + number2
  console.log("rehan");
  return result



}

const result = addTwoNumbers(3, 4)

// console.log("result:", result);


function loginUserMessage(username = "rehan"){

  if( username === undefined){
   console.log("Please enter your username");
   return
  }
  return '${username}  just logged in'
}

 console.log(loginUserMessage("rehan "))



