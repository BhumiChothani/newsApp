import React from 'react'
import Spinner from './spinner.gif'

const Loader =()=> {
  
    return (
      <div className="text-center">
          <img className="my-5" src={Spinner} alt="..."/>
      </div>
    )
  
}

export default Loader