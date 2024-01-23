import { useLogOut } from './useLogOut';
import { IoIosLogOut } from 'react-icons/io';

function SignOut() {
  const { logOut } = useLogOut();
  return (
    <button
      className="rounded-lg bg-yellow-50 p-4 text-xl"
      onClick={() => logOut()}
    >
      <IoIosLogOut />
    </button>
  );
}

export default SignOut;
