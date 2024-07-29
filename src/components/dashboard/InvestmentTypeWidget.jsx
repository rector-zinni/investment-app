import '../../stylesheets/investmenttypewidget.scss'
import img from '../../image/in-signin-image.jpg'
const InvestmentTypeWidget = () => {
    return (
        <div className="investment-type-widget component-shadow-2">
            <div className="invest-type-widget-header lato-bold">
                <p>Investments</p>
            </div>
            <div className="invest-type-widget-content">

                <InvestmentAsset
                    title='gold'
                    amount='$150,000'
                    img={img}
                />

                <InvestmentAsset
                    title='silver'
                    amount='$2,000'
                    img={img}
                />


           <InvestmentAsset
                    title='silver'
                    amount='$2,000'
                    img={img}
                />

            </div>
        </div>

    );
}

const InvestmentAsset = ({ title, img, amount }) => {

    return (
        <div className="investment-type-list">
            <img src={img} alt="" srcset="" />
            <div>
                <p>{title}</p>
                <p className='lato-black'>{amount}</p>
            </div>
        </div>

    )
}
export default InvestmentTypeWidget;