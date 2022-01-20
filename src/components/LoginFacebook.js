import FacebookLogin from 'react-facebook-login';
import React from 'react';

const loginFacebook = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

const logoutFacebook = () => {
  window.FB.logout((res) =>{console.log(res)})
  alert('logout Facebook')
}

  return (
    <div>
      <FacebookLogin
        appId="779449233448114"
        autoLoad={true}
        fields="name,email,picture"
        // onClick={<div>clickja</div>}
        // scope="public_profile,user_friends"
        callback={responseFacebook}
        
      />
      <div onClick={logoutFacebook}>Facebook Logout</div>
    </div>
  );
};

export default loginFacebook