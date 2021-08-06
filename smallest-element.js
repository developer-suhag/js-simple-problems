function smallesElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element
            // console.log(smallest);
        }
    }
    return smallest;
}

const ages = [5, 7, 10, 4, 20, 60, 3, 80, 2, 9, 1];

const smallestAge = smallesElement (ages);

console.log('Smalles is:', smallestAge);