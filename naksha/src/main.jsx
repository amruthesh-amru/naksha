import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import About from './components/about/About.jsx'
import Project from './components/project/Project.jsx';

const router = createBrowserRouter([
  {
      path:'/',
      element:<Layout/>,
      children:[
        {
          path:"",
          // element:<Home/>
      },
      {
        path:"about",
        element:<About/>
    },
      {
        path:"project",
        element:<Project/>
    },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
)
