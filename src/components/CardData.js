import React from 'react';
import BotonBarra from './BotonBarra';
import './../styles/CardData.css';

class CardData extends React.Component {
    render() {
        return(
            <div className="cardData">
                <span className="cardData_data">{this.props.cardData.fst}<br/>{this.props.cardData.snc}</span>
                <img src={this.props.cardImg} alt="img card"/>
                <span className="cardData_otherData">{this.props.cardOther}</span>
                <BotonBarra btnClass="btnCard" btnIcon="more_horiz"/>
            </div>
        );
    }
}

export default CardData;