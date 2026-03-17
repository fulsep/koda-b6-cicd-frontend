import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <form className='flex flex-col gap-5 max-w-md w-full p-5 rounded bg-white shadow'>
            <label className='flex flex-col'>
                <span>Email</span>
                <input className='h-12 rounded border outline-none' type="email" name='email' />
            </label>
            <label className='flex flex-col'>
                <span>Password</span>
                <input className='h-12 rounded border outline-none' type="password" name='password' />
            </label>
            <button className='h-12 bg-black text-white flex justify-center items-center'>
                Login
            </button>
        </form>        
    </div>
  )
}

export default Login