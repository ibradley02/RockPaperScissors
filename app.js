Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
}
function play(playerChoice){
    list = ['rock','paper','scissors']
    var computerChoice = list.random
    var playerChoice = document.getElementsByClassName('value')
    function winner(playerChoice, computerChoice){
        if(playerChoice === computerChoice){
            console.log('TIE');
        }else if(playerChoice === 'rock' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'rock'){
            console.log('YOU WIN')
        } else {
            console.log('YOU LOSE')
        }
    }
}