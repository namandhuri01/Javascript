/*
* 1. Find the Maximum Value:
*
*   Given an array of integers, find the maximum value.
*/

function findMaxNumber(arr){
    let maxNumber = arr[0];
    arr.forEach((item,index) => {
        if(item > maxNumber){
            maxNumber = item;
        }
    });
    return maxNumber;
}
const findMaximumNumber = findMaxNumber([3, 5, 1, 9, 2]);
console.log(findMaximumNumber); // output -: 9
/*
* 2. Find the Minimum Value:
*
*   Given an array of integers, find the maximum value.
*/
function findMinNumber(arr){
    let minNumber = arr[0];
    arr.forEach((item,index) => {
        if(item <= minNumber){
            minNumber = item;
        }
    });
    return minNumber;
}
const findMinimumNumber = findMinNumber([3, 5, 1, 9, 2]);
console.log("the minium number is ",findMinimumNumber); // output -: 1

/*
* 3. Reverse an Array:
*/

function reverseArray(arr){
    let output = [];
    for(let x = arr.length -1 ; x >= 0; x--){
        output.push(arr[x]);
    }
    return output;
}
const arrayReverse = reverseArray([3, 5, 1, 9, 2]);
console.log(arrayReverse); // output -: [2,9,1,5,3]


// 4. Find the Minimum Value:
function findMaxNumber(arr){
    let temp = 0;

    for(let x = 0; x < arr.length; x++){
        
        if(arr[x] > temp){
            temp = arr[x];
        }
    }
    return temp;
    
}
const maxNumber = findMaxNumber([3, 5, 1, 9, 2]);
console.log(maxNumber); // output -: 9

// 5. Find Duplicate Elements:

function findDuplicateNumber(arr){
    let newarr = [];
   
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                if(!newarr.includes(arr[i])){
                    newarr.push(arr[i]);
                }
           }
       }
    }
    return newarr;
    
}
const findDuplicate = findDuplicateNumber([1, 2, 3, 2, 4, 5, 1,5,6,7,8,9,12,9]);
console.log(findDuplicate); // output -: [1,2,5,9]

// 6. sort arry with using pre define function

function customAscSort(arr)
{
    for(let x = 0; x < arr.length; x++){
        let temp = 0;
        for(let y = x+1; y < arr.length; y++){
           
            if(arr[x] > arr[y]){
                temp = arr[x];
                arr[x] = arr[y];
                arr[y] =temp;
            }
           
        }
    }
    return arr;
}

const sort = customAscSort([12,14,18,19,1,5,7,11,3,6,8,9,10,17]);
console.log(sort) // output-: [1,3,5,6,7,8,9,10,12,14,17,18,19]

// 7.  custom sort desc order Bubble sort algorithm
function customDescSort(arr)
{
    for(let x = 0; x < arr.length -1; x++){
        let temp = 0;
        for(let y = 0; y < arr.length - 1 - x; y++){
            if(arr[y] < arr[y +1]){
                temp = arr[y];
                arr[y] = arr[y+1];
                arr[y+1] =temp;
            }
        }
    }
    return arr;
}
const sort1 = customDescSort([12,14,18,19,1,5,7,11,3,6,8,9,10,17]);
console.log(sort1) // output-: [19, 18, 17, 14, 12, 11,10,9,8,7,6,5,3,1,]

// 8. Remove duplicate

function removeDuplicate(arr){

    let newArray = [];
   
    for(let i = 0; i < arr.length; i++){

        for(let x = 1; x < arr.length; x++){
            if(arr[i] !== arr[x]){
                if(!newArray.includes(arr[i])){
                    newArray.push(arr[i]);
                }
           }
        }
    }
    return newArray;

}
const removeDuplicateElement = removeDuplicate([12, 2, 3, 2, 4, 5, 1,5,6,7,8,9,12,9,1,9,5,12,23,25])

console.log(removeDuplicateElement); //output: [12,2,3,4,5,1,6,7,8,9,25]

// 9. Rotate an Array: key2 input[1,2,3,4,5] output [4, 5, 1, 2, 3]

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; 
  
    for (let i = 0; i < k; i++) {
       
        for (let j = n - 1; j > 0; j--) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    
    return arr;
}

const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]

// 10 intersection of two array

const intersection = (nums1, nums2)  => {
    let newArray = [];
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            
            if(nums1[i] == nums2[j]){
                if(!newArray.includes(nums1[i])){
                    newArray.push(nums1[i]);
                }
            }
        }
    }
    return newArray;
};
let nums1 = [1,2,2,1];
let nums2 = [2,2]
console.log(intersection(nums1,nums2))

