import React from "react";
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
      console.log("hi iam constructor");
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log("hi iam getderivedfrom props");
    //   return {favoritecolor: props.favcol };
     
    // }
    shouldComponentUpdate() {
      console.log("sholdcomp");
      return false;
    }
    changeColor = () => {
      this.setState({favoritecolor: "blue"});
      console.log("hi iam change color");
    }
    render() {
        console.log("hi iam render method");
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <button type="button" onClick={this.changeColor}>Change color</button>
        </div>
      );
    }
  }
  export default Header