let businessPerson = 7050;
let minister = 6500;
let army = 10000;

if (businessPerson > minister) {
    console.log('Businessmaner pola is bigger');
}
else {
    console.log('Minister ar pola is bigger');
}


if (businessPerson > minister && businessPerson > army) {
    console.log('Businessmaner pola is biggerr');
}
else if (minister > businessPerson && minister > army) {
    console.log('Ministarer pola is bigger');
}
else {
    console.log('Tora kiser ki ami Army, I am the biggest person!!');
}

let findBigger = Math.max(businessPerson, minister, army )

// console.log('The bigger number is: ', findBigger);

// comparer two number with function and got the bigger one

function findBiggest(number1, number2) {
    /*  if (number1 > number2) {
        return number1
    }
    else {
        return number2
    } */
    return Math.max(number1, number2)
}

const gotBiggest = findBiggest(403, 96);

console.log('The biggest Number is: ', gotBiggest);

// comparer three number with function and got the bigger one

function findBiggestFromThree(first, second, thrid) {
    // if (first > second && first > thrid) {
    //     return first
    // }
    // else if (second > first && second > thrid) {
    //     return second
    // }
    // else {
    //     return thrid
    // }

    return Math.max(first, second, thrid)
}

const gotBiggestFromThree = findBiggestFromThree (643, 5604, 465);

console.log('The biggest number is: ', gotBiggestFromThree);

// comparer 3 numbers with function and return the smallest one

function findSmallest(num1, num2, num3) {
    const smallestNumber = Math.min(num1, num2, num3);
    return smallestNumber
    /*   if (num1 < num2 && num1 < num3) {
        return num1
    }
    else if (num2 < num1 && num1 < num3) {
        return num2
    }
    else {
        return num3
    } */
}

const gotTheSmallestNumber = findSmallest (77, 78, 76);
console.log('The smallest Number is: ', gotTheSmallestNumber);