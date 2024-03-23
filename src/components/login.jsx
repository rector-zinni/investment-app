import '../stylesheets/login.scss'
import loginBg from '../image/in-signin-image.jpg'
import headerLogo from '../image/header-logo-6ohuZh.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faGoogle}  from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

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
              /> 
              <FontAwesomeIcon 
              icon={faLock}
              />
                
        </div>


        {/* forget password */}
        <div className="forget-password">
            <div className="checkbox">
            <input type="checkbox" value={23} />
             <span>Remember me</span>
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
                <button>
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