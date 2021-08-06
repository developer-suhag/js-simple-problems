// Math.abs()

let myNumber = -5;
myNumber = -100;
myNumber = 9;
myNumber = -15;
const output = Math.abs(myNumber);

// console.log(output);

//Math.celi()

let celiNumber = 5.656;
celiNumber = 7.2;
celiNumber = 9.00001;
celiNumber = 11.4;
const celiOutput = Math.ceil(celiNumber);

// console.log(celiOutput);

// Math.floor()

let floorNumber = 9.53;
floorNumber = 14.454;
floorNumber = 13.55;
floorNumber =  13.99;
const floorOutput = Math.floor(floorNumber);

// console.log(floorOutput);


// Math.round()

let roundNumber = 5.6;
roundNumber = 5.5;
roundNumber = 12.9;
roundNumber = 22.01;
roundNumber = 99.99;
roundNumber = 100.04
roundNumber = 100.49;

const roundOutput = Math.round(roundNumber);

// console.log(roundOutput);


// Math.random()

const randomOutput = Math.random() * 10;

const rounded = Math.floor(randomOutput);

// console.log(rounded);

for (let i = 0; i <=20 ; i++) {
    const luduNumber = 6;
    const ludu = Math.random() * luduNumber;
    const luduOutput = Math.round(ludu)
    console.log(luduOutput);
}