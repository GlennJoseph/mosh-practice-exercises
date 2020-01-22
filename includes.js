const numbers = [1, 2, 3, 4, 3];

console.log(includes(numbers, 5));

function includes(array, searchElement) {
    return array.some(value => value === searchElement);
}