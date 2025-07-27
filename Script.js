// Super Countdown Timer
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-08-24T18:00:00+05:30"); // 24th August 2025, 6 PM IST

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.innerText = "❤️ Today is the Big Day! ❤️";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerText = `${days} days ${hours} hrs ${minutes} min ${seconds} sec`;
}

if (countdown) {
  setInterval(updateCountdown, 1000);
  updateCountdown();
}

// Language Toggle Logic
const translations = {
  en: {
    couple: "Couple Story",
    venue: "Venue Details",
    food: "Food Menu",
    photos: "Photos",
    menu: [
      "Asoka Halwa", "Kara Paniyaram", "Sambar Idli", "Vegetable Pulao", "Bhajji", "Masala Dosa", "Carrot Halwa", "Payasam"
    ]
  },
  ta: {
    couple: "காதல் பயணம்",
    venue: "திருமண இடம்",
    food: "சமையல் பட்டியல்",
    photos: "புகைப்படங்கள்",
    menu: [
      "அசோகா அல்வா", "கார பணியாரம்", "சாம்பார் இட்லி", "வெஜிடபிள் புலாவ்", "பஜ்ஜி", "மசால் டோசை", "கேரட் ஹல்வா", "பாயாசம்"
    ]
  },
  ml: {
    couple: "ക്യുപിള്‍ സ്റ്റോറി",
    venue: "വേദി വിശദാംശങ്ങള്‍",
    food: "ഭക്ഷണ പട്ടിക",
    photos: "ഫോട്ടോകള്‍",
    menu: [
      "അശോക ഹല്‍വ", "കാറ പണിയാരം", "സാംബാർ ഇഡ്ഡലി", "വെജിറ്റബിൾ പുലാവു", "ഭജ്ജി", "മസാല ദോശ", "കാരറ്റ് ഹല്‍വ", "പായസം"
    ]
  }
};

function setLanguage(lang) {
  // Section buttons
  const buttons = document.querySelectorAll(".section-btn");
  buttons.forEach(btn => {
    const key = btn.getAttribute("data-key");
    btn.textContent = translations[lang][key];
  });

  // Food page menu
  const menuNames = translations[lang].menu;
  const foodList = document.querySelectorAll(".food-item p");
  if (foodList.length && menuNames) {
    for (let i = 0; i < foodList.length && i < menuNames.length; i++) {
      foodList[i].textContent = menuNames[i];
    }
  }
}

// Make language stick across navigation
let selectedLang = "en";
if (window.localStorage) {
  selectedLang = localStorage.getItem("siteLang") || "en";
  setTimeout(()=>setLanguage(selectedLang),100);
}
window.setLanguage = function(lang) {
  selectedLang = lang;
  setLanguage(lang);
  if (window.localStorage) localStorage.setItem("siteLang", lang);
};
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(selectedLang);
});
