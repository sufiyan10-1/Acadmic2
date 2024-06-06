import React from 'react'

function Button({
    children,
    type ="button",
    className = '',
    ...props

}) {
  return (
    <div>
      <button
      className='bg-yellow-200 py-2 px-10 rounded-md'>
        {children}
      </button>
    </div>
  )
}

export default Button
