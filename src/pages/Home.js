import React from "react";

import Building from "../assets/image.jpg";
import RatingCard from "../components/RatingCard";

import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/Button";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Home = () => {
  const ratings = [
    { id: 1, rating: 5, reviews: 500, icon: faGoogle },
    { id: 2, rating: 5, reviews: 5000, icon: faFacebookF },
  ];

  const [t, i18n] = useTranslation("global");
  console.log(i18n);
  return (
    <div className="w-full h-full flex lg:items-end py-5 lg:mt-auto " >
      <div className=" lg:w-9/12 w-11/12 mx-auto">
        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <h6 className="font-medium">{t("home.sub-heading")}</h6>
          <h1 className="lg:text-8xl md:text-6xl text-4xl lg:w-7/12 leading-none">
            {t("home.main-heading")}
          </h1>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-between gap-7 items-end md:mt-12 mt-5 ">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="flex-1"
          >
            <img
              src={Building}
              alt="skylinet"
              className="w-full overflow-hidden rounded"
            />
          </motion.div>
          <div className="flex-1">
            <div className="lg:w-8/12  ">
              <motion.p
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
              >
                {t("home.para")}
              </motion.p>
              {/* rating  */}
              <motion.div
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex gap-5 py-7">
                  {ratings.map((rate) => {
                    return (
                      <RatingCard
                        icon={rate.icon}
                        reviews={rate.reviews}
                        key={rate.id}
                        rating={rate.rating}
                      />
                    );
                  })}
                </div>
                <span className="text-xs">{t("home.span")}</span>
                <div className="mt-2 flex gap-3">
                  <Button title={t("home.button.mortgage")} icon={faArrowUp} />
                  <Button
                    title={t("home.button.real-estate")}
                    icon={faArrowUp}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
