import { useLogOut } from './useLogOut';

function SignOut() {
  const { logOut, isLoading } = useLogOut();
  return <button onClick={() => logOut()}>Log out</button>;
}

export default SignOut;
