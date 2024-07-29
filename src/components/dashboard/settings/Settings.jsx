import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../../dashboard/settings/settings.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink,Outlet} from 'react-router-dom';

const Settings = () => {
    const settingsRoute=[
        {
            name:'Security Settings',
            route:'security-settings'
        },
        {
            name:'Add Card',
            route:'add-card'
        },
        ,
        {
            name:'KYC',
            route:'kyc'
        }
    ]
    return (
        <div className="settings">
            <div className="deposit-header">
                <div>
                    <FontAwesomeIcon icon={faCog} />
                    <h1>Setting</h1></div>
            </div>
            <div className="setting-pane">
                <div className="settings-list">
                    <ul>
                       {settingsRoute.map((data)=>(
                        <li><NavLink className='settings-link lato-bold' to={data.route}>{data.name}</NavLink></li>
                       ))}
                    </ul>
                </div>
                <div className="settings-main">
                       <Outlet />
                </div>
            </div>

        </div>
    );
}

export default Settings;