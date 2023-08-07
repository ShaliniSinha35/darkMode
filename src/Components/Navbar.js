import { useContext } from 'react';
import React from 'react';
import { UserContext } from '../Contexts/Context';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function Navbar() {
    const {theme,setTheme}=useContext(UserContext)
  return (
    <div className={theme?"dark":"light"} style={{height:"10rem",width:"100vw"}}>
    <div>Navbar</div>
    <button style={{border:"none",background:"inherit"}} onClick={()=>setTheme(!theme)}><LightModeIcon sx={{color:theme?"white":"black"}}></LightModeIcon></button>
  </div>
  )
}

export default Navbar