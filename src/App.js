import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import Home from './components/Home'
import Error from './components/Error'

class App extends React.Component {

  constructor(props){ 
    super(props) 
    this.state = {age : "",remarque:"",name:'',poids:Number,taille:Number,resultat:Number} 
    this.changeretat = this.changeretat.bind(this)
    
  }  
  changeretat(){ 
    if(this.state.age>18)
    this.setState({ remarque:'majeur'}) 
    else
    this.setState({ remarque:'mineur'}) 
  } 
  
  render(){
   return(
     <>
    <div className="App">
    <Router>
      <Navigation/>
      <Routes>
        <Route exact path = '/' element ={<Home/>}/>
        <Route exact path = '/About' element={<About/>} ></Route>
        <Route exact path = '/Contact' element ={<Contact/>} ></Route>
        <Route  element ={<Error/>} ></Route>
      </Routes>
    </Router>
  </div>
  <div style={{ marginTop: "10%", textAlign: "center"
}}>
  {this.state.name}
  <input value={this.state.name} 
 onChange={(e) => this.setState({ name:
e.target.value })}/>
  <h2>afficher remarque apropos lage </h2>
  <h4> donner age :</h4>
  <input type='number' value={this.state.age} 
 onChange={(e) => this.setState({ age:
e.target.value })}/>
<br/><br/>
        <button onClick={this.changeretat}> 
          Click me!
        </button> 
        <br/><br/>
        {this.state.remarque}
  </div>
    </>
   );
   }
   
  }
  export default App;
  

