/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/
const totalScore = {getComputerScore: 0, playerScore: 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const RPS = ['Rock', 'Paper', 'Scissors']
  const random = Math.floor(Math.random() * RPS.length)
  return RPS[random]
}
// console.log(getComputerChoice())
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  if(playerChoice == computerChoice) {
    score = 0
  }
  // All situations where human draws, set `score` to 0
  else if(playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  }
  else if(playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
  }
  else if(playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  }
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  else {
    score = -1
  }
  // Otherwise human loses (aka set score to -1)
  // return score
  return score
}
//console.log(getResult('rock', 'rock'))

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  
  let resultDiv = document.getElementById('result')
  let handsDiv = document.getElementById('hands')
  let playerScoreDiv = document.getElementById('player-score')
  
  if(score == -1){
    resultDiv.innerText = 'You Lose, dummy!'
  }
  else if(score == 0){
    resultDiv.innerText = 'It\'s a Draw, yayy!'
  }
  else {
    resultDiv.innerText = 'You Win, now rock!'
  }

  handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`

}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
      console.log({playerChoice})
      const computerChoice = getComputerChoice()
      console.log({computerChoice})
      const score  = getResult(playerChoice, computerChoice)
       totalScore['playerScore'] += score
       console.log({score})
      console.log(totalScore)
    showResult(score, playerChoice, computerChoice)


}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
    const RPSBtn = document.querySelectorAll('.rpsButton')
 // console.log(RPSBtn)
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  RPSBtn[0].onclick = () => console.log(RPSBtn[0].value)
  
  RPSBtn.forEach(Btn => {Btn.onclick = () =>  onClickRPS(Btn.value)})

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'onclick' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument


   let endGameBtn = document.getElementById('endGameButton')
    endGameBtn.onclick = () => endGame()
  // Add a click listener to the end game button that runs the endGame() function on click

}

// ** endGame function clears all the text on the DOM **
function endGame() {
      let resultDiv = document.getElementById('result')
      let handsDiv = document.getElementById('hands')
      let playerScoreDiv = document.getElementById('player-score')
      
      resultDiv.innerText = ''
      handsDiv.innerText  = ''
      playerScoreDiv.innerText = ''
}

playGame()