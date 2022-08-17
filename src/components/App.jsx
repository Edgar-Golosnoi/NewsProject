import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './Auth/AuthPage';
import Registration from './Auth/Registration';

export default function App({ user }) {
  const [authState, setAuthState] = useState(user || null);
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage setAuthState={setAuthState} />} />
        <Route path="/registration" element={<Registration setAuthState={setAuthState} />} />
      </Routes>
    </>
  );
}
