import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "email": "Email",
      "password": "Password",
      "login": "Login",
      "invalid_email": "Please enter a valid email address",
      "wrong_credentials": "Wrong credentials",
      "forgot_password": "Forgot your password?",
      "fill_detail":"Please fill every field",
      "land":"Random Dog Image"
    }
  },
  ta: {
    translation: {
      "email": "மின்னஞ்சல்",
      "password": "கடவுச்சொல்",
      "login": "உள்நுழை",
      "invalid_email": "தவறான முகவரி",
      "wrong_credentials": "தவறான சான்றுகள்",
      "forgot_password": "உங்கள் கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
      "fill_detail":"ஒவ்வொரு புலத்தையும் நிரப்பவும்",
      "land":"சீரற்ற நாய் படம்"
    }
  },es: {
    translation: {
      "email": "Correo electrónico",
      "password": "Contraseña",
      "login": "Iniciar sesión",
      "invalid_email": "Por favor,introduce una dirección",
      "wrong_credentials": "Credenciales incorrectas",
      "forgot_password": "¿Olvidaste tu contraseña?",
      "fill_detail":"Por favor complete todos los campos",
      "land":"Imagen de perro aleatoria"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
