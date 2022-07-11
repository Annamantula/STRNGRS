import React from 'react';
import {Link} from "react-router-dom"

  const NavBar = ()  =>{
   return (
    <header>
     <div className='navBar' id ='navBar' >
        < Link to = "./"> Main </Link>
        < Link to = "/Register"> Register </Link>
        < Link to = "/Login"> Login </Link>
        < Link to = "/Profile"> Profile </Link>
        < Link to = "/Posts"> Posts </Link>
     </div>
    </header>
    );
  }
 
export default NavBar 