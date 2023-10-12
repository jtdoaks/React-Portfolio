import { Link, useLocation } from 'react-router-dom';
import './project.css'

function Project({ title, description, image, deployedLink, gitHubLink }) {
    const currentPage = useLocation().pathname;

    return (
    <div className="project-cards col-md-3 mb-4 mb-3" >
        <div className="row ">

            <div className="img-div ">
                <img src={image} className="project-img rounded-start" alt="..." />
            </div>

            <div className="project-body ">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p> 

                <div className="project-links container-fluid">
                    <a href={deployedLink} className="card-link">Demo App</a>
                    <a href={gitHubLink} className="card-link">GitHub Repo</a>
                </div>

            </div>
        </div>
    </div>);

}


export default Project;