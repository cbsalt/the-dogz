/* eslint-disable no-shadow */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Error from '../Helper/Error';
import Head from '../Helper/Head';

const LoginPasswordReset = () => {
  const [login, setLogin] = useState('');
  const [key, setKey] = useState('');
  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate('/login');
    }
  }

  return (
    <>
      <Head title="Reset sua senha" />
      <section className="animeLeft">
        <h1 className="title">Reset sua senha</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Nova senha"
            type="password"
            name="password"
            {...password}
          />
          {loading
            ? <Button disabled>Resetando...</Button>
            : <Button>Reset</Button>}
          <Error error={error} />
        </form>
      </section>
    </>
  );
};

export default LoginPasswordReset;
