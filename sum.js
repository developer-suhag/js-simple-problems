const numbers = [23, 45, 54, 65, 55, 76, 89];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    // console.log(element);
    sum += element;
    console.log(sum); 
}


function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers [i];
        sum += element;
    }
    return sum;
}

const arrrayNumbers = [43, 54, 65, 40, 36, 24, 10];
const sumOfArray = arrayTotal (arrrayNumbers);
console.log('The Array total is: ', sumOfArray);