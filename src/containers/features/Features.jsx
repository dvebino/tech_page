import React from 'react'
import './features.css'
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Predictive Analysis',
    text: 'Using historical data and machine learning algorithms, these systems can make informed predictions about future outcomes and trends.',
  },
  {
    title: 'Natural language processing (NLP)',
    text: 'These systems enable computers to understand and interpret human language, allowing for more efficient and effective communication between humans and machines.',
  },
  {
    title: 'Computer vision',
    text: 'These systems allow computers to analyze and understand images and videos, enabling them to perform tasks such as object recognition and facial recognition.',
  },
  {
    title: 'Robotics',
    text: 'AI-powered robots can be programmed to perform a variety of tasks, from manufacturing and assembly to customer service and healthcare.',
  },
];

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>
          The Future is Now and You Just Need To Realize It. Step into the Future Today & Make It Happen.
        </h1>
        <p>Request Early Access Here.</p>
      </div>
      <div className='gpt3__features-container'>
        {
          featuresData.map((item,idx) => <Feature key={idx} title={item.title} text = {item.text} />)
        }
      </div>
    </div>
  )
}

export default Features