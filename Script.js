// Robust translations
const translations = {
  en: {
    back:"Back to Home", withlove:"With love,\nKumar & Vijayalakshmi, Raveendran & Syamala",
    name1:"Suriyaprakash", name2:"Sisira",
    couple:"Couple Story", venue:"Venue Details", food:"Food Menu", photos:"Photos"
  },
  ta: {
    back:"முதன்மை பக்கம்", withlove:"அன்புடன்,\nகுமார் & விஜயலட்சுமி, ரவீந்திரன் & சயமலா",
    name1:"சூரியபிரகாஷ்", name2:"சிசிரா",
    couple:"காதல் பயணம்", venue:"திருமண இடம்", food:"சமையல் பட்டியல்", photos:"புகைப்படங்கள்"
  },
  ml: {
    back:"ഹോം പേജ്", withlove:"സ്നേഹപൂര്‍വ്വം,\nകുമാര്‍, വിജയലക്ഷ്മി, രവീന്ദ്രന്‍, ശ്യാമള",
    name1:"സൂര്യപ്രകാശ്", name2:"സിസിര",
    couple:"ക്യുപിള്‍ സ്‌റ്റോറി", venue:"വേദി വിശദാംശങ്ങള്‍", food:"ഭക്ഷണ പട്ടിക", photos:"ഫോട്ടോകള്‍"
  }
};

let selectedLang = localStorage.getItem("siteLang") || "en";
function setLanguage(lang) {
  selectedLang = lang; localStorage.setItem("siteLang",lang);
  document.querySelectorAll("[data-key]").forEach(elem=>{
    const key=elem.getAttribute("data-key");
    if(key==="withlove") elem.innerHTML=translations[lang][key].replace("\n","<br>");
    else if(translations[lang][key]) elem.innerText=translations[lang][key];
  });
  // Food menu: handled separately on food.html if needed
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

// Optional: Countdown remains as before
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
