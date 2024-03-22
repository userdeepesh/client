import React, {useContext} from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

function Home() {
  const {user, setUser} = useContext(UserContext)
  const setAsJohn = () => {
    const john = {
      name:'John',
      email:'jhon@gmail.com',
      password:'123',
      id:'123'
    }
    setUser(john);
  }
  const setAsTom = () => {
    const tom = {
      name:'Tom',
      email:'tom@gmail.com',
      password:'456',
      id:'456'
    }
    setUser(tom);
  }
  return (
    <div>
        <h1> Home {JSON.stringify(user)} </h1>
        <button onClick={setAsJohn}>set as John</button>
        <button onClick={setAsTom}>set as Tom</button>
        <Link to={'/chat'}>
        <button>Go to Chat</button>
        </Link>
        
    </div>
  )
}

export default Home;