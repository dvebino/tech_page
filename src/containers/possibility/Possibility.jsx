import React from 'react'

import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibilityImage" />
      </div>
      <div className='gpt3__possibility-content'>
        <h4>Request Early Access</h4>
        <h1 className='gradient__text'>The possibilities are endless</h1>
        <p>The potential of artificial intelligence (AI) is vast and varied, with the ability to revolutionize virtually every industry and aspect of our lives.</p>
        <h4>Request Early Access</h4>
      </div>
    </div>
  )
}

export default Possibility