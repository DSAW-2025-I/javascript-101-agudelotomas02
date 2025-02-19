// Sum of Two Numbers
function sum(a, b) {
  return (a+b)
}

// Factorial of a Number
function factorial(n) {
  if (n < 0) {
    throw new Error("El factorial no está definido para números negativos.");
  }
  let respuesta=1;
  for ( let i = 1; i <= n; i++) {
    respuesta=respuesta*i;
  }
  return respuesta;
}

// Find the Largest Number
function findLargest(arr) {
  let largest=arr[0];
  for (let i=1; i < arr.length; i++){
    if (arr[i]>largest){
      largest=arr[i];
    }
  }
  return largest
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string"){
    throw TypeError('Debe ser un string');
  }
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i=0; i< str.length; ++i) {
    if (vowels.indexOf(str[i]) !== -1) {
      count++;
    }
  }
  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (n<2){
    return false
  }
  for(let i= 2; i <= Math.sqrt(n); i++){
    if (n % i ===0){
      return false
    }
  }
  return true
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
