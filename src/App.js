import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Navbar from "./components/navbar/Navbar";
import Nav from "./components/nav/Nav";
import video from "./images/v-bg.mp4";
import TextBox from "./components/textbox/Textbox";

function App() {
  return (
    <>
      <div>
        <video id="myVideo" autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="content">
          <Navbar />
          <Nav />
        </div>
      </div>
      <div className="content-2">
        <TextBox />
      </div>
    </>
  );
}

export default App;
