let button = document.getElementById('btn');

let colors = ["red", "orange", "blue", "yellow", "green", "grey"];
let colorIndex = 0;

button.addEventListener("click", function() {
    document.body.style.background = colors[ colorIndex ];
    colorIndex = (colorIndex + 1) % colors.length;
});

