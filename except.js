const numbers = [1, 2, 3, 4, 3];

const output = except(numbers, [1, 2, 3]);

console.log(output);

function except(array, excluded) {
    let arr = [];
    for (element of array){
        if (!excluded.includes(element))
            arr.push(element);
    }
    return arr;
}