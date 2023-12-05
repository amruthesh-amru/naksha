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
import Packages from './components/packages/Packages.jsx';
import Project1 from './components/Project1/Project1.jsx';
import Project2 from './components/project2/Project2.jsx';
import Project3 from './components/project3/Project3.jsx';

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
    {
      path:"/packages",
      element:<Packages/>
  },
    {
      path:"/project1",
      element:<Project1/>
  },
    {
      path:"/project2",
      element:<Project2/>
  },
    {
      path:"/project3",
      element:<Project3/>
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
)
