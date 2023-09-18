import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTranslation } from "react-i18next";

// RatingCard component displays a rating icon, rating value, and the number of reviews.
const RatingCard = ({ reviews, icon, rating }) => {
  const [t] = useTranslation("global"); // Initialize the translation hook for internationalization

  return (
    <div className="flex gap-3 items-center">
      {/* Container for the rating icon */}
      <div className="w-8 h-8 bg-white flex items-center justify-center rounded text-blue-600 animate hover:bg-blue-600 hover:text-white cursor-pointer">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div>
        {/* Rating value and number of reviews */}
        <p className="text-xs">
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
