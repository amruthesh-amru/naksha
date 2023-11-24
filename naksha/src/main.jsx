import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Layout from './Layout.jsx';
import About from './components/about/About.jsx'
import Project from './components/project/Project.jsx';
import Contact from './components/contact/Contact.jsx';
import Home from './components/home/Home.jsx';

const router = createBrowserRouter([
  
     { path:'/',
      element:<Home/>},
      {
        path:"/about",
        element:<About/>
    },
      {
        path:"/project",
        element:<Project/>
    },
      {
        path:"/contact",
        element:<Contact/>
    },
      
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
)
