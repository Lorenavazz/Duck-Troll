let controle = true;
const element = document.getElementById("pato");

setInterval(function () {
if (controle == true) {
element.src = 'https://img.itch.zone/aW1hZ2UvMjA2MjIzNy8xMjEyNTk5OC5naWY=/347x500/nnRmCZ.gif';
controle = false;
} else {
element.src = 'https://img.itch.zone/aW1hZ2UvMjA2MjIzNy8xMjEyNjAwMC5naWY=/347x500/aCB4hd.gif';
controle = true;
}
}, 500);

document.getElementById("gMaker").addEventListener("click",function() {
 href = "https://gx.games/games/0ebn7q/duck-troll-fioratec/tracks/546629e5-b6ba-4718-8504-3becc13114e4/ ";
});
