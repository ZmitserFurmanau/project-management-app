import React, { FC, useState } from 'react';
import { useAppDispatch } from '~/hooks/redux';
import { signIn } from '~/store/reducers/authSlice';

const LoginPage: FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  const updateName = (name: string) => {
    setName(name);
  };

  const updatePassword = (password: string) => {
    setPassword(password);
  };

  const onSubmit = () => {
    dispatch(
      signIn({
        login: name,
        password,
      }),
    );
  };

  return (
    <div>
      <p>Войти:</p>
      <input type="text" onChange={e => updateName(e.target.value)} />
      <input type="password" onChange={e => updatePassword(e.target.value)} />
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default LoginPage;
