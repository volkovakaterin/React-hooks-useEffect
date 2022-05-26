import Details from './components/Details';
import List from './components/List';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState({id: '', name: ''});
  const [state, setState] = useState(false);

  const openDetails = (id, name) => {
    if(id !== user.id) {
      const newUser = {'id': id,
      'name': name}
      setUser(newUser);
      setState(true);
    }
  }

  return (
    <div className='main'>
    <List openDetails = {openDetails}/>
    {state ? <Details user = {user}/> : false}
    </div>
  );
}

export default App;
