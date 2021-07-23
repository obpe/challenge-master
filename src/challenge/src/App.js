import React, { useState } from 'react';
import './App.css';
import Users from './components/users/users';
import Buttons from './components/buttons/buttons';
import Age from './components/ages/age';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  const [item, setItem] = useState('');

  return (
    <div className='App'>
      <Users />
      <h3>Age Demographic of Users With ___</h3>
      <Buttons onChange={setItem} />
      <Users item={item} />
    </div>
  )
}

export default App;