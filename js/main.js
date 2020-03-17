fetch(`https://`)
  .then(res =. {return res.json()})
  .then(response => {
    console.log(response)
    if(response.)
  })

let botScore=0,
playerScore=0;
document.getElementById("rock").onclick=playerThrowsRock;
document.getElementById("paper").onclick=playerThrowsPaper;
document.getElementById("scissors").onclik=playerThrowsScissors;
function playerThrowsRock(){
  let botsWeapon="rock";
  checkWhoWon(botsWeapon,"rock");
}
function playerThrowsPaper(){
  let botsWeapon="paper";
  checkWhoWon(botsWeapon,"paper");
}
