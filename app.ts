let names = ["Alice", "Bob", "Charlie"];
let num = [4, 8, 9, 10, 12];
const greet = (name: string) => {
    console.log(`Hello, ${name}!`);
}

names.forEach(name => { // execute function for each element in array
    greet(name);
});

const double = num.map(n => n * 2) // transform each element in array and return new array
console.log(double);
const even = num.filter(n => n % 2 === 0); // Filter base on condition
console.log(even);

const res = num.find(n => n > 12); // Find first element that satisfy condition
console.log(res);

const index = num.findIndex(n => n > 8); // Find index of first element that satisfy condition
console.log(index);

// some method - check if at least one element satisfy condition
console.log(num.some(n => n > 104)); // true

// every method - check if all element satisfy condition
console.log(num.every(n => n > 5)); // true

// reduce method - reduce array to single value


// function greet(name: string) {
//     console.log(`Hello, ${name}!`);
// }