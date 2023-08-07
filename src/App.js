import logo from './logo.svg';
import './App.css';
import {  useState } from 'react';
import { UserContext } from './Contexts/Context';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
function App() {
  const [theme,setTheme]=useState(false)
  return (
    <div className="App">
    <UserContext.Provider value={{theme,setTheme}}>
      <Navbar></Navbar>
    <Home></Home>

    </UserContext.Provider>
      
  
    </div>
  );
}

export default App;
