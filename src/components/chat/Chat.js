
import React, {useContext} from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';


function chat() {
  const {user, setUser} = useContext(UserContext)
  return (
    <div>
        <h1> Home {JSON.stringify(user)} </h1>
        <Link to={'/'}>
        <button>Go to Home</button>
        </Link>
    </div>
  )
}

export default chat;