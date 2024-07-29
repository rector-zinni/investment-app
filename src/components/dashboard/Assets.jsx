import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import '../../stylesheets/assets.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Assets =  ({amount,assetType,incrament}) => {
    return ( 
        <div className="assets component-shadow-2">
<div className="amt">
    <span>{assetType}</span>
    <FontAwesomeIcon icon={faFileInvoiceDollar}/>
</div>

<div className="invest-amt">
    <p className='lato-black'>{amount}</p>
    <span>{incrament} <i>today</i></span> 
</div>
        </div>
     ); 
}
 
export default Assets;