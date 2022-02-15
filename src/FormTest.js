import { useContext } from "react";
import { UserContext } from "./App";

function FormTest() {
  const{user,setUser}=useContext(UserContext)
  const handleFirstName = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!" + user);
  };
  return (
    <>
      <h1>Hello {user}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name: &nbsp;
          <input type="text" value={user} onChange={handleFirstName} />
        </label>
      </form>
    </>
  );
}

export default FormTest;
