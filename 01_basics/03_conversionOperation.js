let score = "33"
let score1 =undefined

console.log(typeof score)
//or
console.log(typeof (score))


let valueInNumber = Number(score)
console.log(typeof valueInNumber)

let valueInNumber1 = Number(score1)

console.log(valueInNumber)
console.log(valueInNumber1);


//"33"  => 33
// "33abc" => NaN
// true => 1; false =>0
// null=0
// undefined =>NaN

let isLoggedIn = 1

let booleanIsLoggedIn= Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

// 1 => true; 0 => false
// ""=> false; "Pranab"=>true

let someNumber= 33
let StringNumber=String(someNumber)
console.log(StringNumber+22)
