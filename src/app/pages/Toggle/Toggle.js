import * as React from 'react';
import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Toggle=({colorprops})=>{
 
  return (
    <>
    <h2 style={{textAlign: 'center'}}>Toggle Button</h2>
    <div style={{display: 'flex', justifyContent: 'center'}}>
      
      <Switch {...label} color={colorprops.colour1} />
      <Switch {...label} color={colorprops.colour2} />
      <Switch {...label} color={colorprops.colour3} />
     
      
    </div>
    </>
  );
}

export default Toggle;