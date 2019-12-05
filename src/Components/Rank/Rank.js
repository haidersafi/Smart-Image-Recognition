import React from 'react'

const Rank=({name,entries})=>{
return(<div className="tc f3 mb1 white"><p className='ma0'>{`${name},YOUR CURRENT RANK IS`}</p>
	<p className='f2 ma0'>{entries}</p></div>)
}
export default Rank