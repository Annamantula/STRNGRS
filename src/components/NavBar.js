import React from 'react';
import {Link} from "react-router-dom"

  const NavBar = ()  =>{
    return (
    <div className='navBar'>
        < Link to = "/Home"> Home </Link>
        < Link to = "/Register"> Register </Link>
        < Link to = "/Login"> Login </Link>
        < Link to = "/Profile"> Profile </Link>
        < Link to = "/Posts"> Posts </Link>
    </div>
    );
  }
 
export default NavBar;