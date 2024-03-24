  


  const Descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")

  const chai = {
    name: "ginger chai",
    price:250,
    inStock : true ,
  }
  console.log(Object.getOwnPropertyDescriptor(chai, "name"));

  Object.defineProperties(chai, "name",{
    writable: false,
    enumerable: false,

  })

  console.log(Object.getOwnPropertyDescriptor(chai,"name"));
  

 for (let [key, value] of Object.entries(chai)) {

    if (typeof value !== 'function'){
  
      console.log(`${key} : ${value}`);

    }
  
 }


