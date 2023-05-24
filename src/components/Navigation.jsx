import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import backIcon from '../assets/back.png';

function Navigation() {
  const location = useLocation();
  const [path, setPath] = useState();
  useEffect(() => {
    if (location.pathname === '/home') {
      setPath('Home Page');
    } else {
      let path = location.pathname.split('/')[2];
      path = path.split('-').join(' ');
      setPath(path);
    }
  }, [location.pathname]);

  return (
    <div className="navbar">
      <div className="nav-items">
        {location.pathname !== '/home'
          && (
            <NavLink to="/home">
              <img src={backIcon} alt="" aria-label="back" width="30px" />
            </NavLink>
          )}
      </div>
      <h1 className="page-title">{path}</h1>
    </div>
  );
}

export default Navigation;
