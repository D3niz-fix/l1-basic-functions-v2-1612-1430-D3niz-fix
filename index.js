export function getSquare(num) {
    return num * num;
  }
  
export function isEven(num) {
    return num % 2 === 0;
}
export function castNumber(value) {
    const converted = Number(value);
    return isNaN(converted) ? 'given value is not convertible' : converted;
}
  
export function countVowels(text) {
    const vowels = 'aeiou';
    let count = 0;
    const lowerText = text.toLowerCase();
    
    for (let char of lowerText) {
      if (vowels.includes(char)) {
        count += 1;
      }
    }
    
    return count;
}
