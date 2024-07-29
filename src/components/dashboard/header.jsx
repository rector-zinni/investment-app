import {  faBell, faPerson, faSignOutAlt, faSun, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/header.scss'
import logo from './../../image/header-logo-6ohuZh.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicroblog } from '@fortawesome/free-brands-svg-icons';
import { useContext,useState } from 'react';
import { ThemeContext } from '../..';

const Header = ({changeTheme}) => {
    return ( 
        <div className="header">
              <div className="header-img">
              <img src={logo} alt="" srcset="" />
              </div>
        
        <div className="notifications">
            <ul className="notification-list">


                <li className='lato-bold'
                onClick={changeTheme}
                >
                    <FontAwesomeIcon className='notification-icon' icon={faSun}/>
                    
                </li>

                <li className='lato-bold'>
                    <FontAwesomeIcon className='notification-icon' icon={faBell}/>
                    <span>1</span>
                </li>



                <li className='lato-bold'>
                    <FontAwesomeIcon className='notification-icon' icon={faUser}/>
                    <span>1</span>
                </li>

                <li className='lato-bold'>
                    <FontAwesomeIcon className='notification-icon' icon={faSignOutAlt}/>
                    
                </li>
            </ul>
            
            
        </div>
        </div>
     );
}
 
export default Header;
