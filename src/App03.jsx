import React from "react";
import SmallSquare from "./Components/Start2/CSmallSquare";
import digitSqares from "./Data/digitSqares";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {border: 'yellow'};
    }

    // componentDidMount(){
    //     console.log('im ready')
    // }

    handleClick = () => {
        console.log('im nice')
        this.setState({
            border: '#'+Math.floor(Math.random()*16777215).toString(16)
        })
        console.log(this.state.border)
    }

  render() {
    return (
      <div className="App">
        <div className="big-blue" style={{borderColor:this.state.border}}>
            <div className="big-blue__button">
                <button className="button" onClick={this.handleClick}><span>Im ugly</span></button>
            </div>
          <SmallSquare color={"crimson"} number={5}></SmallSquare>
          <SmallSquare color={"orange"} number={7}></SmallSquare>
          <SmallSquare color={"lime"} number={8}></SmallSquare>
          <SmallSquare color={"brown"} number={19}></SmallSquare>
        </div>
        <div className="big-blue">
          {digitSqares.map((s, i) => (
            <SmallSquare key={i} color={s.color} number={s.number}></SmallSquare>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
