// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

const codedMessage = (str) => {
    let strMap = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0'
    }
    let strArr = str.split("")
    let arr = strArr.map(char => {
        if (char in strMap) {
            return strMap[char]
        }
        else {
            return char
        }
    })
    return arr.join("")
    
    
}

console.log(codedMessage(secretCodeWord1));
console.log(codedMessage(secretCodeWord2));




// --------------------2) Create a function that takes in an array and returns all the words that have the letter a in them.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"

const aLetter = (array) => {
    return array.filter(value => value.includes('a') || value.includes('A'))
}
console.log(aLetter(arrayOfWords));






// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

const isFullHouse = (array) => {
    let countObject = {}
    for(let i=0; i < array.length; i++){
        if (array[i] in countObject){
            countObject[array[i]]++;
            
        }
        else{
            countObject[array[i]] = 1;
        }
    }
    if(Object.values(countObject).indexOf(2) > -1 && Object.values(countObject).indexOf(3) > -1){
        return true
    }
    else {
        return false
    }
}

console.log(isFullHouse(hand1))
console.log(isFullHouse(hand2))
console.log(isFullHouse(hand3))
