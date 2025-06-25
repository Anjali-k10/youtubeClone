import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonNames = [
    "All", "Music", "Lo-fi", "Live", "Jagjit Singh", "Mixes", "Disha Vakani",
    "Mantras", "Data Structure", "C++", "OOPS", "Bhajan", "News", "Ghazal"
  ];
  return (
    <div className='ml-3 my-2 '>
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
}

export default ButtonList
