// Countdown
const countdown = document.getElementById("countdown");
const targetDate = new Date("2025-08-24T18:00:00+05:30");
function updateCountdown() {
  if (!countdown) return;
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) { countdown.innerText = "❤️ Today is the Big Day! ❤️"; return; }
  const d = Math.floor(diff/8.64e7), h = Math.floor((diff%8.64e7)/3.6e6), m = Math.floor((diff%3.6e6)/6e4), s = Math.floor((diff%6e4)/1e3);
  countdown.innerText = `${d} days ${h} hrs ${m} min ${s} sec`;
}
setInterval(updateCountdown, 1000); updateCountdown();

const translations = {
  en: {
    back: "Back to Home", welcome: "Suriyaprakash ❤️ Sisira", couple: "Couple Story", venue: "Venue Details", food: "Food Menu",
    photos: "Photos",
    menuLabel: "🍽️ Menu Highlights",
    menu: ["Ashoka Halwa","Kara Paniyaram","Beetroot Idiyappam","Keera Adai","Chapathi","Curd Rice","Idly","Masala Milk"]
  },
  ta: {
    back: "முதன்மை பக்கம்", welcome: "சூரியபிரகாஷ் ❤️ சிசிரா", couple: "காதல் பயணம்", venue: "திருமண இடம்", food: "சமையல் பட்டியல்",
    photos: "புகைப்படங்கள்",
    menuLabel: "🍽️ சிறப்பு சமையல்",
    menu: ["அசோகா அல்வா","கார பணியாரம்","பீட்ரூட் இடியாப்பம்","கீரை அடை","சப்பாத்தி","தயிர் சாதம்","இட்லி","மசாலா பால்"]
  },
  ml: {
    back: "ഹോം പേജ്", welcome: "സൂര്യപ്രകാശ് ❤️ സിസിര", couple: "ക്യുപിള്‍ സ്‌റ്റോറി", venue: "വേദി വിശദാംശങ്ങള്‍", food: "ഭക്ഷണ പട്ടിക",
    photos: "ഫോട്ടോകള്‍",
    menuLabel: "🍽️ മെനു ഹൈലൈറ്റ്സ്",
    menu: ["അശോക ഹല്‍വ","കാറ പണിയാരം","ബീറ്റ്റൂട്ട് ഇടിയപ്പം","കീര അടയ്","ചപ്പാത്തി","തൈര് റൈസ്","ഇഡ്ലി","മസാലാ പാലിന്"]
  }
};

let selectedLang = localStorage.getItem("siteLang") || "en";
function setLanguage(lang) {
  selectedLang = lang; localStorage.setItem("siteLang",lang);
  document.querySelectorAll("[data-key]").forEach(elem=>{
    const key=elem.getAttribute("data-key");
    if(translations[lang][key])elem.innerText=translations[lang][key];
  });
  // Food menu translations (for food.html)
  const menuNames = translations[lang].menu;
  document.querySelectorAll(".food-item p").forEach((p,i)=>{
    if(menuNames&&i<menuNames.length)p.textContent=menuNames[i];
  });
  document.querySelector(".menu-heading") && (document.querySelector(".menu-heading").textContent=translations[lang].menuLabel);
}
document.addEventListener("DOMContentLoaded",()=>{setLanguage(selectedLang);});

// BG music/mute
window.addEventListener("DOMContentLoaded", ()=>{
  const player = document.getElementById('bgMusic');
  const muteBtn = document.getElementById('muteButton');
  if(!player||!muteBtn) return;
  try {player.volume=0.8; player.play();}catch(e){}
  function updateMuteIcon(){muteBtn.innerHTML=player.muted?"&#128263;":"&#128266;";}
  muteBtn.onclick = ()=>{player.muted=!player.muted;updateMuteIcon();};
  updateMuteIcon();
});
