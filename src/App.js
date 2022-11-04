import './App.css';
import Home from './Home'
import index from './index'
import Register from './Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </Router>
    </div>
     
  );
}

export default App;
