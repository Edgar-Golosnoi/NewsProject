import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import play from 'audio-play';
import load from 'audio-loader';

export default function Registration({ setAuthState }) {
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

  const registrationInHandler = async (event) => {
    event.preventDefault();
    // console.log(input);

    const response = await fetch('/api/auth/registration', {
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
      <form onSubmit={registrationInHandler} className="container bg-secondary rounded-3 py-3 item" align="center">
        <div className="mb-3">
          {/* <h2>Электронная почта</h2> */}
          <input
            // value={input.username}
            onChange={controlInpHandler}
            type="text"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-3">
          <h2>Пароль</h2>
          <input
            // value={input.password}
            onChange={controlInpHandler}
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Your Password"
          />
        </div>
        {/* <div className="mb-3">
          <h2>Repeat Password</h2>
          <input
            value={input.repeat}
            onChange={changeHandler}
            type="password"
            name="repeat"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Repeat Password"
          />
        </div> */}
        <div>
          <button type="submit" className="btn btn-danger">Зарегистрироваться</button>
          {/* onClick={playHandler} */}
          <Link to="/" class="btn btn-outline-danger float-left">←Back to Auth</Link>
        </div>

      </form>
    </div>
  );
}
