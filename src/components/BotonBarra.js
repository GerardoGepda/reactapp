import React from "react";

class BotonBarra extends React.Component {
  render() {
    return (
      <button className={this.props.btnClass}>
        <span className="material-icons">{this.props.btnIcon}</span>
      </button>
    );
  }
}

export default BotonBarra;
