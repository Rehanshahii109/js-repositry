  

  // javascript execution context //

  // global ec => is (this)

  //global execution context
  //function execution context
  //eval execution context

   // there is two phase of js exection
   //memory creation phase = allocate  memory for variables declared in script and functions

   //example
   var val1=10
   let val2= 2
   function addNum(num1, num2){
     let total = num1 + num2
     return total
   }

   let result1 = addNum(val1, val2)
   let result2 = addNum(10, 2)

   // steps

   // 1 = golbal execution => this
   // 2 = memory phae => val1->undefind
                //    => val2-> undefind
      // addnum -> defination
      // result 1 -> undefined
      // result 2 -> undefined


    // 3 = execution phase
    // val1 - 10
    // val2 - 5
    // add num -> new variable excution enverment + execution thred  we get


    // memory phase

    // val1 ->undefined
    // val2 -> undifend
    // total -> undefined

    // execution context

    // num1 - 10 
    // num2 - 5
    // total - 15



    // call stack //

    
