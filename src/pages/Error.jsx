import { Link, useRouteError } from 'react-router-dom';
import MainNav from '../components/MainNav';

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>

      <Link to="-1">&larr; Go back</Link>
      <MainNav />
    </div>
  );
}

export default Error;
