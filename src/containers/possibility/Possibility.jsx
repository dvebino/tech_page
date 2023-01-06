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
        <h4>The potential of artificial intelligence (AI) is vast and varied, with the ability to revolutionize virtually every industry and aspect of our lives.</h4>
        <h1 className='gradient__text'>The possibilities are endless</h1>
        <p>AI is limited only by our imagination and the boundaries of what is technically possible. As the field continues to advance, we can expect to see even more exciting and innovative applications of AI in the future.</p>
        <h4>Request Early Access</h4>
      </div>
    </div>
  )
}

export default Possibility