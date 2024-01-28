import React, { useState } from 'react';
import { Accounts } from 'meteor/accounts-base';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = e => {
    e.preventDefault();

    Accounts.createUser({email, password}, err => {
      if (err) {
        console.error(err);
      } else {
        // Handle successful registration
      }
    });
  };

  return (
    <form onSubmit={submit}>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
