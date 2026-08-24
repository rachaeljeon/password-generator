const characters = [
    "A","B","C","D","E","F","G","H","I",
    "J","K","L","M","N","O","P","Q","R",
    "S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i",
    "j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", 
    "8", "9","~","`","!","@","#","$","%","^",
    "&","*","(",")","_","-","+","=","{","[","}",
    "]",",","|",":",";","<",">",".","?","/"
];

let firstEl = document.getElementById("first-el")
let secondEl = document.getElementById("second-el")
let lengthEl = document.getElementById("length-el")


function generatePwd() {

    let firstPwd = []
    let secondPwd = []
    let length = lengthEl.value
    let limit = 0
    
    if (length == "") {
        limit = 15

    } else {
        limit = length
    }

    console.log("this is the limit: ", limit)

    for (let i = 0; i<limit; i++) {

        let charsIdx = Math.floor( Math.random() * characters.length )
        firstPwd.push(characters[charsIdx])
    }

    for (let i = 0; i<limit; i++) {

        let charsIdx = Math.floor( Math.random() * characters.length )
        secondPwd.push(characters[charsIdx])
        
    }

    firstEl.textContent = firstPwd
    secondEl.textContent = secondPwd

}
