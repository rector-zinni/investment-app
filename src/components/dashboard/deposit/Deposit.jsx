import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './deposit.scss'
import { faFunnelDollar } from '@fortawesome/free-solid-svg-icons';
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet';
import depoImg from '../../../image/ethmine.webp'

const Deposit = () => {
    return (
        <div className="deposit ">
            <div className="deposit-header">
              <div>  
                <FontAwesomeIcon icon={faWallet}/>
              <h1>Deposit</h1></div>
            </div>


            <div className="referal-bonus component-shadow-2">
                <h1 className='lato-bold'>Free Deposit Bonus</h1>
                <span className='lato-light'>Enter a Referral code and we'll add a <b>2% bonus</b> on every single deposit you make </span>
                <div className="referal-bonus-textbox component-shadow">
                    <input type="text" placeholder='referral code' className='lato-bold'/>
                    <button type="button" className='lato-bold'>Load Bonus</button>
                </div>
            </div>



            <div className="deposit-list-wrapper">
              <div className="deposit-list-header">
              <p className='dl-header lato-bold'>Choose a payment method</p>
              <p className='dl-desc lato-light'>
                pick a payment method below to get started.
              </p>
              </div>

              <div className="deposit-list">
               
            <DepositList img={depoImg} depositMode='btc'/>
              
              </div>
              
            </div>
        </div>
      );
}


export const DepositList = ({depositMode,img}) => {
  return ( 
    <div className="deposit-option">
    <img src={img} alt="" />
    <p className='lato-bold'>{depositMode}</p>
  </div>
   );
}
 
 
export default Deposit;