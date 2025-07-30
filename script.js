const translations = {
  en: {
    name1: "Suriyaprakash",
    name2: "Sisira",
    couple: "Couple Story",
    venue: "Venue Details",
    food: "Food Menu",
    photos: "Photos",
    withlove: "With love,<br> Kumar & Vijayalakshmi, Raveendran & Syamala",
    back: "Back to Home"
  },
  ta: {
    name1: "சூரியப்ரகாஷ்",
    name2: "சிசிரா",
    couple: "ஜோடி கதை",
    venue: "நிகழ்வு விவரங்கள்",
    food: "உணவு பட்டியல்",
    photos: "புகைப்படங்கள்",
    withlove: "அன்புடன்,<br>குமார் & விஜயலட்சுமி, ரவீந்திரன் & சியமலா",
    back: "முகப்புக்கு திரும்பவும்"
  },
  ml: {
    name1: "സൂര്യപ്രകാശ്",
    name2: "സിസിര",
    couple: "ദമ്പതികളുടെ കഥ",
    venue: "വേദി വിവരങ്ങൾ",
    food: "ഭക്ഷണ പട്ടിക",
    photos: "ചിത്രങ്ങൾ",
    withlove: "സ്നേഹത്തോടെ,<br> കുമാർ & വിജയലക്ഷ്മി, രവീന്ദ്രൻ & ശ്യാമള",
    back: "വീട്ടിലേക്ക് മടങ്ങുക"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  const muteButton = document.querySelector('#mute-btn') || document.querySelector('#muteButton');
  
  if (muteButton && audio) {
    muteButton.addEventListener('click', () => {
      audio.muted = !audio.muted;
      muteButton.innerHTML = audio.muted ? '&#128263;' : '&#128266;';
    });
  }
});