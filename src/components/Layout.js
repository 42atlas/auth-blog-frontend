import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/new-post'>Create post</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
