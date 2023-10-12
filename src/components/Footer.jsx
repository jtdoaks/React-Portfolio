import { Link, useLocation } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaHeart } from 'react-icons/fa'

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <div className="footer-icons">
            <a className="footerLinks" href = "https://github.com/jtdoaks"  target='_blank'><FaGithubSquare/></a> 
            <a className="footerLinks" href = "https://linkedin.com/in/john-doaks-86028b267"  target='_blank'><FaLinkedin/></a> 
            <a className="footerLinks" href = "https://stuffonmycat.com/"  target='_blank'><FaHeart/></a>
        </div>);

}



export default Footer;