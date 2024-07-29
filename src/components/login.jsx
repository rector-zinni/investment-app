import '../stylesheets/login.scss'
import loginBg from '../image/in-signin-image.jpg'
import headerLogo from '../image/header-logo-6ohuZh.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faGoogle}  from '@fortawesome/free-brands-svg-icons'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../fire'
import { createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup } from "firebase/auth";


const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://localhost:3000/user',
    // This must be true.
    handleCodeInApp: true,
    iOS: {
      bundleId: 'com.example.ios'
    },
    android: {
      packageName: 'com.example.android',
      installApp: true,
      minimumVersion: '12'
    },
    dynamicLinkDomain: 'example.page.link'
  };
const Login = () => {
    const signInWithGooglePop=()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
       .then((result) => {
         // This gives you a Google Access Token. You can use it to access the Google API.
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
         // The signed-in user info.
         const user = result.user;
         // IdP data available using getAdditionalUserInfo(result)
         // ...
         console.log(credential)
       }).catch((error) => {
         // Handle Errors here.
         const errorCode = error.code;
         const errorMessage = error.message;
         // The email of the user's account used.
         const email = error.customData.email;
         // The AuthCredential type that was used.
         const credential = GoogleAuthProvider.credentialFromError(error);
         console.log(errorMessage)
         // ...
       });
     }

    
    const  [username,setUsername]=useState('');
    const  [password,setPassword]=useState('');
    const textfield1Ref=useRef();
    const textfield2Ref=useRef();
    const getfocus=(ref)=>{
        ref.current.style.outline='1px solid rgb(29, 149, 247)';
        ref.current.style.backgroundColor='#2f3032';
    }
    const Blurr=(ref)=>{
        ref.current.style.outline='0';
        ref.current.style.backgroundColor='#212224';
    }
    return (
        <div className="login">
            <div><img src={loginBg} alt="" /></div>
        {/* header logo */}
            <div className="login-pane">
                <div className="header-logo">
                    <img src={headerLogo} alt="" />
                    </div>
        {/* end of header logo */}
        {/* header title */}
        <div className="header-title">
            <p>
            Log into your account
            </p>
        </div>
        {/* end ogf header title */}

        {/* formm */}
        <form>
        <div 
        className="textfield"
        ref={textfield1Ref}
        >
        
           <input 
           type="text"
            name="username" 
            id="textfield"
             placeholder='Username'  
             onFocus={()=>{
                getfocus(textfield1Ref)
             }}
             onBlur={()=>{
                Blurr(textfield1Ref)
             }}
             value={username}
             onChange={
                (e)=>{
                    setUsername(e.target.value)
                }
             }
              /> 
              <FontAwesomeIcon 
              icon={faUser}
              />
                
        </div>


        <div 
        className="textfield"
        ref={textfield2Ref}
        >
        
           <input 
           type="password"
            name="password" 
            id="password"
             placeholder='Password'  
             onFocus={()=>{
                getfocus(textfield2Ref)
             }}
             onBlur={()=>{
                Blurr(textfield2Ref)
             }}
             value={password}
             onChange={
                (e)=>{
                    setPassword(e.target.value)
                }}

              /> 
              <FontAwesomeIcon 
              icon={faLock}
              />
                
        </div>


        {/* forget password */}
        <div className="forget-password">
            <div className="checkbox">
            <input type="checkbox" id='check' />
             <label  htmlFor='check'>Remember me</label>
            </div>
            <span>

                <Link className='forgot-pass-link'>
                forgot password
                </Link>
                
            </span>
           
        </div>
        {/* end of forget pssword */}
{/* sign in alternative */}
        <div className="sign-in-btn">
            <button>
                Sign In
            </button>
        </div>

        <div className="alt-signin">
            <hr />
            <span>Or Sign in with</span>
            <hr />
        </div>
        {/* end of singn alternatives */}
        <div className="sign-in-alt-btn">
                <button
                onClick={(e)=>{
                    e.preventDefault();
                    signInWithGooglePop();
                }}
                >
                    <FontAwesomeIcon icon={faGoogle}/>
                    <span>Google</span>
                </button>
                <button>
                <FontAwesomeIcon icon={faFacebookF}/>
                    <span>Facebook</span>
                </button>
            </div>
            {/* end of sign in alt button */}
            <div className="register-non-member">
                <span>If you don't have an account</span>
                <Link
                to='create-account'
                className='forgot-pass-link'>
                Register here
                </Link>
            </div>
        </form>
        {/* emd of form */}
            </div>

           
        </div>
    );
}

export default Login;