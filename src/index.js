import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/login'
import Register from './components/register'
import reportWebVitals from './reportWebVitals'
import Dashboard from './components/dashboard/Dashboard';
import Main from './components/dashboard/Main';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Deposit from './components/dashboard/Deposit';
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
