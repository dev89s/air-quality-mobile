import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function Root() {
  return (
    <>
      <nav>
        <Navigation />
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
