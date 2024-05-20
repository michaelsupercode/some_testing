import "./Experience.css";
import { useState, useEffect } from "react";

export const Experience = ({ language, expDate }) => {
  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    const millisekundenProJahr = 365 * 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const experienceDate = new Date(expDate);
    const difference = currentDate - experienceDate;
    const calculatedExperienceYears = difference / millisekundenProJahr;

    setExperienceYears(calculatedExperienceYears);
  }, [expDate]);

    console.log(experienceYears);

  return (
    <article>
      <h3 className="experience__language">{language}</h3> applied
      <p className="experience__year">
        about {experienceYears.toFixed(1)} yrs
      </p>
    </article>
  );
};
