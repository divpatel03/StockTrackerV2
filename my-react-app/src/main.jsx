import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx';
import './index.css';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Login",
    element: <Login />
  },

  {
    path: "/Dashboard",
    element: <Dashboard />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Contact",
    element: <Contact />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
