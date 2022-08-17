import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import play from 'audio-play';
import load from 'audio-loader';

export default function AuthPage({ setAuthState }) {
  const [input, setInput] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  // const playHandler = async () => {
  //   const sound = await load('/sound/whoosh.mp3');
  //   play(sound);
  // };
  const controlInpHandler = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signInHandler = async (event) => {
    event.preventDefault();
    console.log(input);
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input),
    });
    if (response.ok) {
      const data = await response.json();
      setAuthState(data);
      navigate('/news');
    }
  };

  return (
    <div className="mx-auto mt-5" style={{ width: '400px' }}>
      <div style={{ height: '250px' }} />
      <form onSubmit={signInHandler} className="container bg-secondary rounded-3 py-3 item" align="center">

        <div className="mb-3">
          <h2>Электронная почта</h2>
          <input
            onChange={controlInpHandler}
            type="text"
            name="user"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <h2>Пароль</h2>
          <input
            onChange={controlInpHandler}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        <button type="submit" className="btn btn-danger">Авторизироваться</button>

        <div className="mx-auto mt-5">
          <h2>Вы еще не регистрировались?</h2>
        </div>
        {/* onClick={playHandler} */}
        <Link to="/registration" className="btn btn-danger">Регистрация</Link>
      </form>
    </div>
  );
}
// fetch na /auth
