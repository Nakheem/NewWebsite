import "./Skills.css";
import Skill from "./Skill.js";

export default function App() {
  return (
    <div className="Resume">
      <h2>
        <ul>
          <Skill Skill="HTML" />
          <Skill Skill="CSS" />
          <Skill Skill="React" />
          <Skill Skill="JavaScript" />
        </ul>
      </h2>
    </div>
  );
}
