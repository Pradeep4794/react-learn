import React, { useState } from 'react'
import Toggle from './Toggle'



const MainToggle = () => {
    const colors={
        colour1:"success",
        colour2:"warning",
        colour3:"primary",
        
      
    }
   
  return (
    <>
    
   
    <Toggle colorprops={colors}/>
    
    </>
  )
}

export default MainToggle