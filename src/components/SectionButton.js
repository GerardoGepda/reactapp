import React from 'react';
import './../styles/SectionButton.css';

class SectionButton extends React.Component {
    stringClass = "sectionButton SecBtn-color" + this.props.colorButton;
    render() {
        return(
            <button className={this.stringClass}>
                <i className="material-icons-outlined">
                    {this.props.iconButton}
                </i>
                <span>
                    {this.props.titleButton}
                </span>
            </button>
        );
    }
}

export default SectionButton;