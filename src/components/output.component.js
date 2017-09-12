import React , { Component } from 'react';
import Input from './input.component'

class Output extends Component {
  constructor(props){
    super(props)
    this.state={
      
    }
  
  }
  
  

  render(){
    
    
    return (
      <div>
        <div>
	<label />output :
         <h3>{this.props.location.state}</h3>
        </div>
      </div>
    );
  }
}


export default Output