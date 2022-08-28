import React from 'react'
import '../styles/food.css'

const Food = ({imageName, altTitle, foodName}) => {
  return (
    <div className='food'>
        <div className='image-container'><img src={imageName} alt={altTitle} /></div>
        <div><h3>{foodName}</h3></div>
        <div><p>Stir fry pasta yada yada yada because of Sesan</p></div>
    </div>
  )
}

export default Food