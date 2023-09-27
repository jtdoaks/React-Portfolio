import { Link, useLocation } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaHeart } from 'react-icons/fa'

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <a href = "https://github.com/jtdoaks"  target='_blank'><FaGithubSquare/></a> 
            <a href = "www.linkedin.com/in/john-doaks-86028b267"  target='_blank'><FaLinkedin/></a> 
            <a href = "https://github.com/jtdoaks"  target='_blank'><FaHeart/></a>
        </div>);

}







export default Footer;