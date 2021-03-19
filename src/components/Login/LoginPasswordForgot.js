import React from 'react';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';

import Error from '../Helper/Error';
import Input from '../Form/Input';
import Button from '../Form/Button';
import { PASSWORD_FORGOT } from '../../api';
import Head from '../Helper/Head';

const LoginPasswordForgot = () => {
  const login = useForm();
  const {
    data, loading, error, request,
  } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_FORGOT({
        login: login.value,
        url: window.location.href.replace('forgot', 'reset'),
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <>
      <Head title="Esqueci minha senha" />
      <section>
        <h1 className="title">Perdi minha senha</h1>
        {data ? <p style={{ color: '#4c1' }}>{data}</p> : (
          <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="login" {...login} />
            {loading
              ? <Button disabled>Enviando...</Button>
              : <Button>Enviar email de recuperação</Button>}
            <Error error={error} />
          </form>
        )}
      </section>
    </>
  );
};

export default LoginPasswordForgot;
