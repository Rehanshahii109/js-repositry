//  # javascript and classes


//   ## Oop

//   ## object  
//   1. Object is a collection of properties.and methods.Object
//   = toLowerCase
//   # why use oop 

//   # parts of oop 
//   object literal

//   - constructor
//   - prototypes
//   - classes
//   - instances (new, this)


//   # 4 pillars
//   abstraction
//   encapulation
//   inheritance
//   polymorphise


// const user = {
//   username:"rehan",
//   loginCount:8,
//   signedIn:true,

//   getuserdetails: function(){
    // console.log("got user data")
    // console.log('username: $(this.username)');
  
// }

// }

// console.log(user.username);
// console.log(user.getuserdetails());




  function user(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.username = function(){
      console.log(`wellcome ${"Username"}`)
    }

    return this
  }

  const userOne =  new user("shahii", 12, true)
  const userTwo = new user("ahmad", 50, false)
  console.log(userOne);