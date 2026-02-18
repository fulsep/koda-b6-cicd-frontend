import React from 'react'

function App() {
  return (
    <div className='flex flex-col min-h-screen h-full'>
      <div className='h-24 bg-black text-white flex justify-between items-center px-10'>
        <div className='text-xl font-bold'>Brand</div>
        <ul className='flex gap-5'>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <h1 className='font-bold text-2xl'>Welcome to Kodacademy!</h1>
      </div>
    </div>
  )
}

export default App