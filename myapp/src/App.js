import logo from "./logo.svg";
import "./App.css";
import bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import ProfilePhoto from "./compenent/Profile/profilePhoto"
import FullName from "./compenent/Profile/FullName"
import Adresse from "./compenent/Profile/Adresse"
import Navs from "./compenent/Navs/nav"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navs />
        <ProfilePhoto />
        < FullName />
        < Adresse />
      </header>
    </div>
  );
}

export default App;
