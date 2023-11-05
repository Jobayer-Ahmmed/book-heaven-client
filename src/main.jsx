import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route'
import MyAuthProvider from './contextApi/MyAuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyAuthProvider>
      <RouterProvider router={router}/>
    </MyAuthProvider>
  </React.StrictMode>,
)
