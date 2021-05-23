var rv1 = Math.floor((Math.random()*6) + 1);
var rv2 = Math.floor((Math.random()*6) + 1);
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
img1.setAttribute("src","images/dice"+rv1+".png");
img2.setAttribute("src","images/dice"+rv2+".png");
var heading = document.querySelector("h1");
if(rv1>rv2){
  heading.innerHTML = "Player 1 Wins 🚩";
}else if(rv1<rv2){
  heading.innerHTML = "Player 2 Wins 🚩";
}else{
    heading.innerHTML = "Draw 🥲";
}
