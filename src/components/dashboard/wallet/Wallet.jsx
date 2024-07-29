import '../wallet/wallet.scss'
import Assets from '../Assets';
import { DepositList } from '../deposit/Deposit'
import depoImg from '../../../image/ethmine.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCog, faCopy, faDollar, faPaste, faUpload } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../../index';
import { useContext, useState } from 'react';
import { getCardImage } from '../../../zinnit/utilities/CC_formater';

const Wallet = () => {

console.log(getCardImage('visa'));
  return (
    <div className="wallet">
      <div className="invesment-panel">
        <Assets
          amount="$40,000"
          assetType='Available funds for withdraw'
          incrament='+0.0%'
        />

      </div>

      <div className="withdraw-text-wrp">
        <div className="text-wrp">
          <div>


            <FontAwesomeIcon
              className='withdraw-textbox-icon'
              icon={faDollar}
            />
            <input type="text" id='withdraw-textbox' placeholder='5,000' />
          </div>
        </div>

        <label htmlFor='withdraw-textbox'>Enter Amount <span>to withdraw</span> less than balance</label>
        <div className="valid-funds">
          <FontAwesomeIcon
            className='valid-funds-icon'
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className='valid-funds-icon'
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className='valid-funds-icon'
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className='valid-funds-icon'
            icon={faCheckCircle}
          />
          <FontAwesomeIcon
            className='valid-funds-icon'
            icon={faCheckCircle}
          />

        </div>
      </div>


      <div className="withdrawal-mode ">

        <div className="withdrwal-steps">
          <div className="payment-type">
            <img src={depoImg} />
            <p >

              <p className='lato-bold'>
                Zelle
              </p>

              <p>$famil$frei</p>
            </p>
          </div>

          <p className='lato-black'>$5,000</p>
        </div>
        <div className="mode-select">
          <select name="" id="">
            <optgroup label='Digital payment' className='lato-bold digital-payment'>
              <option value="">CashApp</option>
              <option value="">Paypsl</option>
              <option value="">Venmo</option>
              <option value="">Zelle</option>
            </optgroup>

            <optgroup label='Crypto payment' className='lato-bold digital-payment'>
              <option value="">Bitcoin</option>
              <option value="">Ethereum</option>
              <option value="">USDT</option>
              <option value="">Zelle</option>
            </optgroup>
          </select>
        </div>


        <div className="withdraw-address-wrapper">
          <input type="text" />
          <button>Paste <FontAwesomeIcon className='black-icon' icon={faPaste} /></button>
        </div>

        <div className="withdraw-address-wrapper ">
          <label htmlFor="withdraw-proof" className='withdraw-proof-label'>
            <span className='lato-thin'>Upload transaction screenshot here</span>
            <FontAwesomeIcon icon={faUpload} />
            <input type='file' id='withdraw-proof' multiple/>
          </label>

        </div>
        <div className="withdraw-address-wrapper ">
          <button>Proccess Withdrawal <FontAwesomeIcon icon={faCog} /></button>
        </div>
      </div>
    </div>
  );
}

export default Wallet;
