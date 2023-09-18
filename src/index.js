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

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: { global: global_en },
    hi: { global: global_hi },
    es: { global: global_es },
    chi: { global: global_chi },
    jap: { global: global_jap },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <Router>
        <App />
      </Router>
    </I18nextProvider>
  </React.StrictMode>
);
