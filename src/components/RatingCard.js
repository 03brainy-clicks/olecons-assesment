import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

const RatingCard = ({ reviews, icon, rating }) => {
  const [t, i18n] = useTranslation("global");
  console.log(i18n)
  return (
    <div className="flex gap-3 items-center">
      <div className="w-8 h-8 bg-white flex items-center justify-center rounded text-blue-600 animate hover:bg-blue-600 hover:text-white cursor-pointer">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        <p className="text-xs ">
          <span className="font-semibold">
            <FontAwesomeIcon icon={faStar} size="xs" /> {rating}/5
          </span>{" "}
          <br />
          <span className="text-xs">
            {t("rating-card.from")} {reviews}+ {t("rating-card.reviews")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RatingCard;
