var colors = ["#3498db'", "#1abc9c", "#f3a801"];

$(document).ready(function()//When the dom is ready or just add it if you already have a .ready function
{
  $("nav").css("background-color", setNavBg());
});

function setNavBg() {
   return messages[Math.floor(Math.random() * messages.length)];
}