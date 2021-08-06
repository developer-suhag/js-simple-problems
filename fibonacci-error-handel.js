function fibonacciSeris(num) {

    if (typeof num != 'number') {
        return 'Please give a Number'
    }

    if (num < 2) {
        return 'Please Enter a positive number that is greater than 1'
    }

    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo
}

const fiboNumber = 11;
const fiboSerisResult = fibonacciSeris(fiboNumber);

console.log('Fibo Number is: ', fiboSerisResult);