// 11 find the missing number

const findMissingNumber = (arr) => {
    let missingNumber;
    for(let i = 1; i <= arr.length+1; i++){
        if(arr.indexOf(i) == -1){
            missingNumber = i;
        }
    }
    return missingNumber;
  
}
console.log(findMissingNumber([1,2,3,4,5,7,8]));

// 12 Merge Two Sorted Arrays:

const mergeTwoSortedArray = (arr1,arr2) => {
    arr2.forEach((item) => {
        arr1.push(item);
    });
    for(let i = 0; i < arr1.length; i++){
        let temp = 0;
        for(let j = i+1; j < arr1.length; j++){
            if(arr1[i] > arr1[j]){
                temp = arr1[i];
                arr1[i] = arr1[j];
                arr1[j] =temp;
            }

        }
    }
    return arr1;
}
console.log("Q12 :", mergeTwoSortedArray([1, 3, 5],[2,4,6]));

// 13 find the first non reperting character
// const findNonRepetingChar = (char) => {
    
//     let character = char[0];
    
//     for(let x = 0; x < char.length; x++){
//         if(char.indexOf(character) == x && char.indexOf(character,x+1) == -1){
//             return character;
//         }
        
//     }
//     return null;
   
// }

// const char = 'loveleetcode';
// console.log("Q13 :", findNonRepetingChar(char));

// 14. Palindrome

const Palindrome = (arr) => {
    let oldName = arr;
    const n = arr.length;
    let k = n % n; 
  
    for (let i = 0; i < k; i++) {
       
        for (let j = n - 1; j > 0; j--) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
        }
    }
    if(arr != oldName){
        return false;
    }
    return true;
}

const string = "naman";
console.log(Palindrome(string));

// 15 Reverse a String:

const reverseString = (str) => {
    let newString = '';
    for(let x = str.length - 1; x >= 0; x--){
        newString +=str[x];
    }
    return newString.trim();

}

console.log("dds",reverseString("abcdef"));

// 16. check Anagram:

const angaram = (str,str1) => {

    let response = false;
    if(str.length !== str1.length){
        return response;
    }
    str = str.split('').sort().join();
    str1 = str1.split('').sort().join();
    if(str === str1){
        response = true;
    }
    return response;
}

console.log("16 :", angaram("listen","tenlis"));

// 17. fibonacci series
const fibonacci = (n) => {

    let sequence = [0,1];
    if(n === 0) return [];
    if(n === 1) return [1];
    while (sequence.length < n) {
        let nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}
console.log("17 :", fibonacci(5));

// 18. Factorial

const facteroial = (n) => {
    let number = 1;
    for (let i = 1; i <= n; i++) {
        number *= i;
    }
    return number;
}
console.log("18 :", facteroial(5));

// 19. Find Prime Number

const primeNumber = (n) => {
    let numbers = []
    for (let i = 1; i < n; i++) {
            
        if( i % 2 == 0){
            numbers.push(i);
        }
    }
    return numbers;
}
console.log("19 :", primeNumber(10));


// 20. Count Vowels:

const vovel = (str) => {
    let vovels = ['a','e','i','o','u'];
    let count = 0;
    for(let x = 0; x < str.length; x++){
        
        if(vovels.includes(str[x])){
            count++;
        }
    }
    return count;
}
console.log("20 :",vovel('hello'));

// 21 binary search

const binarySearch = (arr,target) => {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
    
}

console.log("21 :",binarySearch([1, 2, 4, 7, 5, 8, 10],5));


function sortarr(arr){
    for(let x = 0; x < arr.length; x++){
        let temp
        for(let y = x+1; y < arr.length; y++){
           if(arr[x] > arr[y]){
               temp = arr[x];
               arr[x] = arr[y];
               arr[y] = temp;
           } 
        }
    }
    return arr;
}
console.log("22 :", sortarr([3, 1, 4, 1, 5]));

// 23 replace whitespace with%20

const replaceWhiteSpace = (str,target) => {
    
    let newStr = str.split(' ');
    let newString = '';
    for(let x = 0; x < newStr.length; x++){
        newString +=newStr[x];
        if(x < newStr.length -1){
            newString += target;
        }
    }
    return newString.trim();
}
console.log(replaceWhiteSpace("Mr John Smith","%20"))

//  24 Find the Greatest Common Divisor (GCD):
function gcd(a,b)
{
    
    let result = Math.min(a, b);
    console.log(result);
    while (result > 0) {
        if (a % result == 0 && b % result == 0) {
            break;
        }
        result--;
    }
    
   
    return result;
}
console.log(gcd(48,18));