import React from 'react'
import Tilt from 'react-tilt'
import './Logo.css'
import brain from './brain.png';

const Logo=()=>{
	return(
 <Tilt className="Tilt br2 shadow-5 ml2" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
 <div className="Tilt-inner  pa3 "><img alt='' src={brain} style={{ height: 70, width: 70 }}/></div>
</Tilt>)
}
export default Logo