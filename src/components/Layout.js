import { Link, NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className='navbar navbar-expand navbar-dark bg-dark' aria-label='Second navbar example'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Cities in the world! ✈️🌍
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarsExample02'
            aria-controls='navbarsExample02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarsExample02'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/new-post' className='nav-link'>
                  Create post
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='container mt-5'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
