const numbers = [1, 2, 3, 4, 1];

const count = countOccurrences(numbers, 2);

console.log(count);

function countOccurrences(array, searchElement){
    return array.reduce((accumulator, current) => {
        const counter = (searchElement === current) ? 1 : 0;
        return accumulator + counter;
    }, 0)
}