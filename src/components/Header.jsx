import { Link, useLocation } from 'react-router-dom';


function Header() {
    const currentPage = useLocation().pathname;

return ( <h1>John Doaks</h1>);

}







export default Header;