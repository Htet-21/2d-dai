import './App.css';
import Home from './Home';
import index from './index';
import Register from './Register';
import Otp from './Otp';
import { Routes, Route } from "react-router-dom";
import Reginfo from './Reginfo';
import Welcome from './Welcome';
import Password from './password';

function App() {
  return (
    <div className="App">
          <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="register" element={<Register />} />
        <Route path='registerinfo' element={<Reginfo />} />
        <Route path='otp' element={<Otp />} />
        <Route path='password' element={<Password />} />
      </Routes>
    </div>
     
  );
}

export default App;
