//Progression 1
var modifiedFood = ["pizza", "burger", "fingerChips","donuts","springRoll"];
var newFood = modifiedFood.slice(1,4);
console.log('progression1',newFood);
console.log(modifiedFood);

//Progression 2
modifiedFood.splice(2,1,"noodles","icecream");
console.log('progression2',modifiedFood);

//Progression 3
var numberArray = [12,324,213,4,2,3,45,4234];
function isEven(numberArray){
    let filteredArray = numberArray.filter( (number) => number%2 == 0 );
    return filteredArray;
}
console.log("Progression3",isEven(numberArray));

function isPrime(numberArray){
    let filteredArray = numberArray.filter( function(number){
        let count = 0;
        for(let i=1;i<=number;i++){
            if(number%i == 0){
                count++;
            }
        }
        if(count == 2){
            return 1
        }
        else{
            return 0
        }
    });
    return filteredArray
}
console.log("Progression3.1",isPrime(numberArray));

//Progression 4
function nonPrime(numberArray){
    let filteredArray = numberArray.filter( function(number){
        let count = 0;
        for(let i=1;i<=number;i++){
            if(number%i == 0){
                count++;
            }
        }
        if(count == 2){
            return 0
        }
        else{
            return 1
        }
    });
    return filteredArray
}
console.log("Progression4",nonPrime(numberArray));

//Progression 5
lambdaIsEven = (numberArray) => {
    numberArray.filter( (number) => number%2 == 0 );}
console.log('lambdaIsEven',lambdaIsEven);

//Progression 6
const myArray = [11, 34, 20, 5, 53, 16];
function findSquareOfNumbers(myArray){
    let squareArray;
    squareArray = myArray.map( (number) => number*number );
    return squareArray
}
console.log("progression6",findSquareOfNumbers(myArray));

//Progression 7
const array = [2, 3, 5, 10];
function multiply(array){
    let mul = array.reduce( function(mul,number){
        console.log('number',number);
        return mul*number;
    },1);
    return mul;
}
console.log('Progression 7',multiply(array));

