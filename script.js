const translations = {
  en: {
    name1: "Suriyaprakash",
    name2: "Sisira",
    couple: "Couple Story",
    venue: "Venue Details",
    food: "🍽️ Menu Highlights",
    photos: "Photos",
    withlove: "With love,<br> Kumar & Vijayalakshmi, Raveendran & Syamala",
    back: "Back to Home",
    food1: "Ashoka Halwa",
    food2: "Kara Paniyaram",
    food3: "Beetroot Idiyappam",
    food4: "Keera Adai",
    food5: "Chapathi",
    food6: "Curd Rice",
    food7: "Idly",
    food8: "Masala Milk",
    "venue-hall": "Sri Vasavi Marriage Hall",
    "venue-address": "Thirumarugal, Tamil Nadu",
    "venue-date": "24th August 2025, From 6 PM onwards",
    "venue-map": "Open in Google Maps",
    "venue-contact1": "Suriyaprakash: 9159109955",
    "venue-contact2": "Vijay (CP): 7339646162",
    "venue-contact3": "Kumar: 9488003374",
    "venue-contact4": "Sisira: 9159109955"
  },
  ta: {
    name1: "சூரியப்ரகாஷ்",
    name2: "சிசிரா",
    couple: "ஜோடி கதை",
    venue: "நிகழ்வு விவரங்கள்",
    food: "🍽️ மெனு சிறப்பம்சங்கள்",
    photos: "புகைப்படங்கள்",
    withlove: "அன்புடன்,<br>குமார் & விஜயலட்சுமி, ரவீந்திரன் & சியாமளா",
    back: "முகப்புக்கு திரும்பவும்",
    food1: "அசோகா ஹல்வா",
    food2: "கார பணியாரம்",
    food3: "பீட்ரூட் இடியாப்பம்",
    food4: "கீரை அடை",
    food5: "சப்பாத்தி",
    food6: "தயிர் சாதம்",
    food7: "இட்லி",
    food8: "மசாலா பால்",
    "venue-hall": "ஸ்ரீ வாசவி திருமண மண்டபம்",
    "venue-address": "திருமருகல், தமிழ்நாடு",
    "venue-date": "24 ஆகஸ்ட் 2025, மாலை 6 மணி முதல்",
    "venue-map": "கூகுள் மேப்பில் திறக்கவும்",
    "venue-contact1": "சூரியப்ரகாஷ்: 9159109955",
    "venue-contact2": "விஜய் (CP): 7339646162",
    "venue-contact3": "குமார்: 9488003374",
    "venue-contact4": "சிசிரா: 9159109955"
  },
  ml: {
    name1: "സൂര്യപ്രകാശ്",
    name2: "സിസിര",
    couple: "ദമ്പതികളുടെ കഥ",
    venue: "വേദി വിവരങ്ങൾ",
    food: "🍽️ മെനു ഹൈലൈറ്റ്സ്",
    photos: "ചിത്രങ്ങൾ",
    withlove: "സ്നേഹത്തോടെ,<br> കുമാർ & വിജയലക്ഷ്മി, രവീന്ദ്രൻ & ശ്യാമള",
    back: "വീട്ടിലേക്ക് മടങ്ങുക",
    food1: "അശോക ഹല്‍വ",
    food2: "കാര പണിയാരം",
    food3: "ബീറ്റ്റൂട്ട് ഇടിയപ്പം",
    food4: "കീര അട",
    food5: "ചപ്പാത്തി",
    food6: "തയിര് ചോറ്",
    food7: "ഇഡ്ഡലി",
    food8: "മസാല പാല്‍",
    "venue-hall": "ശ്രീ വാസവി വിവാഹ ഹാൾ",
    "venue-address": "തിരുമരുഗൽ, തമിഴ്നാട്",
    "venue-date": "2025 ഓഗസ്റ്റ് 24, വൈകിട്ട് 6 മണി മുതൽ",
    "venue-map": "ഗൂഗിൾ മാപ്പിൽ തുറക്കുക",
    "venue-contact1": "സൂര്യപ്രകാശ്: 9159109955",
    "venue-contact2": "വിജയ് (CP): 7339646162",
    "venue-contact3": "കുമാർ: 9488003374",
    "venue-contact4": "സിസിര: 9159109955"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Special logic for story.html: show only the correct story block
  const storyKeys = ['couple-story-en', 'couple-story-ta', 'couple-story-ml'];
  storyKeys.forEach(key => {
    document.querySelectorAll(`[data-key="${key}"]`).forEach(el => {
      if ((lang === 'en' && key === 'couple-story-en') ||
          (lang === 'ta' && key === 'couple-story-ta') ||
          (lang === 'ml' && key === 'couple-story-ml')) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  });
}

// Countdown Timer for Event (24 August 2025, 6:00 PM)
document.addEventListener('DOMContentLoaded', () => {
  const audio = document.querySelector('audio');
  const muteButton = document.querySelector('#mute-btn') || document.querySelector('#muteButton');
  
  if (muteButton && audio) {
    muteButton.addEventListener('click', () => {
      audio.muted = !audio.muted;
      muteButton.innerHTML = audio.muted ? '&#128263;' : '&#128266;';
    });
  }

  // Countdown Timer
  const countdownEl = document.getElementById('countdown-timer') || document.getElementById('countdown');
  if (countdownEl) {
    function updateCountdown() {
      const eventDate = new Date('2025-08-24T18:00:00+05:30');
      const now = new Date();
      const diff = eventDate - now;
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        countdownEl.innerHTML = `<span class="countdown-label">Event starts in:</span> <span class="countdown-numbers">${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
      } else {
        countdownEl.innerHTML = '<span class="countdown-live">The event has started!</span>';
      }
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
});