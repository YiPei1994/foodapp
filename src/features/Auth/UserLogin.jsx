import { useState } from 'react';
import { useLogIn } from './useLogIn';

function UserLogin() {
  const [email, setEmail] = useState('studentypz@gmail.com');
  const [password, setPassword] = useState('yp651588');
  const { login, isLogging } = useLogIn();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login({ email, password });
    setEmail('');
    setPassword('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default UserLogin;
