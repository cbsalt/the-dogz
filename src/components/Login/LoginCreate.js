import React, { useContext } from 'react';
import Input from '../Form/Input';
import Button from '../Form/Button';

import { UserContext } from '../../UserContext';

import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';
import Error from '../Helper/Error';

import { USER_POST } from '../../api';
import Head from '../Helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <>
      <Head title="Crie sua conta" />
      <section className="animeLeft">
        <h1 className="title">Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="E-mail" type="text" name="email" {...email} />
          <Input label="Password" type="password" name="password" {...password} />
          {loading ? <Button disabled>Cadastrando...</Button> : <Button>Cadastrar</Button>}
        </form>
        <Error error={error} />
      </section>
    </>
  );
};
export default LoginCreate;
