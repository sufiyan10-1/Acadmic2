import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import {Signup, Login, ResultInput,ResultTmp1,ResultTmp2 } from './pages/index.js'
import {SelectMode, Manually, UsingFile, UniverSitydataInput, CourseDataInput, CollegeDataInput, MarksEntry} from './components/index.js'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/singup',
    element: <Signup/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/UniverSitydataInput',
    element: <UniverSitydataInput/>
  },
  // { 
  //   path: '/Using_file',
  //   element:<UsingFile/>
  // },
  {
    path: '/ResultInput',
    element: <ResultInput/>,
  },
  { 
    path: 'Using_file',      
    element:<UsingFile/>
  },
  {
    path: '/Manually',
    element: <Manually/>
  },
  {
    path: '/CourseDataInput',
    element: <CourseDataInput/>
  },
  {
    path: '/CollegeDataInput',
    element: <CollegeDataInput/>
  },
  {
    path: '/SelectMode',
    element: <SelectMode/>
  },
  {
    path: '/MarksEntry',
    element: <MarksEntry/>
  },
  {
    path: '/ResultTmp1',
    element: <ResultTmp1/>
  },
  {
    path: '/ResultTmp2',
    element: <ResultTmp2/>
  },
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
