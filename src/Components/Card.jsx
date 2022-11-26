import { profile, background } from "../assets";

const Card = () => {
  return (
    <div className="card">
      <img src={background} alt="image" className="card-img" />

      <div className="card-contents">
        <div className="profile">
          <div className="profile-pic">
            <img src={profile} alt="profile pic" />
          </div>
          <div className="profile-content">
            <h2>Name</h2>
            <span>November 26, 2022</span>
          </div>
        </div>
        <div className="card-texts">
          <a href="#">Title</a>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt harum
            adipisci odit porro nemo cupiditate tempora? Iste tempore maiores
            dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus iste cupiditate voluptate dolore enim sapiente
          </p>
        </div>
        <div className="card-footer">
          <div className="tag-container">
            <span>JavaScript</span>
            <span>PHP</span>
            <span>NodeJS</span>
          </div>

          <div className="counts-container">
            <span>12 Likes</span>
            <span>14 Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
