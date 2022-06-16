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
    if(count > 0) {punct = ','}
    output = GuessingGame();
    console.log("ran guessing game")
    document.getElementById('result').innerHTML=output
    if(output === 'Correct!') {
        punct = '!'
        document.querySelector('body').style.background = "green"
        document.getElementById('guesses').innerHTML+=`, ${last_guess.value}${punct}`
    } else if(last_guess.value >= num+10 || last_guess.value <= num-10) {
        document.querySelector('body').style.background = "red"
        document.getElementById('guesses').innerHTML+=`${punct} ${last_guess.value}`
    } else {
        document.querySelector('body').style.background = "yellow"
        document.getElementById('guesses').innerHTML+=`${punct} ${last_guess.value}`
    }
    
    count++
}

let last_guess = null
let result = null
let count = 0
let punct = ''
let num = Math.ceil(Math.random() * 100);
console.log(num)