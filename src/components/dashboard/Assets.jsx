import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/assets.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Assets =  () => {
    return ( 
        <div className="assets component-shadow-2">
<div className="amt">
    <span>Investment Assets</span>
    <FontAwesomeIcon icon={faFileInvoiceDollar}/>
</div>

<div className="invest-amt">
    <p className='lato-black'>$50,673</p>
    <span>+1.65% <i>today</i></span> 
</div>
        </div>
     ); 
}
 
export default Assets;