// Practice questions

// 1. Write a for loop that loops through 1 - 20
// if number is divisible by 3 print 'Frontend'
// if number is divisible by 5 print 'Simplified'
// if number is divisible by 3 and 5 print 'Frontend Simplified'
// if number is not divisible by 3 or 5 print the number 

for (let i = 0; i <=20; i += 1) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Frontend Simplified')
  }

  else if (i % 3 === 0){
    console.log('Frontend')
  }

  else if (i % 5 === 0) {
    console.log('Simplified')
  }

  else if (i%3 !== 0 | i %5 !== 5) {
    console.log(i)
  }

  
}

// --------------------------------------------------------------------

// 2. Print out every character from the string 'Frontend Simplified'

let name = 'Frontend Simplified'

console.log(name.length)

for (i = 0; i < name.length ; i+=1) {
  console.log(name[i])
}


// - - - - -- - - - - - - - - - - - - - - - - - - - 

// 3. Filter out all the fail elements in an array

  // 1 - using filter method

let arr1 = ['A', 'A+', 'FAIL']
let pass1 = arr1.filter(grade => grade !== 'FAIL')
console.log(pass1)

let arr2 = ['FAIL', 'FAIL', 'B']
let pass2 = arr2.filter(grade => grade !== 'FAIL')
console.log(pass2)

let arr3 = ['FAIL']
let pass3 = arr3.filter(grade => grade !== 'FAIL')
console.log(pass3)

  // 2 - Without using filter method

let ar1 = ['A', 'A+', 'FAIL']
let p1 = []

for (let i = 0; i < ar1.length; i +=1){
  if (ar1[i] !== 'FAIL') {
    p1.push(ar1[i])
  }
}
console.log(p1)

let ar2 = ['FAIL', 'FAIL', 'B']
let p2 = []

for (let i = 0; i < ar2.length; i += 1) {
  if (ar2[i] !== 'FAIL') {
    p2.push(ar2[i])
  }
}
console.log(p2)


let ar3 = ['FAIL']
let p3 = []

for(let i = 0; i < ar3.length; i += 1) {
  if (ar3[i] !== 'FAIL') {
    p3.push(ar3[i])
  }
}
console.log(p3)


// - - - - -- - - - - - - - - - - - - - - - - - - - 

// Turn each element in an array of dollars into cents 

let dollar1 = [1, 5, 10, 3]
let cents1 = dollar1.map(dollar => dollar * 100)
console.log(cents1)

let dollar2 = [0, 10, 20]
let cents2 = dollar2.map(dollar => dollar * 100)
console.log(cents2)