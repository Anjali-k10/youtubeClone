import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Body = () => {
  return (
      <div  className=' grid grid-flow-col '>
        <Sidebar/>
        <Mainbar/>  
      </div>
   
  )
}

export default Body
