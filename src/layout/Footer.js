import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

// Footer component that displays a message and a link to the author's LinkedIn profile.
const Footer = () => {
  const [t] = useTranslation("global"); // Initialize the translation hook

  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }} 
      className="p-5"
    >
      <h1 className="text-xs text-gray-400 text-center">
        {t("footer.message")} &nbsp;
        <a
          href="https://www.linkedin.com/in/chandrakant-kushwah/"
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-blue-600 animate"
        >
          {t("footer.name")}
        </a>
      </h1>
    </motion.div>
  );
};

export default Footer;
