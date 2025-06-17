import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const Mainbar = () => {
  return (
    <div  className='col-span-11 '>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default Mainbar
