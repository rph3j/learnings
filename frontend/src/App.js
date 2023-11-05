import React ,{ useEffect} from 'react';
import StartPage from './components/startPage';
import './App.css';
import SingUp from './components/SingUp';

function App() {

  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      onLogin(loggedInUser);
    }
  }, []);
 

  const onLogin = (user) => {
    setUser(user)
    localStorage.setItem('user', user)
    console.log(user);
  }
  return( user ? <StartPage user={user}/> : <SingUp onLogin={onLogin}/> )
}

export default App;
