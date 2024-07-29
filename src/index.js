import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/login'
import Register from './components/register'
import reportWebVitals from './reportWebVitals'
import Dashboard from './components/dashboard/Dashboard';
import Main from './components/dashboard/Main';
import Calculator from './components/dashboard/calculator/Calculator';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Deposit from './components/dashboard/deposit/Deposit';
import Profile from './components/dashboard/profile/Profile';
import Settings from './components/dashboard/settings/Settings';
import { createContext } from 'react';
import SecuritySettings from './components/dashboard/settings/securitysettings/SecuritySettings';
import Kyc from './components/dashboard/settings/kyc/Kyc';
import AddCard from './components/dashboard/settings/addcard/AddCard';
import Referral from './components/dashboard/refferal/Refferal';
import Wallet from './components/dashboard/wallet/Wallet';






export const ThemeContext=createContext('light');
const router = createBrowserRouter([
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/create-account",
    element: <Register/>,
  },
  {
    path:'/dashboard',
    element:<Dashboard/>,
    children:[
      {
        path:'main',
        element:<Main/>
      },
      {
        path:'deposit',
        element:<Deposit/>
      },
      {
        path:'calculator',
        element:<Calculator/>
      },
      {
        path:'profile',
        element:<Profile/>
      },
      {
        path:'settings',
        element:<Settings/>,
        children:[
          {
            path:'security-settings',
            element:<SecuritySettings/>
          },
          {
            path:'kyc',
            element:<Kyc/>
          },
          {
            path:'add-card',
            element:<AddCard/>
          },
        ]
      },
      {
        path:'refferal',
        element:<Referral/>
      },
      {
        path:'wallet',
        element:<Wallet/>
      }
    ]
   
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const getClientInformation=()=>{

}
