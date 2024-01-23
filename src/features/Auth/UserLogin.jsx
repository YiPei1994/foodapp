import { useState } from 'react';
import { useLogIn } from './useLogIn';
import Logo from '../../components/Logo';

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
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex  flex-col rounded-lg bg-yellow-50/25 px-4 py-10"
    >
      <Logo />
      <div className="  flex items-center justify-between gap-4 py-4">
        <label htmlFor="email">Email:</label>
        <input
          className="w-4/5 rounded-lg p-2 px-5"
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="  flex items-center justify-between gap-4 py-4">
        <label htmlFor="password">Password:</label>
        <input
          className="w-4/5 rounded-lg p-2 px-5"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="m-auto">
        <button
          className="mt-4 rounded-full bg-yellow-400 px-6 py-4 text-yellow-50"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default UserLogin;
