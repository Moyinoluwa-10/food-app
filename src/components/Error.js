import React from 'react'
import '../styles/error.css'

const Error = ({errorMessage}) => {
  return (
    <div className='error'>
        <small>{errorMessage}</small>
    </div>
  )
}

export default Error