var colors = ["#3498db", "#1abc9c", "#f3a801"];

$(document).ready(function()//When the dom is ready or just add it if you already have a .ready function
{
    var bg = setNavBg();
    console.log(bg);
    $("nav").css("background-color", bg);
});

function setNavBg() {
   return colors[Math.floor(Math.random() * colors.length)];
}