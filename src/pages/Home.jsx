import coverPhoto from "../assets/cover-photo.png"
import './home.css'

export default function About() {
  return (
    <div className="home-root">

      <div className="home-body">
        <h5 className="home-title">About Me</h5>
        <p className="about-text">This is about John. something about how i love plants and also coding. idk dichotomy. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptate cum provident, libero voluptatibus nesciunt repellendus fugit voluptas, beatae id, ad quasi expedita omnis totam obcaecati distinctio. Mollitia, ducimus incidunt.</p>
      </div>

      <div className="homeImgDiv ">
        <div className="image-container">

          <img className="home-img" src={coverPhoto} alt="Card image cap"></img>
          <div className="bottomRight">Bottom Right</div>
        </div>
      </div>

    </div>
  );
}
