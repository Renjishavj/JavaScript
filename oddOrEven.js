// function evenOrOdd() {
//     for (var x = 0; x <= 15; x++) {
//         if (x === 0) {
//             console.log(x + " is even");
//         } else if (x % 2 === 0) {
//             console.log(x + " is even");

//         } else {
//             console.log(x + " is odd");
//         }
//     }
// }


// evenOrOdd();

const readline = require('readline-sync');

function evenOrOdd() {
    const input = readline.question("Enter a number: ");
    const x = parseInt(input); 

  
        if (x === 0) {
            console.log(x + " is even");
        } else if (x % 2 === 0) {
            console.log(x + " is even");
        } else {
            console.log(x + " is odd");
        }
    
}

evenOrOdd();



