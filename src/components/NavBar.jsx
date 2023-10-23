import { Link, useLocation } from 'react-router-dom';
import Resume from "../assets/Resume.pdf"
import './navBar.css'

function NavBar() {
  const currentPage = useLocation().pathname;

  return (
    <div className = "navBar">
<div className="heading">

      <h1 className="title">John Doaks</h1>
      <h5 className="titlePlus">Full Stack Developer</h5>
</div>

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
          <a href={Resume}
            className='nav-link'
            target='_blank'
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
