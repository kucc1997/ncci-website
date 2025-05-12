document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const navMenu = document.querySelector("nav ul");

    mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Countdown Timer for Schedule Page
    const scheduleCountdown = document.getElementById("countdown");
    if (scheduleCountdown) {
        const targetDate = new Date("August 23, 2025 00:00:00").getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const timeLeft = targetDate - now;

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("days").textContent = days;
            document.getElementById("hours").textContent = hours;
            document.getElementById("minutes").textContent = minutes;
            document.getElementById("seconds").textContent = seconds;

            if (timeLeft < 0) {
                clearInterval(timer);
                scheduleCountdown.innerHTML = "<p>The schedule is now live!</p>";
            }
        }

        const timer = setInterval(updateCountdown, 1000);
        updateCountdown();
    }
});