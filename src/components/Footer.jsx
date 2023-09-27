import { Link, useLocation } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaHeart } from 'react-icons/fa'

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <FaGithubSquare/> <FaLinkedin/> <FaHeart/>
        </div>);

}







export default Footer;