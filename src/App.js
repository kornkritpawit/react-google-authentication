import React from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';
import LoginHooks from './components/LoginHooks';
import LogoutHooks from './components/LogoutHooks';
import LoginFacebook from './components/LoginFacebook';
function App() {
  return (
    <div className="App">
      <img alt='kornpic' src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4851491731561374&height=50&width=50&ext=1645071402&hash=AeTN55qh3r5LXInAlPs"/>
      <img alt='kornpic' src="https://lh3.googleusercontent.com/a-/AOh14GiYBIq6ngazYth6S1GNM_OGn50QMRmKipJl8rRK=s96-c"/>
      <img alt='robert' src="https://lh3.googleusercontent.com/a-/AOh14Gis87DqbZC6u62N6OGc2_LQgsspl-hsxBhg5g9P=s96-c"/>
      <h2>The Components way</h2>
      <Login />
      <br />
      <Logout />
      <h2>The Hooks way</h2>
      <LoginHooks />
      <LogoutHooks />
      <br />
      If it does helped you feel free to star{' '}
      <a href="https://github.com/Sivanesh-S/react-google-authentication">
        Github Repo
      </a>{' '}
      😉
      <LoginFacebook/>
    </div>
  );
}

export default App;
