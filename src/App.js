import "./App.css";
import Search from "./Search.js";

function App() {
  return (
    <div className="app">
      <Search defaultCity="vienna" />
      <small>
        <a
          href="https://github.com/eri-she/react-appForecast"
          className="linkGit"
        >
          Open-source code{" "}
        </a>
        <span className="name">by Ericka Angeles G.</span>
      </small>
    </div>
  );
}

export default App;
