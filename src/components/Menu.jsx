import React from 'react'
import { CiLogin, CiSearch } from "react-icons/ci";
import { HiUserAdd } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { LuLogIn } from "react-icons/lu";

const Menu = () => {
  return (
    <ul className=' menu-options flex px-7 justify-between bg-[#1b1f29] text-white py-2 fixed bottom-0 w-full'>
      <li>
        <IoSearch />
        <h2>Search</h2>
      </li>
      <li>
        <LuLogIn />
        <h2>Login</h2>
      </li>
      <li>
        <HiUserAdd />
        <h2>Sign up</h2>
      </li>
    </ul>
  )
}

export default Menu