import { useState } from 'react';
import { useLogIn } from './useLogIn';
import Logo from '../../components/Logo';
import { useNavigate } from 'react-router-dom';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useLogIn();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSuccess: () => {
          navigate('/');
        },
      },
    );
    setEmail('');
    setPassword('');
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex  w-full  flex-col rounded-lg bg-yellow-50/25 px-4 py-4 lg:w-1/4"
    >
      <Logo />
      <div className="  m-auto flex w-4/5 flex-col items-start justify-between gap-4 py-4 lg:flex-row lg:items-center">
        <label htmlFor="email">Email:</label>
        <input
          className="w-full rounded-lg p-2 px-5"
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="  m-auto flex w-4/5 flex-col items-start  justify-between gap-4 py-4 lg:flex-row">
        <label htmlFor="password">Password:</label>
        <input
          className="w-full rounded-lg p-2 px-5"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="m-auto">
        <button
          className="mt-4 rounded-xl bg-yellow-400 px-6 py-2 text-yellow-50"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default UserLogin;
