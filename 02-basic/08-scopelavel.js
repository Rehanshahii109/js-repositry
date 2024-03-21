  

  // nested scope

  function one(){
    const username = "rehan"

    function two(){
      const website = "youtube"
      console.log(username);

    }
    // console.log(website);

    two()
  }

  // one()

  if (true) {
    const username = "rehan"
    if (username === "rehan"){
      const website = "youtube"
      console.log(username + website);
    }
  }

  // console.log(username); // ReferenceError: username is not defined



  // ********** intersting *******
  
 console.log (addone(5))
  function addone(num){
     return num +1
  }

 

    addone(5)
  const addTwo = function(num){
     return num +1
  }
  