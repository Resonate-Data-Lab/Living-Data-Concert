// COUNTDOWN
const countdownEl = document.getElementById('countdown');
const labelEl = document.querySelector('.until');

const eventDate = new Date('November 7, 2025 18:00:00');

function formatNumber(n){ return n.toString().padStart(2, '0'); }

function updateCountdown(){
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0){
    countdownEl.textContent = '00:00:00';
    labelEl.textContent = 'THE EVENT HAS STARTED!';
    clearInterval(ticker);
    return;
  }

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${days}d ${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

const ticker = setInterval(updateCountdown, 1000);
updateCountdown();


// MOBILE MENU TOGGLE
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}


// STICKY NAVBAR (Hide on Scroll Down)
let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});
