import { profile, background } from "../assets";

const Card = () => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={background} alt="image" />
      </div>
      <div className="card-contents">
        <div className="profile-pic">{/* <img src={profile} alt="" /> */}</div>
        <div className="card-texts">
          <h1>title</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt harum
            adipisci odit porro nemo cupiditate tempora? Iste tempore maiores
            dolorem!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
