import {  NavLink } from 'react-router-dom'
import '../dashboard/.././../stylesheets/dashboardlist.scss'
import { faCalculator, faCog, faDashboard, faDollarSign, faSignOut, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'
import { faSourcetree } from '@fortawesome/free-brands-svg-icons'


const DashboardList = () => {

    const dashboard_list_ref = useRef([])
    const ListActive = (ref, index) => {
       
        if (ref.current[index] !== undefined) {

            ref.current[index].style.borderLeft = '.2em solid white'
        }
    }
    const list_item = [{
        title: "Dashboard",
        icon: faDashboard,
        toValue: "main",
    },
    {
        title: "Deposit",
        icon: faDollarSign,
        toValue: "deposit",
    },
    {
        title: "Calculator",
        icon: faCalculator,
        toValue: "calculator",
    },
    {
        title: "Profile",
        icon: faUser,
        toValue: "profile",
    }
    ,
    {
        title: "Settings",
        icon: faCog,
        toValue: "Settings",
    },
    {
        title: "Refferal",
        icon: faSourcetree,
        toValue: "refferal",
    }
    ,
    {
        title: "Wallet",
        icon: faWallet,
        toValue: "wallet",
    }
   
    ]
    return (
        <div className="dashboard-list">
            {/* <div className="list-header-title">
              
            </div> */}
            <ul className="dashboard-list-item">
                {
                    list_item.map((list_data, index) => (
                        <li key={index} ref={(node) => {
                            dashboard_list_ref.current[index] = node
                        }}><NavLink isActive={
                            ListActive(dashboard_list_ref, index)
                        } className='nav-link' to={list_data.toValue}>
                                <div><span>{list_data.title}</span> <FontAwesomeIcon icon={list_data.icon} /></div>
                                <span className='lato-regular'>4</span>
                            </NavLink>
                        </li>
                    ))
                }
                <li><a className='nav-link' >
                                <div><span>Logout</span> <FontAwesomeIcon icon={faSignOut} /></div>
                               
                            </a>
                        </li>
            </ul>
        </div>
    );

}

export default DashboardList;