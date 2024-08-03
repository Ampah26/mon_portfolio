import React from 'react';
import './App.css';
import Login from './composants/Login';
import Register from './composants/Register';
import Dashboard from './composants/Admin/Dashboard';
import Clients from './composants/Admin/Clients';
import Events from './composants/Admin/Events';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Projects from './composants/Admin/Projects';
import Tasks from './composants/Admin/Tasks';
import Leads from './composants/Admin/Leads';
import Subscription from './composants/Admin/Subscriptions';
import Notes from './composants/Admin/Notes';
import Messages from './composants/Admin/Messages';
import Tickets from './composants/Admin/Tickets';
import Expenses from './composants/Admin/Expenses';
import Subscriptions from './composants/Admin/Subscriptions';

import $ from 'jquery';

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
          <Route path='/admin.dashboard' element={<Dashboard />}/>
          <Route path='/admin.events' element={<Events />}/>
          <Route path="/admin.clients" element={<Clients />} />
          <Route path="/admin.projects" element={<Projects />} />
          <Route path="/admin.tasks" element={<Tasks />} />
          <Route path="/admin.leads" element={<Leads />} />
          <Route path="/admin.subscriptions" element={<Subscriptions />} />
          <Route path="/admin.notes" element={<Notes />} />
          <Route path="/admin.messages" element={<Messages />} />
          <Route path="/admin.tickets" element={<Tickets />} />
          <Route path="/admin.expenses" element={<Expenses />} />

          <Route path="/signup" element={<Register />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
