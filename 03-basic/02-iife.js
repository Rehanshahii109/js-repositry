  

  // immediatly invoked function expressions (IIFE)


  (function chai(){

    //name iife
    console.log('DB CONNECTED');
  })();
  
  // un-name iife
  ( () =>{
    console.log('DB CONNECTED Two ${name}');
  })('shahii')