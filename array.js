// //1. Creating an array using split
let js = 'JavaScript'
const charsInJavaScript = js.split("")

console.log(charsInJavaScript)


// // 2.Accessing array items using index
const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[3]
console.log(firstFruit)


// // 3.Modifying array element
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10      // changing 1 at index 0 to 10
numbers[1] = 20      // changing  2 at index 1 to 20
console.log(numbers) 


// // 4.array.fill()
const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXvalues) 

// // 5.arrayconcat()
const firstList = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList = firstList.concat(secondList)
console.log(thirdList)


// // 6.array.length
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.length) 


// //7.array.isArray
const numbers = [1, 2, 3, 4, 5]
console.log(Array.isArray(numbers))


// // 8.array.toString
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.toString())


// // 9.array.join
const numbers = [1, 2, 3, 4, 5]
console.log(numbers.join(""))

// // 10.array-slice
const numbers = [1,2,3,4,5]
console.log(numbers.slice(1,4))// it doesn't include the ending position

// // 11.array-splice
const numbers = [1, 2, 3, 4, 5]
	numbers.splice(2,2)
  console.log(numbers) // remove the first item

// // 12.array-push
const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers)

// // 13.array-pop
const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers)

// //14.array-shift
const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers)

// //15.array-shift
const numbers = [1, 2, 3, 4, 5]
numbers.unshift(8) // -> add one item from the beginning
console.log(numbers)

//16.array-sort
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  webTechs.sort()
  console.log(webTechs)