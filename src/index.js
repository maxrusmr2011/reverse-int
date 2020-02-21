module.exports = function reverse (n) {
  let num = Math.abs(n) + '';
  let arr = num.split('');
  arr.reverse();
  return +(arr.join(''));
}
