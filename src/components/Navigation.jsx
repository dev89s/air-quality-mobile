import { useEffect, useState } from 'react';
import { NavLink, useLocation, useLoaderData } from 'react-router-dom';
import backIcon from '../assets/back.png';

function Navigation() {
  const { cityName } = useLoaderData();
  const location = useLocation();
  const [path, setPath] = useState();
  useEffect(() => {
    if (location.pathname === '/home') {
      setPath('Home Page');
    } else {
      setPath(`${cityName.charAt(0).toUpperCase()}${cityName.slice(1)}`);
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="nav-items">
        <NavLink to="/home">
          <img src={backIcon} alt="" aria-label="back" width="30px" />
        </NavLink>
      </div>
      <h1 className="page-title">{path}</h1>
    </div>
  );
}

export default Navigation;
