 

 class user{
  constructor(username){
    this.username = username
  }



 LogMe(){
  console.log(`USERNAME is $(this.username)`);
 }

}

  class Teacher extends user{
    constructor(username, email, password){
      super(username)
      this.email = email
      this.password = password
    }

    addCourse(){
      console.log(`a new course was add by ${this.username}`);
    }
  }
  const chai = new Teacher('chai', "shahii@gmail.com", "123")
  chai.addCourse()
  