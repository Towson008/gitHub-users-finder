import React from 'react'

function About() {
  return (
    <div>
        <h1 className="text-6xl mb-2">
            Github Finder
        </h1>
        <p className="mb-4 text-2xl font-light">
            This is a React App used to search for Github profile and 
            details. 
            Designed by Brad Treversy 
        </p>
        <p className='text-lg text-gray-400'>
            Version <span className='text-white'>1.0.0</span>
        </p>
        <p className='text-lg text-gray-400'>
            Code by:   
            <a className='text-white' href='https://github.com/towson008'> Towseen</a>
        </p>
    </div>
  )
}

export default About