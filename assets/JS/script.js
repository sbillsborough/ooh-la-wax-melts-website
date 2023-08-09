// Get the container element
const NAVBAR = document.getElementById("topnav");
// Get all buttons with class="btn" inside the container
const BTNS = NAVBAR.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < BTNS.length; i++) {
  BTNS[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
