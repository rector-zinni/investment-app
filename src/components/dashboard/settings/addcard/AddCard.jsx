import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './addCard.scss'
import { useRef, useState } from "react";
import { formatCCinput,formatCVV,formatCcNumber,formatExpiryDate} from "../../../../zinnit/utilities/CC_formater";
var count=0;
const AddCard = () => {
    const ccRef = useRef();
    const [cc, setCc] = useState('');
    const [firstName,setFirstName]=useState('')
    const [secondName,setSecondName]=useState('')
    const [expiryDate,setexpiryDate]=useState('')
    const [cvv,setCvv]=useState('')


    return (
        <div className="add-card">
            <div className="security-settings-header">


                <h1>Add New Card</h1>
                <FontAwesomeIcon icon={faCreditCard} />
            </div>

            <div className="add-card-form-wrapper">
                <div className="add-card-form">
                    <div className="card-textbox">
                        <label htmlFor="">Card Holder name</label>
                        <div className="card-textbox-group">
                        <input type="text"  placeholder="John" value={firstName} onInput={(event) => { 
                            
                           setFirstName(event.target.value)
                        }
                            
                            } />
                            <input type="text"  placeholder="Doe" value={secondName} onInput={(event) => { 
                            
                           setSecondName(event.target.value)
                        }
                            
                            } />
                        </div>
                        
                    </div>


                    <div className="card-textbox">
                        <label htmlFor="">Card Number</label>
                        <input type="text" maxLength={19} placeholder="0000 0000 0000 0000" value={cc} onChange={(event) => { 
                            
                           setCc(formatCCinput(event))
                           
                        }
                            
                            } />
                    </div>


                    <div className="card-textbox">
                        <label htmlFor="">Card Holder name</label>
                        <div className="card-textbox-group">
                        <input maxLength='5' className="expiry-date" type="text"  placeholder="19/24" value={expiryDate} onInput={(event) => { 
                            
                           setexpiryDate(formatExpiryDate(event))
                          
                        }
                            
                            } />
                            <input maxLength={3} type="text" className="cvv"  placeholder="752" value={cvv} onInput={(event) => { 
                            
                           setCvv(formatCVV(event))
                        }
                            
                            } />
                        </div>
                        
                    </div>

                    <div className="set-default">
                        <label htmlFor="card-checkbox" className="default-checkbox">
                            <input id="card-checkbox" type="checkbox" name=""  />
                        </label>

                        <div className="default-checkbox-label">
                            <p className="lato-bold">Set as Default</p>
                            <span>Set card as default means of transaction for deposit</span>
                        </div>

                        
                    </div>
                    <div className="add-card-button-wrapper">
                            <button>Cancel</button>
                            <button>Add Card</button>
                        </div>
                </div>
            </div>

        </div>
    );
}

export default AddCard;