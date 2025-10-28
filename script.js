// Live countdown to Nov 7, 2025 6:00 PM (local time)
const countdownEl = document.getElementById('countdown');
const labelEl = document.querySelector('.until');

// Use local time of the visitor for clarity
const eventDate = new Date('November 7, 2025 18:00:00');

function formatNumber(n){ return n.toString().padStart(2, '0'); }

function updateCountdown(){
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0){
    countdownEl.textContent = '00:00:00';
    labelEl.textContent = 'THE EVENT HAS STARTED!';
    clearInterval(ticker);
    return;
  }

  const days    = Math.floor(diff / (1000*60*60*24));
  const hours   = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Show D:HH:MM:SS if there is at least 1 day
  const text = (days > 0)
    ? `${days}d ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`
    : `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;

  countdownEl.textContent = text;
}

// run immediately + every second
const ticker = setInterval(updateCountdown, 1000);
updateCountdown();
