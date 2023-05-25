import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import backIcon from '../assets/back-arrow-white.png';

function Navigation() {
  const location = useLocation();
  const [path, setPath] = useState();
  useEffect(() => {
    if (location.pathname === '/home') {
      setPath('Current Weather');
    } else {
      let path = location.pathname.split('/')[2];
      path = path.split('-').join(' ');
      setPath(path);
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      {location.pathname !== '/home'
        && (
          <NavLink className="nav-arrow" to="/home">
            <img src={backIcon} alt="" aria-label="back" height="40px" />
          </NavLink>
        )}
      <h1 className="page-title">
        {location.pathname !== '/home'
          && 'City/'}
        {path}
      </h1>
      {location.pathname !== '/home'
        && (
          <NavLink className="nav-arrow-hidden" to="/home">
            <img src={backIcon} alt="" aria-label="back" height="40px" />
          </NavLink>
        )}
    </div>
  );
}

export default Navigation;
