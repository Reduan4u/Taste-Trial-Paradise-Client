import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Route from './Route/Route';
import AuthProvider from './Provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl m-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={Route} />
      </AuthProvider>
    </React.StrictMode>
  </div>
)
