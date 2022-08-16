import "./Contact.css";

export default function App() {
  return (
    <div className="Contact">
      <form>
        <label>
          <input type="text" name="name" placeholder="name" />
        </label>
        <label>
          <input type="text" name="email" placeholder="Email" />
        </label>
        <label>
          <input type="text" name="message" placeholder="Message" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
