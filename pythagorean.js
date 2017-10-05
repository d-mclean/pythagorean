/* 20171005 DM - LHL w1d4

  This js file outputs an array of numbers corresponding
  to the x-y pairs provided in the input array.
*/
var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(intXY){
    // Calculates the square root of x^2 + y^2 (i.e. pythagoreas).
    return (Math.sqrt(Math.pow(intXY.x, 2) + Math.pow(intXY.y, 2)));
  }
);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);