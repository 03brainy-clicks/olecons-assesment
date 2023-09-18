import { motion } from "framer-motion";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  const [t, i18n] = useTranslation("global");
  const [lang, setLang] = useState("en");
  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLang(language);
  };
  console.log(i18n);
  return (
    <div className="py-3">
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="flex mx-auto lg:w-9/12 w-11/12 justify-between items-center"
      >
        <div>
          <h1 className="lg:text-2xl md:text-xl font-bold text-blue-600">
            {t("header.logo")}
          </h1>
        </div>
        <div>
          <ul className="font-medium md:text-sm text-xs flex lg:gap-7 md:gap-5 gap-2 items-center">
            <li
              className={`animate cursor-pointer py-2 border-2 border-transparent  ${
                path === "/home"
                  ? "border-b-blue-600"
                  : "hover:border-b-blue-400"
              }`}
            >
              <Link to={"/home"}>{t("header.nav.home")}</Link>
            </li>
            <li
              className={`animate cursor-pointer py-2 border-2 border-transparent  ${
                path === "/about"
                  ? "border-b-blue-600"
                  : "hover:border-b-blue-400"
              }`}
            >
              <Link to={"/about"}>{t("header.nav.about")}</Link>
            </li>
            <li>
              <select
                value={lang}
                onChange={(e) => handleChangeLanguage(e.target.value)}
                name="language"
                id="language"
                className=" animate cursor-pointer bg-transparent outline-none  py-2 px-2  border-2 border-transparent hover:border-b-blue-600"
              >
                <option value="en" className="bg-transparent">
                  English
                </option>
                <option value="hi">Hindi</option>
                <option value="chi">Chinese</option>
                <option value="es">Spanish</option>
                <option value="jap">Japanese</option>
              </select>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
