// speed limit is 70
// 5 -> 1 point
// use floor
// 12 points -> suspended

console.log(checkSpeed(74));

function checkSpeed(speed){
  
  const points = Math.floor((speed - 70) / 5);
  
  if (points <= 0)
    return 'Ok';
  
  if (points >= 12)
    return 'License suspended';
  
  return 'Point: ' + points;
  
}