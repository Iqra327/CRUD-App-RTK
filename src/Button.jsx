import React from 'react'

const Button = ({label, classes, type, onClick}) => {
  return (
    <button 
      className={`border p-1 px-2 rounded my-2 mx-1 text-white text-lg transition-colors ${classes}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button