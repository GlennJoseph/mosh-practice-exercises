console.log(countTruthy([0, 1, 2, 3, '', null, undefined, NaN]));

function countTruthy(array){
  let count = 0;
  for (let i of array){
    if (i)
      count++;
  }
  return count;
}