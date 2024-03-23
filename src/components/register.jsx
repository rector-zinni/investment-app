import '../stylesheets/register.scss'
import loginBg from '../image/in-signin-image.jpg'
import headerLogo from '../image/header-logo-6ohuZh.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLock, faMailReplyAll, faMobilePhone, faPerson, faUser } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faGoogle}  from '@fortawesome/free-brands-svg-icons'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom' 


const Login = () => {

   
const inputRef ={
    firstname:useRef(),
    secondName:useRef(),
    username:useRef(),
    email:useRef(),
    telephone:useRef(),
    password:useRef(),
    confirmpassword:useRef(),



}
const  [firstname,setFirstname]=useState('');
const  [secondname,setSecondname]=useState('');
const  [username,setUsername]=useState('');
const  [email,setEmail]=useState('');
const  [password,setPassword]=useState('');
const  [confirm_Password,setConfirm_Password]=useState('');
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
           Sign Up with Liquid Invest
            </p>
        </div>
        {/* end ogf header title */}

        {/* formm */}
        <form>


        <div 
        className="textfield"
        ref={inputRef.firstname}

        >
        
           <input 
           type="text"
            name="firstname" 
            id="firstame"
             placeholder='Firstname'  
             onFocus={()=>{
                getfocus(inputRef.firstname)
             }}
             onBlur={()=>{
                Blurr(inputRef.firstname)
             }}
             value={firstname}
             onChange={(e)=>{
                setFirstname(e.target.value)
             }}
              /> 
              <FontAwesomeIcon 
              icon={faPerson}
              />
                
        </div>






        <div 
        className="textfield"
        ref={inputRef.secondName}
        >
        
           <input 
           type="text"
            name="lastname" 
            id="lastname"
             placeholder='LastName'  
             onFocus={()=>{
                getfocus(inputRef.secondName)
             }}
             onBlur={()=>{
                Blurr(inputRef.secondName)
             }}
              /> 
              <FontAwesomeIcon 
              icon={faPerson}
              />
                
        </div>







        <div 
        className="textfield"
        ref={inputRef.username}
        >
        
           <input 
           type="text"
            name="username" 
            id="textfield"
             placeholder='Username'  
             onFocus={()=>{
                getfocus(inputRef.username)
             }}
             onBlur={()=>{
                Blurr(inputRef.username)
             }}
              /> 
              <FontAwesomeIcon 
              icon={faUser}
              />
                
        </div>








       









        <div 
        className="textfield"
        ref={inputRef.email}
        >
        
           <input 
           type="email"
            name="email" 
            id="email"
             placeholder='Email'  
             onFocus={()=>{
                getfocus(inputRef.email)
             }}
             onBlur={()=>{
                Blurr(inputRef.email)
             }}
              /> 
              <FontAwesomeIcon 
              icon={faMailReplyAll}
              />
                
        </div>







        <div 
        className="textfield"
        ref={inputRef.telephone}
        >
        
           <input 
           type="tel"
            name="telephone" 
            id="telephone"
             placeholder='telephone'  
             onFocus={()=>{
                getfocus(inputRef.telephone)
             }}
             onBlur={()=>{
                Blurr(inputRef.telephone)
             }}
              /> 
              <FontAwesomeIcon 
              icon={faMobilePhone}
              />
                
        </div>






        <div 
        className="textfield"
        ref={inputRef.password}
        >
        
           <input 
           type="password"
            name="password" 
            id="password"
             placeholder='Password'  
             onFocus={()=>{
                getfocus(inputRef.password)
             }}
             onBlur={()=>{
                Blurr(inputRef.password)
             }}
              /> 
              <FontAwesomeIcon 
              icon={faLock}
              />
                
        </div>



        <div 
        className="textfield"
        ref={inputRef.confirmpassword}
        >
        
           <input 
           type="confirmPassword"
            name="confirmPassword" 
            id="cpassword"
             placeholder='Confirm Password'  
             onFocus={()=>{
                getfocus(inputRef.confirmpassword)
             }}
             onBlur={()=>{
                Blurr(inputRef.confirmpassword)
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
                Create Account
            </button>
        </div>

        <div className="alt-signin">
            <hr />
            <span>Or Sign Up with</span>
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
                <span>If you already have an account</span>
                <Link to='/' className='forgot-pass-link'>
              Login
                </Link>
            </div>
        </form>
        {/* emd of form */}
            </div>

           
        </div>
    );
}

export default Login;