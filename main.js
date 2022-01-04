let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let compScore_span = document.getElementById("comp-score");
let scoreBoard = document.querySelector("score-board");
let result_p = document.querySelector("p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");




function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    let randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice];

}



function win(userChoice , computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span,innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord}   beats  ${computerChoice}${smallComprWord}  , you win! `;
}



function lose(userChoice , computerChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span,innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord}   loses to  ${computerChoice}${smallComprWord}  , you lose.. `;
    
}


function draw(userChoice , computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallComprWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord}   equal to ${computerChoice}${smallComprWord}  , it's draw.. try again! `;
    
    
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "PaperRock":
        case "ScissorPaper":
        case "RockScissor":
            win(userChoice, computerChoice);
        break;
        case "RockPaper":
        case "PaperScissor":
        case "ScissorRock":
            lose(userChoice, computerChoice);
        break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorScissor":
            draw(userChoice, computerChoice);
        break;

    }
}





rock_div.addEventListener('click', () => {
    game("Rock"); 
})

paper_div.addEventListener('click', () => {
    game("Paper"); 
})

scissor_div.addEventListener('click', () => {
    game("Scissor"); 
})
