function compChoice() {
    var list = ['rock', 'paper', 'scissors']
    var randomChoice = list[Math.floor((Math.random() * list.length))];
    var computerChoice = randomChoice
    console.log(computerChoice)
    return computerChoice
}
function play(playerChoice) {
    var computerChoice = compChoice()
    if (playerChoice === computerChoice) {
        console.log('TIE');
        return
    } else if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            console.log('win')
            return
        } else {
            console.log('lose')
        }
    } else if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            console.log('win')
            return
        } else {
            console.log('lose')
            return
        }
    } else if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('win')
            return
        } else {
            console.log('lose')
            return
        }
    }
}