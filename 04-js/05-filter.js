

//  const coding = ["js", "ruby", "java", "python", "cpp"]

//  const values = coding.forEach((item) => {
//    console.log(item);
//    return item
//  })

//  console.log(values);



// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newsNums = myNums.filter((num) =>{
//    return num > 4
// } )


// console.log(newsNums);


  // map //

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNumbers.map( (num) => num + 10)
// console.log(newNums);

 // chaning//

//  const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//  const newNums = myNumbers
//  .map( (num) => num * 10)
//  .map( (num) => num * 1)
//  .filter( (num) => num >=40)
 
// console.log(newNums);

// array.reduce

// const myNums = [1, 2, 3, 4];

//  const myTotal = myNums.reduce(function(acc, crrval){
//   console.log(`acc:$(acc) and currval: $(crrval)`)
//    return acc+crrval;
 
//  }, 0)

  const myTotal = myNums.reduce( (acc, curr) => acc +curr, 0)



 console.log(myTotal);






