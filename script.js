// Live countdown to Nov 7, 2025 6:00 PM (LOCAL time)
const countdownEl = document.getElementById('countdown');
const labelEl = document.querySelector('.until');

// Force creation of a local-time Date object
// Months are zero-indexed: 10 = November
const eventDate = new Date(2025, 10, 7, 18, 0, 0);

function formatNumber(n) {
  return n.toString().padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    countdownEl.textContent = '00:00:00';
    labelEl.textContent = '
