const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 4);

console.log(output);

function move(array, index, offset){
    let selected = array[index];
    let position = index + offset;
    if (position >= array.length || position < 0){
        console.error('Invalid offset.');
        return;
    }
    array.splice(index, 1);
    array.splice(position, 0, selected);
    return array;
}