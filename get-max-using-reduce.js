const numbers = [1, 2, 3, 4, 1, 69, 0];

const max = getMax(numbers);

console.log(max);

function getMax(array){
    return array.reduce((accumulator, current) => {
        return (current > accumulator) ? current : accumulator;
    },0);
}