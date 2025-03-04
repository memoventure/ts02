// Step 1
const numArray: number[] = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];

const doubledArray: number[] = numArray.map(num => 2*num);
console.log("Dein verdoppeltes Array:");
console.log(doubledArray);

// Step 2
const wordArray: string[] = ["Bootcamp", "Teacher", "Fun", "Programming", "Nerd"];

const filteredWords: string[] = wordArray.filter(word => word.length > 5);
console.log("Deine gefilterte Wortliste:");
console.log(filteredWords);

// Step 3
const reducedSum: number = numArray.reduce(function(a,b) {return a + b})
console.log("Your sum is " +  reducedSum);

// Step 4
function isBigEnough(element: number): boolean{
    return (element >= 10);
}
const isGreater: boolean = numArray.some(isBigEnough)
console.log("Eine Zahl ist größer 10: " + isGreater);

// BONUS

// 01: Sorted
const descendedArray: number[] = numArray.sort((a,b) => b - a);
console.log("Deine sortierten Zahlen:");
console.log(descendedArray);

// 02: Squared
const squaredArray: number[] = numArray.map(num => num*num);
console.log("Deine quadrierten Zahlen:");
console.log(squaredArray);

// 03: remove lowest two numbers and hightes 4 numbers
const removeExtremes = (arr: number[]): number[] => {
    if (arr.length <= 6) return []; // If array has 6 or fewer elements, return empty array

    const sorted = [...arr].sort((a, b) => a - b); // Sort array in ascending order
    return sorted.slice(2, -4); // Remove the lowest two and highest four
};

console.log("Deine Array mit reduced Zahlen:");
console.log(removeExtremes(numArray));

// 04: remove all divisible by 4
const divisibleArray: number[] = numArray.filter(num => num % 4 !== 0);
console.log("Alle Zahlen, die nicht durch 4 teilbar sind:");
console.log(divisibleArray);

// 05: Add up all numbers:
const allSum: number = numArray.reduce(function(a,b) {return a + b})
console.log("Your sum is " +  allSum);

// Bonus: Do it all at once
const finalNum: number =  numArray.sort((a,b) => b - a)
                                    .map(num => num*num)
                                    .sort((a, b) => a - b)
                                    .slice(2, -4)
                                    .filter(num => num % 4 !== 0)
                                    .reduce(function(a,b) {return a + b});
console.log("The final number is " +  finalNum);