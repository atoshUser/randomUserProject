const body = document.querySelector("body");
const darkBtn = document.getElementById("dark-btn");
const lightBtn = document.getElementById("light-btn");

const mode = localStorage.getItem("mode");
if (mode) {
    body.classList.add("dark-mode");
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");
}

const changeMode = () => {
    darkBtn.classList.toggle("hidden");
    lightBtn.classList.toggle("hidden");
    body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
    localStorage.setItem("mode", "dark-mode");
    changeMode();
});
lightBtn.addEventListener("click", () => {
    localStorage.setItem("mode", "");
    changeMode();
});
