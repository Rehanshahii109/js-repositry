   

   const user = {
    username: "rehan",
    price: "999",

    welcomeMessage: function() {
      console.log('${this.username} , welcome to website');  //prints rehan, welcome to website
      // console.log(this)
    }
   }

  //  user.welcomeMessage()

  // user.welcomeMessage()
  // user.username = "shah"
  // user.welcomeMessage()

  // console.log(this)


  // function chai(){
  //   let username = "shahii"
  //   console.log(this)
  // }

  // chai()



    const chai = () => {
     let username = "shahii"
     console.log(this);
   }

  //  chai()


  // const addTwo = (num1, num2) => {
  //   return num1 + num2
  // }

  // const addTwo = (num1, num2) => num1 + num2

  const addTwo = (num1, num2) => ({username: "reha"})

  console.log(addTwo(3,4))


  const myArray = [2, 3, 4]


  myArray.forEach()




