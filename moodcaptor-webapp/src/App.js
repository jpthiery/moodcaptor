import logo from './logo.svg';
import './App.css';

import Group from './components/group/Group'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Yeah
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <Group groups={[
            {
              "key": "first",
              "value": "An awersome group"
            }
          ]}/>
      </header>
    </div>
  );
}

export default App;
