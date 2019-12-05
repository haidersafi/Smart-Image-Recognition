import React,{Component} from 'react';
import './Signin.css'
class Signin extends Component{
constructor(props)
{
  super(props)
  this.state={
    signInEmail:'',
    signInPassword:''
  }
}
onEmailChange=(event)=>{
  this.setState({signInEmail:event.target.value})
}
onPasswordChange=(event)=>{
  this.setState({signInPassword:event.target.value})
}
onSubmit=()=>{
  console.log(this.state);
  fetch('http://localhost:3000/signin',{
      method:'post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email:this.state.signInEmail,
        password:this.state.signInPassword})
    }).then(resp=>resp.json()).then(user=>{
    if (user.id)
    {
      this.props.loadProfile(user)
this.props.onRouteChange('home')

    }
  })
 
}
render()
{
return(<article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
	<main className="pa4 black-80">
  <div className="measure tc">
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onEmailChange} type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" onChange={this.onPasswordChange} type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="">
      <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onSubmit} type="submit" value="Sign in"/>
    </div>
    <div className="lh-copy mt3">
      <p className="f6 link dim  db" onClick={()=>this.props.onRouteChange('register')}>Register</p>
      
    </div>
  </div>
</main>
</article>)
}
}
export default Signin;