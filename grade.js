const marks = [80, 80, 80];

calculateGrade(marks);

function calculateGrade(marks){
  let average = 0;
  let msg = '';
  for (let i = 0; i < marks.length; i++){
    average += marks[i];
    if (i === marks.length - 1)
      average /= marks.length;
  }
  if (average <= 59)
    msg = 'F';
  else if (average <= 69)
    msg = 'D';
  else if (average <= 79)
    msg = 'C';
  else if (average <= 89)
    msg = 'B';
  else
    msg = 'A';
  
  console.log(msg);
}