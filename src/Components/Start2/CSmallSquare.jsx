import React from "react";
import DigitSqare from "./CDigitSquare";

class SmallSquare extends React.Component{

    constructor(props){
        super(props);
        this.state = {border: 'yellow'};
    }

    render(){
    return(
        <div className="big-blue__small" style={{
            borderColor: this.props.color
        }}>
            <DigitSqare number={this.props.number}></DigitSqare>
        </div>
    )
    }
}

export default SmallSquare;