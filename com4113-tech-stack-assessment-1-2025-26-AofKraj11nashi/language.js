/************************************
 * 1. Translation Data
 ************************************/
const translations = {
  en: {
    welcome: "Welcome back, Jane",
    subtitle: "Here's some personalised content based on your interests",
    postResource: "Post a resource and share with community…",
    filter: "Filter",
    trending: "Trending",
    coding: "Coding",
    all: "All",
    loader: "Loading Skill Swap Hub…",
    settings: "Settings",
    theme: "Theme",
    language: "Language",
    accessibility: "Accessibility",
    largeText: "Large Text",
    dyslexiaFont: "Dyslexia Font",
    close: "Close",
    saveChanges: "Save Changes",
  },
  es: {
    welcome: "Bienvenida de nuevo, Jane",
    subtitle: "Aquí tienes contenido personalizado basado en tus intereses",
    postResource: "Publica un recurso y compártelo con la comunidad…",
    filter: "Filtro",
    trending: "Tendencias",
    coding: "Programación",
    all: "Todo",
    loader: "Cargando Skill Swap Hub…",
    settings: "Configuración",
    theme: "Tema",
    language: "Idioma",
    accessibility: "Accesibilidad",
    largeText: "Texto grande",
    dyslexiaFont: "Fuente para dislexia",
    close: "Cerrar",
    saveChanges: "Guardar cambios",
  }
};


/************************************
 * 2. Apply Language to UI Elements
 ************************************/
function applyLanguage(lang) {
  const t = translations[lang];

  // Homepage
  document.getElementById("welcomeText").textContent = t.welcome;
  document.getElementById("subtitleText").textContent = t.subtitle;
  document.getElementById("postResourceText").textContent = t.postResource;

  // Filter Buttons
  document.getElementById("filterAll").textContent = t.all;
  document.getElementById("filterTrending").textContent = t.trending;
  document.getElementById("filterCoding").textContent = t.coding;
  document.getElementById("filterLabel").textContent = t.filter;

  // Loader
  document.getElementById("loaderText").textContent = t.loader;

  // Settings Panel
  document.getElementById("settingsTitle").textContent = t.settings;
  document.getElementById("themeLabel").textContent = t.theme;
  document.getElementById("languageLabel").textContent = t.language;
  document.getElementById("accessibilityLabel").textContent = t.accessibility;

  document.getElementById("largeTextLabel").textContent = t.largeText;
  document.getElementById("dyslexiaLabel").textContent = t.dyslexiaFont;

  document.getElementById("closeSettingsBtn").textContent = t.close;
  document.getElementById("saveSettingsBtn").textContent = t.saveChanges;
}


/************************************
 * 3. Handle Language Change
 ************************************/
function handleLanguageChange() {
  const selectedLang = langSelect.value;
  applyLanguage(selectedLang);
  localStorage.setItem("appLanguage", selectedLang);
}


/************************************
 * 4. Initialize on Page Load
 ************************************/
document.addEventListener("DOMContentLoaded", () => {
  // Grab dropdown
  window.langSelect = document.getElementById("langSelect");

  // If user changed language before, use it. Otherwise default = EN
  const savedLang = localStorage.getItem("appLanguage") || "en";
  langSelect.value = savedLang;

  applyLanguage(savedLang);

  // Listen to dropdown change
  langSelect.addEventListener("change", handleLanguageChange);
});
let selectedLanguage = "en"; // default

// Grab language dropdown
const languageSelect = document.getElementById("language-select");
// Grab save button
const saveBtn = document.getElementById("save-language-btn");

// Detect when user chooses a language
languageSelect.addEventListener("change", () => {
    selectedLanguage = languageSelect.value;
});

// When they click Save
saveBtn.addEventListener("click", () => {
    applyLanguage(selectedLanguage);
});

function applyLanguage(lang) {
    if (lang === "es") {
        document.getElementById("home-title").textContent = "Bienvenido";
        document.getElementById("app-description").textContent = "Este es un texto de demostración.";
    } else {
        document.getElementById("home-title").textContent = "Welcome";
        document.getElementById("app-description").textContent = "This is a demo text.";
    }
}
