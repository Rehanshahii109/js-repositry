// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0);
console.log(null ==0);
console.log(null >=0);

// the reason is that equality check == and comparsions > < >=  <= work differntly.
//comparisons convert null to a number , treating it as 0. that's why (3) null >=0 is true and (1) null> 0 is flase.

console.log(undefined ==0);


// === 

console.log("2" === 2);