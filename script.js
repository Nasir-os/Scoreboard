const homeIncrementBtns = document.querySelectorAll(".home button");
const guestIncrementBtns = document.querySelectorAll(".guest button");
const newgameBtn = document.querySelector(".newgame-btn");

let homeScore = document.querySelector(".home-score");
let guestScore = document.querySelector(".guest-score");
let startingScore = 0;



function incrementScore(team, btns) {
  btns.forEach((btn) =>
    btn.addEventListener("click", function () {
     team.textContent = parseInt(team.textContent ) + parseInt(btn.textContent[1]);
    })
  );
}

incrementScore(homeScore,homeIncrementBtns);
incrementScore(guestScore,guestIncrementBtns);

newgameBtn.addEventListener('click',function(){
  homeScore.textContent= 0;
  guestScore.textContent= 0;

})