// 1 Email Address Obfuscator

function obfuscate(email: string): string {
  return email
    .split("")
    .map((item) => (item === "@" ? " [at] " : item === "." ? " [dot] " : item))
    .join("");
}

// console.log(obfuscate("salom@hayr.com")); // salom [at] hayr [dot] com

// 2 Summing a number's digits

function sumDigits(number: number): number {
  return Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, item) => sum + +item, 0);
}


// console.log(sumDigits(1232)); // 8
// console.log(sumDigits(-162)); // 9


// 3 Sort Numbers

function solution(num:number[]):number[]{
  
  if (!num || num.length === 0) return []
  
  return num.sort((a, b) =>  a - b );
    
}

// console.log(solution([1, 2, 10, 50, 5]));  // [1,2,5,10,50]
// console.log(solution(null)); // [] 


// 4 Categorize New Member


function openOrSenior(data: [number, number][]): string[] {
  return data.map(([age, experience]) => {
    if (age >= 55 && experience > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
}


// console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])); // ["Open", "Open", "Senior", "Open", "Open", "Senior"]


// 5 Odd or Even?

function oddOrEven(array: number[]): string {
  if (array.length === 0) return "even";

  let res = array.reduce((sum, value) => sum + value, 0);

  return res % 2 !== 0 ? "odd" : "even";
}

// console.log(oddOrEven([0, 1, 4])); // odd
// console.log(oddOrEven([0, -6, -2])); // even


// 6 Reverse words

function reverseWords(str: string): string {
  let res = str.split(" ");

  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].split("").reverse().join("");
  }

  return res.join(" ");
}

// console.log(reverseWords("This is an example!")); // "sihT si na !elpmaxe"
// console.log(reverseWords("double  spaces")); // "elbuod  secaps"


// 7 Student's Final Grade

function finalGrade(exam: number, projects: number): number {
  let res = 0;
  
  if (exam > 90 || projects > 10) {
    res = 100;
  } else if (exam > 75 && projects >= 5) {
    res = 90;
  } else if (exam > 50 && projects >= 2) {
    res = 75;
  }
  
  return res;
}


// console.log(finalGrade(100, 12 )); //  100
// console.log(finalGrade(85, 5)); //  90
// console.log(finalGrade(55, 3)); //  75
// console.log(finalGrade(55, 0)); //  0


// 8 What is between?

function between(a: number, b: number): number[] {
  let arr: number[] = [];

  for (let i = a; i <= b; i++) {
    arr.push(i);
  }

  return arr;
}

// console.log(between(1,4)); // [1, 2, 3, 4]
// console.log(between(5,10)); // [5, 6, 7, 8, 9, 10]

// 9 Get the mean of an array

function getAverage(marks: number[]): number {
  let sum = marks.reduce((sum, value) => sum + value, 0);

  let res = Math.floor(sum / marks.length);

  return res;
}

// console.log(getAverage([2,2,2,2])); // 2
// console.log(getAverage([1,1,1,1,1,1,1,2])); // 1
// console.log(getAverage([90, 75, 80, 100])); // 86


// 10 Double Char

function doubleChar(str: string): string {
  let res = '';

  for (let i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }

  return res;
}


console.log(doubleChar("String"));  // SSttrriinngg
console.log(doubleChar("1234!_ "));  // "11223344!!__  "
