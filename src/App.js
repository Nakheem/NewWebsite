import "./styles.css";

import Header from "./Component/Header";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Contact from "./Component/Contact";
import Resume from "./Component/Resume";
import Skills from "./Component/Skills";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Header />
        <About />
        <Resume />
        <Contact />
      </div>
    </div>
  );
}
