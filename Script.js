// script.js

// Countdown Timer
const countdownElement = document.getElementById("countdown");
const eventDate = new Date("2025-08-18T10:00:00+05:30"); // update as needed

function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdownElement.innerText = "It's happening now!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdownElement.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Language Toggle
const langButtons = document.querySelectorAll("[data-lang]");
const texts = document.querySelectorAll("[data-text]");

langButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    texts.forEach(el => {
      const key = el.dataset.text;
      el.innerText = translations[key][lang];
    });
  });
});

const translations = {
  "sectionTitleFood": {
    en: "Delicious Food Menu",
    ta: "சமையல் பட்டியல் 🍽️",
    ml: "സദ്യ മെനു 🍽️"
  },
  "photoNote": {
    en: "Photos will be shared here after the event 📸",
    ta: "நிகழ்வுக்குப் பிறகு புகைப்படங்கள் இங்கே பகிரப்படும் 📸",
    ml: "ഇവന്റിന് ശേഷം ചിത്രങ്ങൾ ഇവിടെ പങ്കുവെക്കപ്പെടും 📸"
  }
};
