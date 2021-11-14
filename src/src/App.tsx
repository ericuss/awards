import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ReactComponent as Logo } from './assets/images/logo.svg';
import { Awards } from './app/awards/Awards';
import './App.css';
import "./index.css"

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Logo fill="white"></Logo>
        </header>
        <div className="App-content">
          <Route path="/" exact  component={Awards} />
        </div>
      </Router>

    </div>
  );
}

export default App;
