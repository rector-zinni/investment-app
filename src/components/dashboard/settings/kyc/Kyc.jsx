import { faCheckCircle, faLock, faUpload } from '@fortawesome/free-solid-svg-icons';
import './kyc.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Kyc = () => {
    return ( 
        <div className="kyc">
             <div className="security-settings-header">
              
               
              <h1>KYC(verify your identity*)</h1>
              <FontAwesomeIcon icon={faCheckCircle}/>
            </div>
            <div className="kyc-desc-header lato-bold">
                <h2>Setupping</h2>
            </div>

            <div className="kyc-desc-paragraph lato-light">
                <p>To serve you better we ask that you provide original identifying 
                    documenta. This will secure your account in cases of account recovery.
                    It also helps to ensure that the gift or actual rewards you recieve are sent to the correct location.
                    <br />
                    <br />
                    An acceptable proof or identification includes a photo of your Govt,
                    approved ID card, driver's license and passport. we will reach out to you via email once this process has been completed.               </p>
            </div>

            <div className="secure-encrypt">
                <button><FontAwesomeIcon icon={faLock}/><span>All data is safely stored and encrypted</span></button>
            </div>

            <div className="kyc-tab-wrapper">
                <div className="kyc-list">
                    <ul>
                        {[{
                            tab:"ID card"
                        },
                        {
                            tab:"Driver's License"
                        },
                        {
                            tab:"Passport"
                        }
                        
                        ].map((list)=>(
                            <li key={list.tab}>{list.tab}</li>
                        ))}
                    </ul>
                </div>


                <div className="kyc-document">
                    <div className="kyc-desc-title">
                        <p>Take a photo of your ID card</p>
                    </div>


                    <div className="kyc-photo">
                       <KycPhoto/>
                       <KycPhoto/>
                    </div>


                    <div className="kyc-submit-btn">
                        <button>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}


const KycPhoto = () => {
    return ( 
        <div className="kyc-side">
                   <p className="side-title">
                    front side
                    </p> 

                    <div className="side-icon">
                        <span className='component-shadow-2'>
                            <FontAwesomeIcon icon={faUpload}/>
                        </span>
                        </div>    

                        <div>
                            <p>Drag file here or Upload</p>
                            </div> 

                            <div className="accepted-image">
                                <span>PNG</span>
                                <span>JPG</span>
                                <span>PDF</span>
                                </div>   
        </div>
     );
}
 

 
export default Kyc;