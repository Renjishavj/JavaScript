//1.with out parameter

function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
    // return sq
  }
  // console.log(square())
  square()

//2.with parameter

function mul(number){
    // return  number*number
    let result=number*number;
    console.log(result)
}
// console.log(mul(5))
mul(5)


// //3.Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
  }
  console.log(sumTwoNumbers(10, 20))
 
//4.Function with many parameters
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  const numbers = [1, 2, 3, 4, 5];
      //calling a function
  console.log(sumArrayValues(numbers));
