const num1 = 0;
const expected1 = 0;

const num2 = 1;
const expected2 = 1;

const num3 = 2;
const expected3 = 1;

const num4 = 3;
const expected4 = 2;

const num5 = 4;
const expected5 = 3;

const num6 = 8;
const expected6 = 21;

function fibonacci(num) {
    if(num < 2) {
        return num;
    }
    else {
        return fibonacci(num-1) + fibonacci(num-2)
}
}

console.log(fibonacci(num1));
console.log(fibonacci(num2));
console.log(fibonacci(num3));
console.log(fibonacci(num4));
console.log(fibonacci(num5));
console.log(fibonacci(num6));