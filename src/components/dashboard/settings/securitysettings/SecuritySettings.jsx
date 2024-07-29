import { faEye, faKey } from '@fortawesome/free-solid-svg-icons';
import '../securitysettings/securitySettings.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
const SecuritySettings = () => {
    const passText1=useRef(null)
    const passText2=useRef(null)
    const passText3=useRef(null)
    return ( 
        <div className="security-settings">
             <div className="security-settings-header">
              
               
              <h1>Change Password</h1>
              <FontAwesomeIcon icon={faKey}/>
            </div>

            <div className="change-password-form">
                <label htmlFor="">Current Password</label>
                <div className="password-field">

                    <input type="password" />
                    <FontAwesomeIcon icon={faEye} className='password-icon'/>
                </div>


                <label htmlFor="">New Password</label>
                <div className="password-field">

                    <input type="password" />
                    <FontAwesomeIcon icon={faEye} className='password-icon'/>
                </div>



                <label htmlFor="">Confirm Password</label>
                <div className="password-field">

                    <input type="password" />
                    <FontAwesomeIcon icon={faEye} className='password-icon'/>
                </div>


                <div className="change-password-btn lato-bold">
                    <button className='lato-bold' type="button">Change Password</button>
                </div>

            </div>

        </div>
     );
}
 
export default SecuritySettings;