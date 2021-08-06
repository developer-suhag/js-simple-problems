function largestElement(numbers) {
    let largest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        let element = numbers [i];
        if (element > largest) {
            largest = element;
            console.log(largest);
        }
    }
    return largest;
}

const ages = [11, 13, 22, 20, 55, 45, 85, 70];

const oldestAge = largestElement (ages);
console.log('Oldest is: ', oldestAge);

const oldestAge2 = largestElement ([-12, -6, -17, -14, -89, -4, -15]);
console.log('Oldest2 is:', oldestAge2);