import React from 'react'
import './Imagelinkform.css'

const Imagelinkform=({onInputChange,onSubmit})=>{
return(<div><p className='f5 center mb1'>THIS MAGIC BRAIN WILL DETECT FACES IN YOUR PICTURES. GIVE IT A TRY</p>
	<div className=' w-50 pa3 br3 shadow-5 center formbg'><input type='text' onChange={onInputChange} className='f5 pa2 w-70 fw500'/>
	<button className=' pa2 grow w-30 dib white link bg-light-purple ba b--light-purple' onClick={onSubmit}>DETECT</button></div></div>)
}
export default Imagelinkform