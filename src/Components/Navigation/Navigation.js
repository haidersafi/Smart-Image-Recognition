import React from 'react'

const Navigation=({onRouteChange,isSigned})=>{
	console.log('Navi',isSigned)
if (isSigned===true)
return(
	<nav className='flex justify-end '><p onClick={()=>onRouteChange('signin')} className=' f3 dim  pa3 pt0 fw5 link underline pointer'>SignOut</p></nav>
	)
else
	return(<nav className='flex justify-end '>{/*<p onClick={()=>onRouteChange('')} className=' f3 dim  pa3 pt0 fw5 link underline pointer'>SignOut</p>
		<p onClick={()=>onRouteChange('signin')} className=' f3 dim  pa3 pt0 fw5 link underline pointer'>SignOut</p>*/}</nav>)
}
export default Navigation