import React from "react"
import {Component} from "react"
class Count extends Component{
  constructor(props)
  {
  super(props);
  this.state={
    count:0
  };
  this.add=this.add.bind(this)
  this.sub=this.sub.bind(this)
  this.reset=this.reset.bind(this)
}
  add(){
  this.setState(state=>({
count:state.count+ +this.props.addValue
  }))
}
sub(){
  this.setState(state=>({
count:state.count- +this.props.subValue
  }))
}
reset(){
  this.setState(state=>({
    count:state.count=0
  }))
}
// customstyle={
//   color:"red"
// }
render(){
  return (
    <div>
      <h1>Count :{this.state.count}</h1>
      <button style={{
"background-color":"yellow"
      }}onClick={this.add}>ADD</button>
      <button onClick={this.sub} disabled={this.state.count===0}>SUB</button>
      <button onClick={this.reset}>RESET</button>
    </div>
  )
}
}
export default Count