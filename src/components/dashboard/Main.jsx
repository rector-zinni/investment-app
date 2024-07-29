import '../dashboard/../../stylesheets/main.scss'
import Assets from './Assets';
import InvestmentTypeWidget from './InvestmentTypeWidget';
import img from '../../image/in-signin-image.jpg'
import TransactionTable from './transaction/TransactionTable';
import { LineChart, Line,ResponsiveContainer, Tooltip, Legend,  } from 'recharts';
const main = () => {
 

  const randomNumber=()=>{
    return Math.floor(Math.random()*(0-3+1))
  }
  const data = [
    {name: 'Page A', uv: randomNumber(), pv: randomNumber(), amt: 2400},
    {name: 'Page A', uv: randomNumber(), pv: randomNumber(), amt: 200},
    {name: 'Page A', uv: randomNumber(), pv: randomNumber(), amt: 2400},
    {name: 'Page A', uv: randomNumber(), pv: randomNumber(), amt: 2400}

  ];
const renderLineChart = (
  <ResponsiveContainer>
  <LineChart   data={data}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: 'rgba(0,0,0,0.5)', border: '1px solid #ccc', borderRadius: 5, lineHeight: '40px' }} />

  </LineChart>
  </ResponsiveContainer>
);
    return ( 
       <div className="main-component">
        <div className="welcome-msg">
          
         <p className='lato-bold'>Welcome Back, <span className='lato-bold-italic'>John doe</span></p>
         <span className='lato-regular'>
          Happy to see you again, invest your asset today, good luck!!!
         </span>
        </div>

        <div className="invesment-panel">
          <Assets
          amount="$40,000"
          assetType='Investment Assets'
          incrament='+2.6%'
          />
          <Assets
          amount="$150,000"
          assetType='Amount Invested'
          incrament='+50.3%'
          />
           <Assets
          amount="$3,250,000"
          assetType='Withdrawable fund'
          incrament='+2.6%'
          />

          
          </div>  
          <div className="widgets">
            <InvestmentTypeWidget />
            <div className="linechart component-shadow-2">
              {renderLineChart}
            </div>
            </div> 

            <div className="t-table">
              <TransactionTable/>
              </div>   
       </div>
     );
}
 
export default main;