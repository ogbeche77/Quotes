var change = document.querySelector (".btncolor");
var changeBody = document.querySelector ("body");

var colors = ["blue", "red", "green", "rgb(50, 168, 82)", "rgb(102, 122, 107)", "rgb(91, 207, 180)",
"rgb(0, 59, 45)","rgb(45, 197, 224)", "rgb(250, 242, 5)" ]

change.addEventListener("click", changeColor);

function changeColor (){
     let random = Math.floor(Math.random()* colors.length)
     changeBody.style.backgroundColor = colors[random];
}