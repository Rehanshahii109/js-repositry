 


 class user{
  constructor(username){
    this.username = username
  }

  logMe(){
    console.log(`username: ${this.username}`);
  }

  createId(){
    return `123`
  }
 }

 const rehan = new user("rehan")
 console.log(rehan.createId())



 class Teacher extends user {
  constructor(username, email){
    super(username)
    this.email = email
  }
 }

 const iphone = new Teacher("iphone", "i@gmail.com")
 console.log(iphone.createId());