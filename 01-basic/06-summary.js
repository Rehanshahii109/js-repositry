// primitive

// 7 types : string, number, boolean, null,       undefined, symbol,bigint

//  javascript is dynimic language

const score = 100 
const scoreValue = 100.5

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId)


//refernce types (non-primitive)

//arry,objects,functions

const heros = ["rehan", "shahii", "farman"];
let myObj = {
  name: "ali",
  age:20,
}


const myFunction = function(){
  console.log("hello world");
}

console.log(typeof bigNmuber);