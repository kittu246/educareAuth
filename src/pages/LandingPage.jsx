import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <section className='flex flex-col h-screen items-center justify-center gap-6 p-4 '>
        <h1 className='font-bold text-3xl '>Welcome to PopX</h1>
        <p className='text-gray-400 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, provident?</p>
        <Link to='/signUp' className=' customButton'>Create Account

        </Link >
        <Link to='/signIn' className=' customButton'>
        Alreday Registered? Login
        
        </Link>
    </section>
  )
}

export default LandingPage