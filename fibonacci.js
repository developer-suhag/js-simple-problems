// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

/* 3rd = 2nd + 1st;
4th = 3rd + 2nd;
5th = 4th + 3rd;
6th = 5th + 4th;
100th = 99th + 98th;
nth = (n-1)th + (n-2)th;
ith = (i-1)th + (i-2)th;
 */

const fibo = [0, 1];

for (let i = 2; i <= 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);







const fibo2 = [0, 1];

for (let i = 2; i <= 15; i++) {
    fibo2[i] = fibo2[i - 1] + fibo2[i - 2];
}
console.log('Fibo two', fibo2);

function fibonacciSeris(num) {
    const fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo
}

const fiboSeris = fibonacciSeris(13);
console.log(fiboSeris);