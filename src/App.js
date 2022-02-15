import { useState, createContext } from "react";
import "./App.css";
import FormTest from "./FormTest";
import Header from "./component/Header";
import Login from "./scenes/login";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState();
  return (
     <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <FormTest />
      <br />
      {!user && <Login />}
    </UserContext.Provider>
  );
}

export default App;
