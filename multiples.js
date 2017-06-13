/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
 var sumOfAMultiple = function( n ) {
  var sum = 0;
  var threesum = [];
  var fivesum = [];
  // do your work here

  for (i = 0; i <n; i++){

    if (i % 3 === 0) {
      threesum.push(i);}
    else if (i % 5 === 0) {
      fivesum.push(i);}
    }

    function getSum(total, num) {
    return total + num;
    }

  sum = threesum.reduce(getSum) + fivesum.reduce(getSum);

  return sum;

};

console.log(sumOfAMultiple(15));


