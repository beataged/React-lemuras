import React from "react";

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {books: []};
    }

    componentDidMount(){

    }

  render() {


    if(this.state.books.length){
 
    return (
      <div className="App">
        <div className="big-blue">

        </div>
    
      </div>
    );
  }
else{
    return (
        <div className="App">
          <div className="big-blue">
  
          </div>
      
        </div>
      );
}
}

export default App;
