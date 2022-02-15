import React, { useContext } from "react";
import { UserContext } from "../App";

function Header() {
  const {user,setUser}=useContext(UserContext)
  return (
    <header>
      <nav>{
      user 
      ? <button onClick={()=>setUser('')}>Logout</button> 
      : <button onClick={()=>setUser('todd')}>Login</button> 
      }
      </nav>
    </header>
  );
}

export default Header;
