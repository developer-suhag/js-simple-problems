let first = 5;
let second = 7;

console.log(first, second);
// 1st apporach (temp process)
// let temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// destrcuring 

[first, second] = [second, first]

console.log(first, second);