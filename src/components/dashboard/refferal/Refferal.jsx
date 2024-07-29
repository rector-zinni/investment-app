import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../refferal/refferal.scss';
import { faFileInvoice, faMessage } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons/faMoneyCheckDollar';
import { faWindowMaximize } from '@fortawesome/free-regular-svg-icons/faWindowMaximize';

const Referral = () => {


    const r_stepData=[
        {
            title:'Send Invitation',
            desc:'Send your referral link to friends and tell them how profitable Liquid invest is',
            icon:faMessage
        },
        {
            title:'Registration',
            desc:'Let them register to our service using your referral link',
            icon:faWindowMaximize
        },
        {
            title:'Invest',
            desc:'Let them Invest and profit from our service',
            icon:faMoneyCheckDollar
        },
    ]
    return ( 
        <div className="referral">
            <div className="referral-header ">
                <h1 className='lato-bold'>Referrals</h1>
                <p className='lato-light'>Invite your friend's to Liiquid Invest, if they signup and invest, you will stand a chance to get 20% of their first deposit</p>
            </div>


            <div className="referral-steps">

                {
                    r_stepData.map((data)=>(
                        <ReferralStep title={data.title} desc={data.desc} icon={data.icon} />
                    ))
                }
                
            </div>

            <div className="share-referral-link">
            <h1>Share the referral link</h1>
            <p>you can share your referral link by copying and sending it or sharing it on your social medial.</p>
            <div className="referal-link-textbox-wrapper">
                <div>
                <div className="referral-link-textbox">
            <input type="text" />
            <button>
            Copy link
            </button>
                </div>
                </div>
               

                <div className="social-media-list">
                <ul>
                    <li>
                        <FontAwesomeIcon className='social-media-icon1' icon={faFacebook}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='social-media-icon2' icon={faTwitter}/>
                    </li>
                    <li>
                        <FontAwesomeIcon className='social-media-icon3' icon={faInstagram}/>
                    </li>
                </ul>
                </div>
            </div>
                </div>
        </div>
     );
}
 
export default Referral;

const ReferralStep=({title,desc,icon})=>{

    return(
        <div className="referral-step">
            <div className="referral-step-icon">
                <FontAwesomeIcon icon={icon}/>
            </div>

            <p className='referral-step-title lato-bold'>{title}</p>
            <p>{desc}</p>
        </div>
    )
}