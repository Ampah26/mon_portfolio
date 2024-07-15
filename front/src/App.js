import React from 'react';
import './App.css';
import Login from './composants/Login';
import Register from './composants/Register';
import Admin from './composants/Admin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 /* const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data);
      }
    );
  }, []);
*/
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/admin' element={<Admin />}/>
          <Route path="/signup" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
