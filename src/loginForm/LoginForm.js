import React, { useEffect, useState, useCallback } from "react";
import "./LoginForm.css";
import log from "./aa.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LoginForm = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = useCallback(() => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email) {
      setError(null);
    } else if (!emailRegex.test(email)) {
      setError(t("invalid_email"));
    } else {
      setError("");
    }
  }, [email, t]);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(email, password);
    if (email === "" || password === "") {
      alert(t("fill_detail"));
      return;
    }
    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/landing");
    } else {
      alert(t("wrong_credentials"));
      console.log("Login failed");
    }
  };

  useEffect(() => {
    validateEmail();
  }, [email, validateEmail]);

  useEffect(() => {
    const currentLang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(currentLang);
  }, [i18n]);

  const handleLanguageChange = (event) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  const LanguageSelector = () => (
    <div className="language-selector">
      <select
        className="language-select"
        onChange={handleLanguageChange}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="ta">Tamil</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );

  return (
    <div>
      <img src={log} alt="Logo" />
      <h2 className="log">{t("login")}</h2>
      <form onSubmit={handleLogin} className="form">
        <div className="input-container">
          <i className="fa fa-user icon" aria-hidden="true"></i>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder={t("email")}
          />
          {error && <div className="error">{error}</div>}
        </div>
        <div className="input-container">
          <i className="fa fa-lock icon" aria-hidden="true"></i>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("password")}
          />
        </div>
        <button type="submit">{t("login")}</button>
        <p className="forget">{t("forgot_password")}</p>
      </form>
      <div className="language-selector-container">
        <LanguageSelector />
      </div>
    </div>
  );
};

export default LoginForm;
