  

  // for of



  // const arr = [1,2,3];

  // for (const num of arr) {
  //   console.log(num);
  // }

  // const greetings = "hello world"
  // for (const greet of greetings) {
  //   console.log(`Each char is ${greet}`)
  // }


  // maps


  const map = new Map()
  map.set( 'IN',  'India' )
  map.set('US', 'USA)')
  map.set( 'PAK', 'Pakistan')

  // console.log(map);


  // for (const  [key, value] of map) {
  //    console.log (key, ':-', value);
  // }



  // const myObject = {
  //   'game1': 'nfs',
  //   'game2':'csgo',
  // }
  // for (const [key, value] of object) {
  //   console.log(key, ':-', value)
  // } not working show this is not irrete


  const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb:  'ruby',
  }
  for (const key in myObject){
    // console.log (`${key} shortcut  is ${myObject[key]} `);
  }


  // const programming = ["js", "cpp", "java"]

  // for (const key in programming){
  //   console.log(programming[key]);
  // }
  
  //      console.log(key);


  const coding = [ 'python', 'ruby', 'java','python', 'cpp']

  coding.forEach(function(val){
    // console.log(val);
  })
  

   coding.forEach((item)=>{
    // console.log(item);
   })

   function printMe(item){
    console.log(item);
   }
  //  console.forEach(printMe);

    //


    // coding.forEach((item, index, arr)=> {
    //   console.log(item, index, arr);
    // })


      const myCoding =[
     {
        languageName: "javascript",
        languageFileName: "js"
     },
     {
        languageName: "ruby",
        languageFileName: "ry"
     },
     {
        languageName: "paython",
        languageFileName: "ph"
     },

      ]

      myCoding.forEach( (item) =>{

        console.log(item.languageName);
      })