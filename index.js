
let allNumbers = [1, 2, 3, 4, 5, 6]
let even = []
let odd = []
const checkNum = (arr) => {
    //loop to check r
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] / 2 === 0 ){
            even.push(numbers[i]);
        } else{
            odd.push(numbers[i]);
        }
    }
}

console.log(even)
console.log(odd)



// easy 2

function checkPrime(number) {
    if (number <= 1) {
        return false;
    } else{
        for (let i = 2; i < number; i++ ) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}


//medium

const vowel = function(letter){

    const vowels = ["a", "e", "i", "o", "u"];
    for(let i = 0; i < vowels.length; i++){
        if(letter === vowels[i]){
            return true
        }
    }
    return false;
};


//medium 2

var anagram1 = "bob";
var anagram2 = "bob";

function anagramCheck(a1, a2){
    //split was used to split the string "bob" sort sorted the text out and join merged and compared the elements 
    let a1 = a1.split(``).sort().join(``);
    let a2 = a1.split(``).sort().join(``);
    if(a1 === a2){
        console.log("true");
    }else{
        console.log("false");
    }
}

anagramCheck(anagram1, anagram2)

//med 3



//med 4

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2019,
    mileage: 2000,
    color: "Black", 
    }
    driveToWork: () =>{
        alert(`Old mileage is ${car.mileage}`);
        car.mileage = car.mileage + 33;
        console.log(`You drove to work, your new mileage is ${car.mileage}`);
    }
    driveAroundWorld: () =>{
        alert(`Old Mileage ${car.mileage}`);
        car.mileage = car.mileage + 24000;
        console.log(`You drove around the world, your new mileage is ${car.mileage}`);
    }
    runErrands: () =>{
        alert(`Old mileage is ${car.mileage}`);
        car.mileage = car.mileage + 30;
        console.log("You drove to run some errands, your new milage is ${car.mileage");
    }


    //hard

    function brackets(str){
        if(str === "{}" || str === "[]" || str === "()"){
            return true;
        }
        else{
            return false;
        }
    }
    str = "{hello world}";
    str = str.replace(/[a-z]/g,""); // this gets rid of all letters
    str = str.replace(/\s+/g, ''); //this gets rid of all spaces
    console.log(brackets(str));