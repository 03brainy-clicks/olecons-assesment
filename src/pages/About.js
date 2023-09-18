import React from "react";
import Skyline from "../assets/skyline.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  // Initialize the translation hook
  const [t] = useTranslation("global");
 

  return (
    <div className="w-full h-full flex items-end py-5 lg:mt-auto">
      <div className="lg:w-9/12 w-11/12 mx-auto">
        {/* Animation for main heading and sub-heading */}
        <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="flex-1">
          <h1 className="lg:text-8xl md:text-6xl text-4xl">{t("about.main-heading")}</h1>
          <p className="mt-2 text-lg font-medium">{t("about.sub-heading")}</p>
        </motion.div>
        <div className="flex lg:flex-row flex-col my-5 gap-7 items-end">
          {/* Animation for the skyline image */}
          <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="flex-1 rounded overflow-hidden">
            <img src={Skyline} alt="" className="" />
          </motion.div>
          <div className="flex-1">
            {/* Animation for the paragraph */}
            <motion.p initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="">
              {t("about.para")}
            </motion.p>
            <div className="mt-5">
              {/* Animation for the "Why Choose Us" heading */}
              <motion.h6 initial={{ x: 200 }} animate={{ x: 0 }} transition={{ duration: 1 }} className="font-medium text-lg">
                {t("about.why")}
              </motion.h6>
              {/* Animation for the features list */}
              <motion.div initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="mt-5 space-y-5 columns-2">
                <div>
                  <h6 className="text-sm font-medium">
                    {t("about.features.tailored.heading")}
                  </h6>
                  <p className="text-sm">{t("about.features.tailored.span")}</p>
                </div>
                <div>
                  <h6 className="text-sm font-medium">
                    {t("about.features.streamlined.heading")}
                  </h6>
                  <p className="text-sm">
                    {t("about.features.streamlined.span")}
                  </p>
                </div>
                <div>
                  <h6 className="text-sm font-medium">
                    {t("about.features.proven.heading")}
                  </h6>
                  <p className="text-sm">{t("about.features.proven.span")}</p>
                </div>
                <div>
                  <h6 className="text-sm font-medium">
                    {t("about.features.industry.heading")}
                  </h6>
                  <p className="text-sm">{t("about.features.industry.span")}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Animation for the closing paragraph */}
        <motion.p initial={{ y: 200 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="text-sm">
          {t("about.span")}
        </motion.p>
      </div>
    </div>
  );
};

export default About;
