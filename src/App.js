

import { useEffect, useState } from 'react';
import {  onAuthStateChanged } from "firebase/auth";

import Home from './Home';
import Loginpage from './Authentication/Loginpage';
import { auth } from './Authentication/Auth';

function App() {
  
  const [presentuser,setPresentUser] = useState(null)
  useEffect(()=>{auth.onAuthStateChanged( user=>{
    if(user){
    setPresentUser({
      uid:user?.uid,
      email:user?.email
      
    })
  
  }
  else {
    setPresentUser(null);
  }
  })},[])
  return (
    <div>
    {presentuser ? <Home/> : <Loginpage/>}
    </div>
  );
}

export default App;
