

  class user {
    constructor (email, password){
      this.email = email;
      this.password = password
    }

    get email(){
      return this._email.toUpperCase()
    }

    set email(value){
      return this._email = value
    }

    get password(){
          return `$(this._password)rehan`
    }

    set password(value){
      this._password = value
    }
  }


  const rehan = new user ("rehan@df.ai", "abc")
  console.log(rehan.password);
  console.log(rehan.email);


  // propertis


   function user(email, password){
    this._email = email;
    this._password = password

      
    Object.defineProperty(this, 'email', {
      get: function(){
       return this._email.toUpperCase()
      },
      set: function(value){
        this.email = value
      }
    })
   

   }

   const chai = new user('chai@chai.com', "chai")
   console.log(chai.email);



  