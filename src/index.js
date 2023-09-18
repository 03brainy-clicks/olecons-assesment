import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import global_en from "./language/en/global.json";
import global_hi from "./language/hi/global.json";
import global_es from "./language/es/global.json";
import global_chi from "./language/chi/global.json";
import global_jap from "./language/jap/global.json";

import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

// Initialize i18next with language resources
i18next.init({
  interpolation: { escapeValue: false },
  lng: "en", // Default language
  resources: {
    en: { global: global_en }, // English language resources
    hi: { global: global_hi }, // Hindi language resources
    es: { global: global_es }, // Spanish language resources
    chi: { global: global_chi }, // Chinese language resources
    jap: { global: global_jap }, // Japanese language resources
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap the entire app with the i18n provider */}
    <I18nextProvider i18n={i18next}>
      <Router>
        {/* Render the App component within a Router */}
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
