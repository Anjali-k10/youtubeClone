import React from 'react'

const Button = ({name}) => {
 return (
    <button className='px-3 py-1 mx-2 my-2 rounded-lg bg-gray-200 text-black font-semibold text-sm'>
      {name}
    </button>
  );
}

export default Button
