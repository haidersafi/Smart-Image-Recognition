import React from 'react'
import './Facerecognition.css'

const Facerecognition=({imageUrl,box})=>{
return(<div className='center mt2'>
	<div className="absolute"><img alt='' id='inputImage' src={imageUrl} width='500px' height='auto'/>
	<div className='bounding-box' style={{top:box.top_row,bottom:box.bottom_row,right:box.right_col,left:box.left_col}}></div></div></div>)
}
export default Facerecognition	