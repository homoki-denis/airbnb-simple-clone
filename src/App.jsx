import "./App.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Cards2 from "./components/Cards2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="main-section">
        <div className="content-container">
          <h1>Andromeda Team</h1>
          <p>
            One of the best team out there. Hardworking people with a great
            passion for programming.
          </p>
        </div>
      </div>
      <Cards2 />
      <div className="main-section">
        <div className="content-container">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </div>
      </div>
      <Cards />
    </div>
  );
}

export default App;
