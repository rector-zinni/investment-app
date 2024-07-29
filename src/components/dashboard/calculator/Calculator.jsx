import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './calculator.scss';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons/faFileInvoice';

const Calculator = () => {
 const form_body_data=[

    {
        label:'One Time Investment($)',
        placeHolder:'$0.0'
    },
    {
        label:'Investment Period(years)',
        placeHolder:'10 years'
    },
    {
        label:'Expected Annual Returns(%)',
        placeHolder:'50.56%'
    },
    {
        label:'Expected Inflation Rate(%)',
        placeHolder:'10%'
    },
 ]
 const FormBodyData=form_body_data.map((formlabeldata)=>(
    <div className="textfield-wrapper ">
    <div className="text-label">
    <label htmlFor="">{formlabeldata.label}</label>
        <input type="text"id='' placeholder={formlabeldata.placeHolder} />
        
    </div>

    <div className="text-icon">
    <FontAwesomeIcon
    icon={faFileInvoice}
    />
    </div>
</div>
 ))
    return (  
        <div className="calculator ">
            <div className="calculator-dashboard">
                <p className='lato-light'>One Time Investment</p>
                <p className='lato-bold'>$3000</p>
                <p>For 10 years at 10.0% annual return will grow your money to</p>
                <p className='lato-bold'>$30,000</p>
            </div>
            <div className="calculator-form component-shadow">
               {FormBodyData}

            <div className="disclaimer">
                <div className="checkbox-wrapper">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Discalaimer</label>
                </div>

                <div className="disclaimer-content">
                    <p className='lato-regular'><b>Disclaimer:</b>This tools does not make any guarantees or waranties whatsoever, expressed or implied, regarding the completeness, accuracy, adequacy, fullness, reliabilty, functionailty and/or the reliabilty of the information.</p>
                </div>
            </div>
            </div>
        </div>
    );
}
 
export default Calculator;