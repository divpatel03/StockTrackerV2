import React from 'react';
import Login from './Login'

function App() {
  Login.isLoggedIn == true;

  if(Login.isLoggedIn == false) {
    return(
      <>
        <Login isLoggedIn={false}/>
      </>
    );
  }

  if(Login.isLoggedIn == true) {
    return(
      <>
        <Login isLoggedIn={true} username="test"/>
      </>
    );
  }

}

export default App