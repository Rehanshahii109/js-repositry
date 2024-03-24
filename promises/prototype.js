



  // let myName = "rehan"

  // console.log(myName.trueLength);



   let myHeros = [ "thor","ironman"]

    let heroPower = {
      thor : "Mjolnir",
      spiderman: "The sling ",

      getSpiderPower: function(){
        console.log(`spidy power is $(this.spiderman)`);
    }


    }

    Object.prototype.rehan = function(){
      console.log(`rehan is present in all object`);
    }

    Array.prototype.heyRehan = function(){
      console.log('Rehan says hello');
    }


    heroPower.rehan()
    myHeros.heyRehan()


      

    //  inheritance

    const Teacher = {

      makeVideo:true
    }

    const TeacherSupport = {
      isAvailable: false
    }

    const TASupport = {
      makeAssigment: 'js assignment',
      fulltime: true,
      __proto__:TeacherSupport
    }

    __proto__ = user

     // modren  syntax

     Object.setPrototypeOf(TeachingSupport, Teacher)

     let anotherusername = "chaiaurcode"


     String.prototype.trueLenght = function(){
       console.log(`${this}`);
       console.log(`True lenght is:$(this.trim().lenght)`);
     }

     anotherusername.truelenght()
     "rehan".truelenght()
     