import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

import styles from './LoginForm.module.css';
import stylesBtn from '../Form/Button.module.css';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} action="" onSubmit={handleSubmit}>
        <Input label="Username" type="text" id="username" {...username} />
        <Input label="Password" type="password" id="password" {...password} />
        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to="/login/forgot">Esqueci minha senha</Link>
      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Não possui login? Cadastre-se agora!</p>
      </div>
      <Link className={stylesBtn.button} to="/login/create">Cadastrar</Link>
    </section>
  );
};

export default LoginForm;
