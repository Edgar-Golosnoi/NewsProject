import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './Auth/AuthPage';
import Registration from './Auth/Registration';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
}
