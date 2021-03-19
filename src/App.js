import './App.css';
import { Routes } from './core/Routes/Routes';
import {
  BrowserRouter as Router
  
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <Routes></Routes>
    </Router>
    </div>
  );
}

export default App;
