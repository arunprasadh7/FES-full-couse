console.log('Hello' +' Arun' + ' Prasadh')

console.log('Arun' [0])

console.log('Hello World' [10])

let a = 'Arun'
console.log(a[a.length-1])

// - - - - -- - - - - - - - - - - - - - - - - - - - 

// Variables - let , var and const

let planet = 'Earth'
let temperature = 20
let isRaining = false

const name = 'Arun'

temperature = temperature + 2
console.log(temperature)

console.log(name)

// - - - - -- - - - - - - - - - - - - - - - - - - - 

// Exercise
// Converting Temperature

let celsius = 50
let farenheit = (celsius * 1.8) + 32

console.log(farenheit)

// - - - - -- - - - - - - - - - - - - - - - - - - - 

// EQUALITY 
// '==' VS '==='

// == - checks only values are same 
let s1 = '1'
let n1 = 1

console.log(s1 == n1) //returns true as both have same values 

console.log(s1 === n1) //returns false as they both are different type (string & number)

// - - - - -- - - - - - - - - - - - - - - - - - - - 

// CONDITIONALS 

let subscribed = false
let loggedIn = false

if (subscribed ) {
  console.log('You can watch the video.')
}

else if (loggedIn) {
  console.log('Upgrade to pro to watch the video')
}

else{
  console.log('Login to get access to course materials')
}

// eg 2
let cash = 20
let price = 40

if (cash > price) {
  console.log(`You have paid extra, here\'s your change of ${cash - price}$.`)
}

else if (cash === price){
  console.log('You paid the exact amount. Have a nice day')
}

else{
  console.log(`You have insufficient amount to buy the product. You still need ${price - cash}$.`)
}

// - - - - -- - - - - - - - - - - - - - - - - - - - 
// TERNARY OPERATORS ?

let major = true

console.log(major ? 'Allowed to drink' : 'Not allowed')

let relationStatus = false
console.log(relationStatus ? 'Let\'s go on a date' : 'I think of you like my sister!' )

// exercise problem
let cash1 = 50
let price1 = 40
let isStoreOpen1 = true

let bill

bill = cash1 >= price1 && isStoreOpen1 ? 'Give receipt' : 'Do not give receipt'

console.log(bill)

// - - - - -- - - - - - - - - - - - - - - - - - - - 

// LOOPS 

// WHILE LOOP

// print all numbers from 1 - 100

let number = 1

while (number <= 100) {
  console.log(number)
  number += 1
}

// FOR LOOP

for (let i = 0; i <=3; i++) {
  console.log(i)
}

let i = 0

for (i; i<=3; i++) {
  console.log('Arun')
}

// - - - - -- - - - - - - - - - - - - - - - - - - - 

// FUNCTIONS 

// function definition
function welcomeUser(fname, lname) {
  console.log(`Hello ${fname} ${lname}!!! \nHave a great year ahead.`)
}

// calling a function
welcomeUser('Arun Prasadh', 'IAS')
welcomeUser('Storm Spirit', 'Mid')
welcomeUser('Invoker', 'Offlane')


// Exercise Adding 2 numbers

function addingTwoNumbers(a, b) {
  let c = a + b
  return c
}

console.log(addingTwoNumbers(5,5))
console.log(addingTwoNumbers(10,5))
console.log(addingTwoNumbers(10,10))

// Exercise : convert celsius to farenheit using functions

function convertTemperature(celsius) {
  let farenheit = (celsius * 1.8) + 32  
  return farenheit
}

console.log(convertTemperature(0))
console.log(convertTemperature(10))
console.log(convertTemperature(30))

// Rewriting above code using arrow functions

const celsiusToFarenheit =  (celsius) => {
  return (celsius * 1.8) + 32
} 

console.log(celsiusToFarenheit(0))
console.log(celsiusToFarenheit(10))
console.log(celsiusToFarenheit(30))

// arrow function to print fullName
const fullName = (fname, lname) => {
  return `Hello ${fname} ${lname}. Hope you're doing good!`
}

console.log(fullName('Arun', 'Prasadh'))

// - - - - -- - - - - - - - - - - - - - - - - - - - 

// ARRAYS 

let arr = [10,20,30,40,'Arun', true, 'Prasadh']

// accessing elements of an array
console.log(arr[0])
console.log(arr[4])
console.log(arr[arr.length-1])

// adding elements to end of an array 
arr.push('Arc')
console.log(arr)

// filter()

let arr2 = [20,30,40,50,100]

let newArray = arr2.filter((element) => element < 50)
console.log(newArray)

let newArray2 = arr2.filter(element => element >= 50)
console.log(newArray2)

let newArray3 = arr2.filter(element => element === 20 || element === 40)
console.log(newArray3)



// map()
let arrMap = [1,4,9,16]

// let newArrayMap = arrMap.map((element) => {
//   console.log(element)
//   // return true
//   // return 'Arun'
//   return 'Lion'
// })

let newArrayMap = arrMap.map(element => 'Lion')

console.log(newArrayMap)

