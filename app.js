console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (i % 3 === 0) {
        console.log('FIZZ');
    } else if (i % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(i);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let i = 1;

while (i <= 100) {
    if (i % 1 !== 0) {
        console.log(i);
    }
    i++;
}
let a = 1;

do {
    if (a % 2 !== 0) {
        console.log(a + " is odd");
    }
    a++;
} while (a <= 100);

let b = 1;

while (b <= 100) {
    if (b % 3 === 0 && b % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (b % 3 === 0) {
        console.log('FIZZ');
    } else if (b % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(b);
    }
    
    b++;
}
let num = 1;

do {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FIZZBUZZ');
    } else if (num % 3 === 0) {
        console.log('FIZZ');
    } else if (num % 5 === 0) {
        console.log('BUZZ');
    } else {
        console.log(num);
    }
    
    num++;
} while (num <= 100);
// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
let n = Math.round(Math.random() * (500 - 100) + 100);

for(let i = 1; i <= n; i++){
    if (i == value){

        console.log(`Found ${value}!`);
        break; 

    }
}
console.log(`Did not find ${value}..`);
