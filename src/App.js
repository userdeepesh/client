// switch = routes

import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { UserContext } from './UserContext';
import chat from './components/chat/Chat';
import Home from './components/home/Home';
function App() {
  const [user, setUser] = useState(null)
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{user,setUser}}>
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route exact path='/chat' Component={chat} />
          </Routes>
        </UserContext.Provider>
     </div>

    </Router>
    
  );
}

export default App;
