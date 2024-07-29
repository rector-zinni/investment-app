import '../profile/profile.scss'
import ing from '../../../image/in-signin-image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faGlobe, faMailBulk, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return ( 

        <div className="profile">
            <div className="deposit-header">
              <div>  
                <FontAwesomeIcon icon={faUser}/>
              <h1>Profile</h1></div>
            </div>

            <div className="profile2 lato-reguular">


<div className="profile-grid-1 comopnent-shadow-2">
    <div className="bio-section">
        <div className="bio-image">
            <img className='component-shadow' src={ing} alt="" srcset="" />
        </div>

        <p className='lato-black'>John SNiff</p>
        <p>Bay area, San Francisco, CA</p>

        <div className="bio-button">
            <button>Edit <FontAwesomeIcon icon={faCogs}/></button>
            <button>Fund <FontAwesomeIcon icon={faMoneyBill}/></button>
        </div>
    </div>
    <div className="contact-section">
        
        <div className="contact-section-row">
            <div className="contact-section-row-title">
                <FontAwesomeIcon icon={faMailBulk}/>
            <span>email</span>
            </div>
            <div className="contact-sction-row-content">
                <span>laifogery@gmail.com</span>
            </div>
        </div>


        <div className="contact-section-row">
            <div className="contact-section-row-title">
                <FontAwesomeIcon icon={faMailBulk}/>
            <span>email</span>
            </div>
            <div className="contact-sction-row-content">
                <span>laifogery@gmail.com</span>
            </div>
        </div>


        <div className="contact-section-row">
            <div className="contact-section-row-title">
                <FontAwesomeIcon icon={faMailBulk}/>
            <span>email</span>
            </div>
            <div className="contact-sction-row-content">
                <span>laifogery@gmail.com</span>
            </div>
        </div>
    </div>
</div>
<div className="profile-grid-2">
    <div className="profile-form">
        <p>Basic Information</p>
        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>ID</span>
            </div>

            <div className="profile-form-textbox">
            <input disabled className='component-shadow-2' type="text" placeholder='Identification number' />
        </div>
        </div>



        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>First Name</span>
            </div>

            <div className="profile-form-textbox">
            <input className='component-shadow-2' type="text" placeholder='first name' />
        </div>
        </div>


        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Second Name</span>
            </div>

            <div className="profile-form-textbox">
            <input className='component-shadow-2' type="text" placeholder='second name' />
        </div>
        </div>



        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Gender</span>
            </div>

            <div className="profile-form-textbox">
            <select name="" id="">
                <option value="error">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
        </div>
        </div>


        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Nationality</span>
            </div>

            <div className="profile-form-textbox">
           <select name="" id="">
            <option value="">United Staes Of America</option>
           </select>
        </div>
        </div>


        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Date of Birth</span>
            </div>

            <div className="profile-form-textbox">
            <input type="date" className='component-shadow-2'  placeholder='Email' />
        </div>
        </div>

        <p>Contact Information</p>

        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Email</span>
            </div>

            <div className="profile-form-textbox">
            <input className='component-shadow-2' type="text" placeholder='Email' />
        </div>
        </div>



        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Phone Number</span>
            </div>

            <div className="profile-form-textbox">
            <input className='component-shadow-2' type="text" placeholder='Mobile Number' />
        </div>
        </div>



        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Address</span>
            </div>

            <div className="profile-form-textbox">
            <input className='component-shadow-2' type="text" placeholder='22 paekr lane, Santa Clara' />
        </div>
        </div>


        <p>Employment and Finacial Information</p>

        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Employment Status</span>
            </div>

            <div className="profile-form-textbox">
           <select name="" id="">
            <option value="null">Employment status</option>
       <option value="employed">Employed status</option>
       <option value="self-employed">Self-Employed</option>
        <option value="unemployed">UnEmployed</option>
           </select>
        </div>
        </div>



        
        <div className="profile-form-flex">
            <div className="profile-form-title">
                <span>Occupation</span>
            </div>

            <div className="profile-form-textbox">
            <input className='component-shadow-2' type="text" placeholder='trader,banker,lawyer...' />
        </div>
        </div>
       


        
    </div>
</div>
</div>
        </div>
       
     );
}
 
export default Profile;