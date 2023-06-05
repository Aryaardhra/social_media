import React,{useState}from 'react'
import { LoginSocialFacebook } from 'reactjs-social-login';
import { FacebookLoginButton } from 'react-social-login-buttons';

export default function Facebook() {

const [profile, setProfile] = useState(null);

  return (
    <>
    <LoginSocialFacebook
     appId='1262911381284349'
     onResolve={(response) => {
     console.log(response);
     setProfile(response.data);
    }}
    onReject={(error)=>{
    console.log(error);
    }}
   >
   <FacebookLoginButton/>
   </LoginSocialFacebook>

   {profile? <span>{profile.name}</span> :" "}
    </>
  )
}
