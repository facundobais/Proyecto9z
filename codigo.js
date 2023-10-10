document.addEventListener("DOMContentLoaded", function() {
    const gamepadIcon = document.getElementById("gamepad-icon");

    gamepadIcon.addEventListener("mouseover", () => {
        gamepadIcon.style.transform = "rotate(360deg)";
    });

    gamepadIcon.addEventListener("mouseout", () => {
        gamepadIcon.style.transform = "rotate(0deg)";
    });
});