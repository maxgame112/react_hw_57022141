import React , { Component } from 'react';
import {Output} from '.';
import {BrowserRouter , Switch , Route , Link } from 'react-router-dom';
class Input extends Component {
  constructor(props){
      super(props)
      this.state = {value:""}
  }

  change(x){
    const cv = x.target.value
    this.setState({value:cv});
  }

  

  render(){
    const  { name } = this.props
    const {value } =this.state
    return (
      <div>
        <form>
	<labe />Input : 
           <input  type="text" onChange={this.change.bind(this)}/>
        </form>
        <button><Link to={{pathname:"/output",state : this.state.value}}>Submit</Link></button>
        <Route path="/output" component={Output} />
      </div>
    );
  }
}


export default Input