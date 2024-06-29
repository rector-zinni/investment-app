import '../../stylesheets/investmenttypewidget.scss'
import img from '../../image/in-signin-image.jpg'
const InvestmentTypeWidget = () => {
    return (
        <div className="investment-type-widget component-shadow-2">
            <div className="invest-type-widget-header lato-bold">
                <p>Investments</p>
            </div>
            <div className="invest-type-widget-content">
                <div className="investment-type-list">
                    <img src={img} alt="" srcset="" />
                    <div>
                        <p>Housing</p>
                        <p className='lato-black'>$5,690.09</p>
                    </div>
                </div>


                <div className="investment-type-list">
                    <img src={img} alt="" srcset="" />
                    <div>
                        <p>Housing</p>
                        <p className='lato-black'>$5,690.09</p>
                    </div>
                </div>


                <div className="investment-type-list">
                    <img src={img} alt="" srcset="" />
                    <div>
                        <p>Housing</p>
                        <p className='lato-black'>$5,690.09</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default InvestmentTypeWidget;