import { useState, useEffect } from "react";
import { auth } from "./Firebase";

import AddTasks from "./components/AddTasks"
import LoginPage from "./components/LoginPage";
import './App.css';

function App() {
  const [presentUser, setPresentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setPresentUser({
          uid: user.id,
          email: user.email
        })
      } else {
        setPresentUser(null);
      }
    })
  }, [])


  return (
    <div className="App">
      {presentUser ? <AddTasks /> : <LoginPage />}
    </div>
  );
}

export default App;
