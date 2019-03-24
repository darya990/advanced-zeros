module.exports = function getZerosCount(number, base) {
  let maxNumber = Number.MAX_VALUE;

  for(let i = 2; i <= base; i++){
    if(base % i === 0){
      let denominator = 0;
      while(base % i === 0){
        base /= i;
        denominator++;
      }

      let result = Math.floor(number / i);
      let count = 0;

      while(result > 0){
        count += result;
        result = Math.floor(result / i);
      }
      maxNumber = Math.min(maxNumber, Math.floor(count / denominator));
    }
  }
  return maxNumber;
}