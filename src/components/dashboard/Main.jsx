import '../dashboard/../../stylesheets/main.scss'
import Assets from './Assets';
import InvestmentTypeWidget from './InvestmentTypeWidget';
const main = () => {
    return ( 
       <div className="main-component">
        <div className="welcome-msg">
          
         <p className='lato-bold'>Welcome Back, <span className='lato-bold-italic'>John doe</span></p>
         <span className='lato-regular'>
          Happy to see you again, invest your asset today, good luck!!!
         </span>
        </div>

        <div className="invesment-panel">
          <Assets/>
          <Assets/>
          <Assets/>

          
          </div>  
          <div className="widgets">
            <InvestmentTypeWidget/>
            </div>    
       </div>
     );
}
 
export default main;