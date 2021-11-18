//1- Write a function sum that accepts two number arguments and returns the sumation of these numbers.
const sum = function (a, b) {
    return sum = a + b;
}

// 2-Write a function average that accepts two number arguments and returns the average of these numbers.
const averageTwoNumbers = function (a, b) {
    average = (a + b) / 2;
    return average
}

//3-Wite a function findFactorial Given an integer n, return n! (n factorial)
/*const findFactorial = function(num){
    let Factorial;
    for(let i=num;i<0;i++){
        Factorial= num*i
    }return(Factorial)
       }*/

//4-Write a function round that accepts one number argument, number and returns the number rounded to the nearest integer. .

const round = function (number) {
    return Math.round(number)
};

//5-Write a function toThePowerOf that accepts two number arguments, base and exponent, and returns the base to the exponent power.
const toThePowerOf = function (base, exponent) {
    return Math.pow(base, exponent);

};
//6-Write a function randomNumber that returns a random value between zero and one (includes 0 but not 1).

const randomNumber = function () {
    return Math.random()

};

//7-Write a function oneOrZero that uses randomNumber to return either the number zero or one.

const oneOrZero = function (b) {

    if (b >= 0 || b <= 1) {
        Math.random(b)
    }
    return b
};

//8-Write a function randomRange that accepts a positive number and returns a random number between zero and the passed in argument.
const randomRange = function (number) {
    return Math.floor(Math.random() * 11)
};

//9-write a function includeOf that accept two string arguments string, character and returns true if the string contain the character.
const includeOf = function (string, character) {
    return string.includes(character)

};

//--------------------------------------------------------------------------------
//1-Write a function addToArray that accepts two arguments, array and string, and returns the same array after adding the string element to the end of it.
const addToArray = function (array, string) {
    array.push(string)
    return array
};
//2-Write a function convertToString that accepts an argument array of strings , and returns a string made out of the array values.
const convertToString = function (array) {
    return array.join(' ')
};

// 3-the array values are unique, no duplicate values in the array
const updateOrCreate = function (array, index, value) {
    if (index >= array.length) {
        console.log("there is no element to updated in this index");
    } else {
        array[index] = value
    }
    return array
};
//4-Write a function onlyString that accepts an arguments, array . the function must create a new array and return only string in this array

const sliceArray = function (array) {
    const onlyString = [];
    if (typeof array[0] === "string") {

        onlyString.push(array[0])
    }
    return onlyString
};
//5-Write a function login that accepts two string arguments, username and password, and returns a message saying "Login Successful" or "Login Failed" depending on whether the login information matches the data in the given array.
const users = [
    ["Jane", "123456"],
    ["admin", "abc123"],
];

const login = function (username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i][0] == username && users[i][1] == password) {
            return "Login Successful"
        }else{
            return "Login Failed"
        }
        
    }

};
//6-Write a function maximumNumber that accepts an array of numbers and returns the highest number in the array.
const maximumNumber = function (numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (max < numbers[i]) {
            max = numbers[i]
        }
    } return max
};


//7- Write a function reversString that accepts a string and returns the string reversed.
const reversString = function (string) {
    let SplitString = string.split('')
    let ReverseString = SplitString.reverse();
    let NewString = "";
    for (let i = 0; i < ReverseString.length; i++) {
        NewString += ReverseString[i];
    } return NewString
};



