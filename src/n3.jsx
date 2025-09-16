import React from "react";

class n extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.state = {
      secretMessage: "a águia voa à meia-noite",
    };
    return (
      <>
        <p>Baú do Tesouro</p>
      </>
    );
    
  }
}

export default n;