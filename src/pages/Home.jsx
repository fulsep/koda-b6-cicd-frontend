import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='flex flex-col min-h-screen h-full'>
      <div className='h-24 bg-black text-white flex justify-between items-center px-10'>
        <div className='text-xl font-bold'>Brand</div>
        <ul className='flex gap-5'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl'>Welcome to Kodacademy!</h1>
        <h1 className='font-bold text-2xl'>Changes from CI/CD!</h1>
      </div>
    </div>
  )
}

export default Home