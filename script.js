// Live countdown to Living Data event
const countdown = document.getElementById("countdown");
const untilText = document.querySelector(".until");

// Set event date (local time)
const eventDate = new Date("November 7, 2025 18:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = eventDate - now;

  // If the event time has passed
  if (diff <= 0) {
    countdown.textContent = "00:00:00";
    untilText.textContent = "THE EVENT HAS STARTED!";
    clearInterval(timer);
    return;
  }

  // Calculate days, hours, minutes, seconds
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Format with leading zeros
  const formatted =
    (days > 0 ? days.toString().padStart(2, '0') + "d " : "") +
    hours.toString().padStart(2, '0') + ":" +
    minutes.toString().padStart(2, '0') + ":" +
    seconds.toString().padStart(2, '0');

  countdown.textContent = formatted;
}

// Run every second
const timer = setInterval(updateCountdown, 1000);
updateCountdown();
