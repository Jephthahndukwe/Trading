let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

var navLinks = document.getElementById("navLinks")
function showMenu()  {
    navLinks.style.visibility="visible";
    navLinks.style.right = "-20px";
}
function hideMenu(){
  navLinks.style.right = "-400px";
}

function togglePopup() {
    document.getElementById("navLinks").classList.toggle("active");
  }