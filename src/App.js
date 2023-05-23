import logo from './logo.png';
import './App.css';
import ControlledTabs from "./tab";


function App() {
  return (
    <div className="App">
      <div className="fluid-container">
        <div>
          <header>
            <div className="row">
              <div className="col-sm">
                <h1 className="App-head">Rudraksha </h1>
              </div>
              <div className="col-sm">
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col-sm">
                <h1 className="App-head"> Organics</h1>
              </div>
              <div className="App-tab">
                <ControlledTabs />
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default App;
