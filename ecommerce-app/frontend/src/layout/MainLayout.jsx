import React, { useState } from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {

   const [search,setSearch] = useState("")

  return (
    <>
    <Navbar search={search} setSearch={setSearch}/>
    <main>
        <Outlet context={{search}}/>
    </main>
    </>
  )
}

export default MainLayout