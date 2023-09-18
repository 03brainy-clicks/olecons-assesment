import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t, i18n] = useTranslation("global");
  console.log(i18n)
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
          target="blank"
          className="underline hover:text-blue-600 animate"
        >
          {t("footer.name")}
        </a>
      </h1>
    </motion.div>
  );
};

export default Footer;
