import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/ApplyedJobs/AppliedJobs.jsx';
import Blog from './components/Blog/Blog.jsx';
import Header from './components/Header/Header.jsx';
import AvilableJob from './components/AvilableJob/AvilableJob.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element: <Header></Header>,
        loader: ()=> fetch('header.json')
      },
      
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'appliedjob',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blog',
        element: <Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
