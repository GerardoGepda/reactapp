import React from 'react';
import './../styles/Card.css';

class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <div className="card_title">
                    <span>{this.props.cardTitle}</span>
                    <span className="material-icons">{this.props.cardIcon}</span>
                </div>
                <div className="card_body">
                    <span className="card_body_data">{this.props.cardBody}</span>
                    <div className="card_body_otherdata">
                        <span className="material-icons">
                            {this.props.iconCard === '+' ? 'control_point' : 'remove_circle_outline'}
                        </span>
                        <span>{this.props.cardOther}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;