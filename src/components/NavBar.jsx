import { Link, useLocation } from 'react-router-dom';


function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"

          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/Portfolio"

          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"

          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <a href="https://docs.google.com/document/d/1rjr9d1tZrQRdK_48iBFE9qlvsaT-92VXBUAPyjM4t9w/edit?usp=sharing"
          className='nav-link'
          target='_blank'
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavBar;
