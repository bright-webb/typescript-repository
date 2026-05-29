// A loop is a mechanism that allows us to repeat a block of code multiple times. In TypeScript, we have several types of loops, including for loops, while loops, and do-while loops.
let names = ["Alice", "Bob", "Charlie", "David", "Eve"];



// for(let index = 0; index < names.length; index++) {
   
//     if(names[index] == "Charlie") {
//         console.log("Found the name: ", names[index])
//         continue; // Skip the rest of the loop and move to the next iteration   
//     }
//      console.log(names[index])
// }

// for(let i = 10; i >= 1; i--) {
//     console.log(i);
// }

let i = 0
// while(i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// do {
//   console.log(i);
//   i++;
// } while(i < 3);

// for(let i = 1; i <= 5; i++) {
//     for(let j = 1; j <= 3; j++) {
//         console.log(i, j)
//     }
// }

// for(let row = 1; row <= 3; row++) {
//     for(let col = 1; col <= 2; col++) {
//         console.log(row, col)
//     }
// }
// Multiplication table from 1 to 12
// for(let i = 1; i <= 12; i++) {
//     for(let j = 1; j <= 12; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }

// for(let row = 0; row < 3; row ++) {
//     let line = "";
//     for(let col = 0; col < 3; col++) {
//         line += "* ";
//     }
//     console.log(line);
// }

// const mat = [
//     [1, 2, 3, 7],
//     [4, 5, 6, 4],
//     [7, 8, 9, 7]
// ]
// console.log(mat[0].length)
// for(let row = 0; row < mat.length; row++) {
//     for(let col = 0; col < mat[row].length; col++) {
//         console.log(mat[row][col]);
//     }
// }



for(let row = 0; row < 5; row++) {
    let stars = "";
    for(let col = 0; col <= row; col++) {
        stars += "* ";
    }
    console.log(stars);
}


