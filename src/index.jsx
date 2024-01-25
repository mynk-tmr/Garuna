import React from 'react'
import ReactDOM from 'react-dom/client'
import '@fontsource/poppins'
import './app.css'
import { HeartIcon } from '@heroicons/react/24/solid'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <p className='text-green-400 text-[3rem]'>Hello</p>
    <HeartIcon className='w-10' />
  </React.StrictMode>,
)
