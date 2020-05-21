var x = Math.random()*6 + 1;
x = Math.floor(x);
document.querySelector(".img1").setAttribute("src", "images/dice"+ x+ ".png")
var y = Math.random()*6 + 1;
y = Math.floor(y);
document.querySelector(".img2").setAttribute("src", "images/dice"+ y+ ".png")

if (x > y) {
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
else if (y > x) {
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML="It is a tie";
}