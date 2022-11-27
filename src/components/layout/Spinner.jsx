import React from 'react';
import spinnerIMg from "./assets/EclipseSpinner.gif"

function Spinner() {
  return (
    <div className='w-100 mt-20'>
        <img 
            width={180}
            className='text-center mx-auto'
            src={spinnerIMg} 
            alt="Loading" />
    </div>
  )
}

export default Spinner