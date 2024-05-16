import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const [dogImageUrl, setDogImageUrl] = useState("");

  useEffect(() => {
    const currentLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(currentLang);
  }, [i18n]);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        if (response.ok) {
          setDogImageUrl(data.message);
        } else {
          console.error("Failed to fetch dog image:", data);
        }
      } catch (error) {
        console.error("Error fetching dog image:", error);
      }
    };

    fetchDogImage();
  }, []);
  return (
    <div>
      <h1>{t("land")}</h1>
      {dogImageUrl && (
        <img
          src={dogImageUrl}
          alt="Dog"
          style={{ width: "300px", height: "300px" }}
        />
      )}
    </div>
  );
};

export default LandingPage;
