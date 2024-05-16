import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './loginForm/LoginForm';
import LandingPage from './landingPage/LandingPage';
import './i18n';

function App() {
  return (
    <Routes>
        <Route path="/"  element={<LoginForm></LoginForm>} />
        <Route path="/landing" element={<LandingPage></LandingPage>} />
    </Routes>
  );
}

export default App;
