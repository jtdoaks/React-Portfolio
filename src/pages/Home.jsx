import coverPhoto from "../assets/cover-photo.png"
import './home.css'

export default function About() {
  return (
    <div className="home-root">
      
        <div className="home-body">
          <h5 className="home-title">About Me</h5>
          <p className="about-text">This is about John </p>
        </div>

        <img className="home-img" src={coverPhoto} alt="Card image cap"></img>
     
    </div>
  );
}
