import React from 'react'
import http from '../lib/http'

function Login() {

  const processLogin = async (e)=>{
    e.preventDefault()
    const {value: email} = e.target.email
    const {value: password} = e.target.password
    const req = await http("/auth/login", {email,password}, {
      method: "POST"
    })
    const data = await req.json()
    window.alert(data.message);
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <form onSubmit={processLogin} className='flex flex-col gap-5 max-w-md w-full p-5 rounded bg-white shadow'>
        <label className='flex flex-col'>
          <span>Email</span>
          <input className='h-12 px-5 rounded border outline-none' type="email" name='email' />
        </label>
        <label className='flex flex-col'>
          <span>Password</span>
          <input className='h-12 px-5 rounded border outline-none' type="password" name='password' />
        </label>
        <button className='h-12 bg-black text-white flex justify-center items-center'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login