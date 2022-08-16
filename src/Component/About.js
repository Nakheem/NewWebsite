import "./About.css";
import profileImg from "../Images/profile-img.png";

export default function App() {
  return (
    <div className="About">
      <div className="mission--statement">
        <h2>
          " I like to think of Coding kinda of like a super power, with I can
          make anything I want and I hope to help as many people as possible "
        </h2>
      </div>
      <div className="together">
        <img className="profile--img" src={profileImg} alt="profile" />
        <div className="info">
          <h2>
            Hello! My name is Nakheem. I am pursuing a Bachelor of Arts in
            Computer Science with a minor in Psychology, at the University of
            British Columbia.
          </h2>
        </div>
      </div>
    </div>
  );
}
