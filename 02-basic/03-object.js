  

  // singleton
  // object.create = is singleton


  // objects literals

  const mySym = Symbol("key1")

  const jsUser = {
    name: "rehan",
    "full name": "ali rehan",
    [mySym]: "myKey1",
    age: 19,
    location: "nomal",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "friday"]
  }

  console.log(jsUser.email)
  console.log(jsUser["email"])
  console.log(jsUser["full name"])
  console.log(jsUser[mySym])

  jsUser.email = "shahii@chat.com"
  // Object.freeze(jsUser)
  jsUser.email = "rehan@as.com"
  console.log(jsUser);


  // function

  jsUser.greeting = function(){
    consolelog("hello js user");
  }

  jsUser.greetingTwo = function(){
    console.log('hello js user, ${this.name}');
  }

  console.log(jsUser.greeting());
  console.log(jsUser.greetingTwo()); 

  