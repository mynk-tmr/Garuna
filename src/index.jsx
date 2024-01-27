import { HeartIcon } from '@heroicons/react/24/solid'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './app.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p className='text-[3rem]'>Poppins</p>
    <HeartIcon className='w-16' />
  </React.StrictMode>,
)
