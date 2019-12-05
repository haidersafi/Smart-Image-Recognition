import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Logo from './Components/Logo/Logo.js';
import 'tachyons';
import Imagelinkform from './Components/Imagelinkform/Imagelinkform.js';
import Signin from './Components/Signin/Signin.js';
import Rank from './Components/Rank/Rank.js';
import Particles from 'react-particles-js';
import Facerecognition   from './Components/Facerecognition/Facerecognition.js';
import Register from './Components/Register/Register.js';

const particalOptions={
      "particles": {
          "number": {
              "value": 80
          },
          "density":{
            enable:true,
            value_area:900
          },
          "size": {
              "value": 3
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  "mode": "repulse"
              }
          }
      }
  }

  
class App extends Component {
  constructor()
  {
    super()
    this.state={input:'',
    imageUrl:'',
    box:{},
    route:'signin',
    isSigned:false,
    users:{
      id:'',
    name:'',
    email:'',
    password:'',
    entries:0,
    joined: ''
    }}
  }
 
  onInputChange=(event)=>{
this.setState({input:event.target.value})
  }
  onRouteChange=(route)=>{
   
        this.setState({route:route})
        if (route==='home')
          {this.setState({isSigned:true})}
        else{
            this.setState({isSigned:false})}
          }

clarifaiFaceLocation=(data)=>{
 const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
 const image=document.getElementById('inputImage');
 const width=Number(image.width);
 const height=Number(image.height);
 return{
  left_col:width*clarifaiFace.left_col,
  right_col:width-(width*clarifaiFace.right_col),
  top_row:height*clarifaiFace.top_row,
  bottom_row:height-(height*clarifaiFace.bottom_row)   
 }
}
displayFaceBox=(box)=>{
  this.setState({box:box})
}

  onSubmit=()=>{
  this.setState({imageUrl:this.state.input}) 
  fetch('http://localhost:3000/imageurl',{
        method:'post',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({input:this.state.input})
      }).then(response=>response.json())
  .then(response=>{
    if (response){
      fetch('http://localhost:3000/image',{
        method:'put',
        headers:{'Content-type':'application/json'},
        body:JSON.stringify({id:this.state.user.id})
      }).then(resp=>resp.json()).then(count=>{
        Object.assign(this.state.user,{entries:count})
      })
    }
  
 this.displayFaceBox(this.clarifaiFaceLocation(response))}).catch(err=>console.log(err))
  }
  loadProfile=(data)=>{
this.setState({user:{id:data.id,
    name:data.name,
    email:data.name,
    password:data.password,
    entries:data.entries,
    joined:data.joined}})
 console.log('userprofile:',data)
  }

  render()
  {
    const {isSigned,imageUrl,box}=this.state;
  return (
    <div>
     <Particles className='particles' param={ particalOptions}/>
    <Navigation onRouteChange={this.onRouteChange} isSigned={isSigned}/>
    {this.state.route==='home'?
    <div>
      <Logo/>

      
      <Rank name={this.state.user.name} entries={this.state.user.entries}/>  
      <Imagelinkform onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
      <Facerecognition imageUrl={this.state.imageUrl} box={box}/>
      </div>
      :this.state.route==='signin'?
      <Signin loadProfile={this.loadProfile} onRouteChange={this.onRouteChange}/>:
      <Register loadProfile={this.loadProfile} onRouteChange={this.onRouteChange}/>

    }
          

    </div>
  );
}
}

export default App;
