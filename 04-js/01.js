 

 // is statment

  // const isUserLoggedIn = true
  // const temperature = 42


  // if (temperature === 50){
  //     console.log(" temperature less than 50" );
  //  } else{

  //  console.log("temperature is greater than 50");

  //  }

// conditional rendering

// const score = 200

// if (score > 100){
//     const power = "fly"
//     console.log('user power: ${power}');
// }

// console.log('user power: ${power}');


const balance = 1000

//  if (balance > 500) console.log("test");


// if (balance > 500 ) {
//   console.log("less than");
// } else if (balance < 750){
//   console.log("less than 750");

// } else if (balance < 900){
//   console.log("less than 7500");

// } else{
//    console.log(" less than 1200");
// }


// const isUserLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (isUserLoggedIn && debitCard && 2==3){
//   console.log("Allow to buy course");
// }

// if(loggedInFromGoogle || loggedInFromEmail){
//   console.log("user logged in");
// }

 // switch //


  //  switch (key) {
  //   case value:
      
  //     break;
   
  //   default:
  //     break;
  //  }

  // const month = 3

  // switch (month) {
  //   case 1:
  //     console.log( "January");
  //     break;
  //   case 2:
  //     console.log( "feb");
  //     break;
  //   case 3:
  //     console.log( "march");
  //     break;
  //   case 4:
  //     console.log( "april");
  //     break;
  
  //   default:
  //     console.log("april")
  //     break;
  // }


  // truth e /  falsey values


    const userEmail = "h@ali.ai"

    if(userEmail){
      console.log("got user email");
    } else{
      console.log("dont have user email");
    }

     //falsy values 

    // false, 0, -0, BigInt 0n, "", null, undefined, NaN

    // truthy values
    // "0", 'fasle', " ", [], {}, function(){}

    // if (userEmail.length === 0){
    //   console.log("Array is empty");
    // }

    // const emptyObj = {}
    
    // if (Object.keys(emptyObj).length === 0) {
    //   console.log('Empty object');
    // }


    // nullish coalescing operator (??): null undifined

    // let val1;
    // // val1 = 5 ?? 10
    // // val1 = null ?? 10
    // val1 = undefined ?? 15

    // console.log(val1);

    // logical operators: && , ||

    // terniary operator 

    condition ? true : false

    const iceTeaPrice = 100
    iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")