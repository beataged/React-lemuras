import React from "react";
class DigitSqare extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: this.props.number };
  }

  increaseNumber = () => {
    // this.setState({
    //   number: this.state.number + 1,
    // });
    // Correct
    this.setState(state => ({
      number: state.number +1
    }));
  };

  render() {
    return (
      <div className="big-blue__small__digit" onClick={this.increaseNumber}>
        {this.state.number}
      </div>
    );
  }
}

export default DigitSqare;
