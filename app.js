function GuessingGame() {
    
    last_guess = document.getElementById("user-input")
    let output = ''
    
    if(+last_guess.value > num) {
        output+='High'
    } else if(+last_guess.value < num) {
        output+='Low'
    } else if(+last_guess.value === num) {
        output+='Correct!'
    } else {
        output+="Please enter a number."
    }

    return output
}

function onClickHandler() {
    output = GuessingGame();
    console.log("ran guessing game")
    document.getElementById('result').innerHTML=output
}

let last_guess = null
let result = null
let num = Math.ceil(Math.random() * 100);
console.log(num)