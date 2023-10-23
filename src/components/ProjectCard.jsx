import { Link, useLocation } from 'react-router-dom';
import './projectCard.css'

function Project({ title, description, image, deployedLink, gitHubLink }) {
    const currentPage = useLocation().pathname;

    return (
        
            <div className="project-cards ">

          

                    <div className="img-div ">
                        <img src={image} className="project-img  rounded-start" alt="..." />
                        <div className="overlay">
                        <p className="card-text">{description}</p>
                        </div>
                    </div>

                    <div className="project-body ">
                        <h5 className="card-title">{title}</h5>
                        

                        <div className="project-links container-fluid">
                            <a href={deployedLink} className="card-link">Demo App</a>
                            <a href={gitHubLink} className="card-link">GitHub Repo</a>
                        </div>

                    </div>
                
           
        </div>);

}


export default Project;