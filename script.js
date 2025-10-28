// Live countdown to Nov 7, 2025 6:00 PM (LOCAL time)
const countdownEl = document.getElementById('countdown');
const labelEl = document.querySelector('.until');

// Force creation of a local-time Date object
// Months are zero-indexed: 10 = November
// force local time in the user's current timezone
const eventDate = new Date();
eventDate.setFullYear(2025);
eventDate.setMonth(10); // November (zero-indexed)
eventDate.setDate(7);
eventDate.setHours(18, 0, 0, 0); // 6:00:00 PM local
function formatNumber(n) {
  return n.toString().padStart(2, '0');
}

function updateCountdown() {
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    countdownEl.textContent = '00:00:00';
    labelEl.textContent = '
