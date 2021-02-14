import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate';
import LoginForm from './LoginForm';
import LoginPasswordForgot from './LoginPasswordForgot';
import LoginPasswordReset from './LoginPasswordReset';

const Login = () => (
  <div>
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="create" element={<LoginCreate />} />
      <Route path="forgot" element={<LoginPasswordForgot />} />
      <Route path="password-reset" element={<LoginPasswordReset />} />
    </Routes>
  </div>
);

export default Login;
