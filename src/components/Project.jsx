import { Link, useLocation } from 'react-router-dom';


function Project({ title, description, image, deployedLink, gitHubLink }) {
    const currentPage = useLocation().pathname;

    return (<div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-body">
                    <a href={deployedLink} className="card-link">Demo App</a>
                    <a href={gitHubLink} className="card-link">GitHub Repo</a>
                </div>
            </div>
        </div>
    </div>);

}







export default Project;