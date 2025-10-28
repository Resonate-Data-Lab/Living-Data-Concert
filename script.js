// Live countdown to Nov 7, 2025 6:00 PM local
const countdownEl = document.getElementById('countdown');
const labelEl = document.querySelector('.until');

// Explicitly set local time
const eventDate = new Date();
eventDate.setFullYear(2025);
eventDate.setMonth(10); // November (0-indexed)
eventDate.setDate(7);
eventDate.setHours(18, 0, 0, 0); // 6:00 PM local

function formatNumber(n) {
  return n.toString().padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownEl.textContent = '00:00:00';
    labelEl.textContent = 'THE EVENT HAS STARTED!';
    clearInterval(ticker);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  const text = `${days}d ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
  countdownEl.textContent = text;
}

const ticker = setInterval(updateCountdown, 1000);
updateCountdown();
