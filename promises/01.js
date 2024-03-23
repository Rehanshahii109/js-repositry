  


  const promiseOne = new  Promise( function(resolve, reject){
    // do something that takes a long time...
     // db calls, cryptography, network

     setTimeout( function(){
        console.log('Async task is complete');
        resolve("I'm done!");
     }, 1000)
  })

  promiseOne.then(function(){
    console.log("Promise One has completed");
  })


    new  Promise(function(resolve, reject){
    setTimeout(function(){
      console.log("Aysnic task two");
      resolve()
    },1000);


  }).then(function(){
    console.log("aysnc 2 resolved");
  })


  //  const promiseThree = new promiseOne(function(resolve, reject) {
  //   setTimeout( function(){
  //     resolve({usrname: "chai", email: "chai@codeexample.com"})
  //   },1000);
  //  })

  //  promiseThree.then(function(user){
  //   console.log(user);
  //  })


  const promiseFour = new  Promise((resolve,reject)=>{
  setTimeout(function() {
    let error =  true
    if (error) {
      resolve({username: "rehan", password: "123"})
    } else{
      reject('error: somthing went wrong')
    }
  }, 1000);


  })
  
  promiseFour.then((user) =>{

    console.log(user);
    return user.username
  }).then((username) =>{

       console.log(username);
   }).catch(function(error){
     console.log(" Error") 
   }).finally(() =>console.log("Finished"));


  
   const promiseFive = new Promise((resolve, reject) => {
     
    setTimeout(function() {
      let error =  true
      if (error) {
        resolve({username: "shahii", password: "123"})
      } else{
        reject('error: somthing is  wrong')
      }
    }, 1000);

   });

    // async function consumePromiseFive(){
    //   const response = await promiseFive
    //   console.log(response);
    // }
      
    // consumePromiseFive() {
    
      try {
          const response = await promiseFive
          console.log(response);
      } catch (error) {
        console.log(error);
      }
    
      
    consumePromiseFive()




   


    