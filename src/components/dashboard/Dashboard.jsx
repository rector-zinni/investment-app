import '../../stylesheets/dashboard.scss'
import '../../stylesheets/ads.scss'
import Header from './header';
import DashboardList from './DashboardList';
import Main from './Main';
import {Outlet,Link} from 'react-router-dom'
import logo from './../../image/header-logo-6ohuZh.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import TimelineList from './TimelineList';
import { ThemeContext } from '../..';
import { useContext, useState } from 'react';
const Dashboard = () => {
const [theme,setTheme] = useState('light');
const dasboardthemeclass='dashboard '+theme
    return ( 
        <div className={dasboardthemeclass}>
        <div className="dashboard-wrapper">
        <div className="headers">
            <ThemeContext.Provider value={theme}>
        <Header changeTheme={()=>{
            setTheme((theme==='light')?'dark':'light')
        }}/>
        </ThemeContext.Provider>
        </div>
            <div className="sidebar">
                <DashboardList/>
            </div>
           
            <div className="main-content">
<div className="outlet">
<Outlet/>
</div>
<div className="ads-container component-shadow">
    <Ads/>
</div>

            </div>
        </div>
        </div>
     );
}

export const Ads = () => {
    return (
        <div className="ads">
<AdsList/>
<TimelineList/>
        </div>
    );
}
export const AdsList = (title,) => {
    return ( 
        <div className="ads-list component-shadow-2">
           <div className="ads-header">
            <div className="ads-header-img">
            <img src={logo} alt="loading..." />
            </div>
            
            <div className="ads-header-cls-btn">
                <FontAwesomeIcon icon={faClose}/>
                </div>
            </div> 
            <div className="ads-title">
            <span className=''>
                Header 
                
                </span>
            </div>
            <div className="ads-content lato-regular">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil deleniti repudiandae illo delectus perspiciatis! In asperiores perspiciatis ipsum minus dignissimos sequi iusto ut hic. Quasi repellendus itaque voluptas autem!

                </p>
            </div>
            <div className="ads-button lato-bold">
        <button>Action</button>
            </div>
        </div>
     );
}
export default Dashboard;
