/*
  Write JavaScript/React code here and press Ctrl+Enter to execute.

  Try: mountNode.innerHTML = 'Hello World!';
   Or: ReactDOM.render(<h2>Hello React!</h2>, mountNode);
*/
import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
      this.myToggle =false;
  }
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    
     if (this.myToggle == false){
        this.setState({favoritecolor: "blue" });
    this.myToggle = true;
       
    }
    
    
      else if (this.myToggle != false){
        this.setState({favoritecolor: "Yellow" });
    this.myToggle = false;
       
   }
  
   
  }
  render() {
    return (
      <div>
        <h1>My Favorite <span class="mred">Color</span> is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Header />,  mountNode);

//ReactDOM.render(<h2>Hello I am here!</h2>, mountNode);
