import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../funcionalidades/actions';
import api from '../../services/api';
import { format } from 'date-fns';
import history from '../../services/history';
const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nascimento, setNascimento] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const [day, month] = nascimento.split('/');
    
    const formattedDates = `${month}-${day}`;

      const formattedNascimento = format(new Date(formattedDates), 'MM-dd');
console.log(formattedNascimento)
      const response = await api.post('users', {
        name,
        email,
        password,
        nascimento: formattedNascimento,
      });

      console.log(response.data);
      history.push('/')
      history.go('/')
     
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nascimento"
          value={nascimento}
          onChange={(e) => setNascimento(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
  
    </div>
  );
};

export default Signup;