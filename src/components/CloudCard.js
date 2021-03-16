import React from 'react';
import BotonBarra from './BotonBarra';
import './../styles/CloudCard.css';

class CloudCard extends React.Component {
    render() {
        return(
            <div className="cloudCard">
                <div className="cloudCard_header">
                    <span>Cloud Storage</span>
                    <BotonBarra btnClass="btnCloudCard" btnIcon="more_horiz"/>
                </div>
                <button className="cloudCard_button">
                    <span className="material-icons-outlined">
                        backup
                    </span>
                </button>
                <div className="cloudCard_footer">
                    <span className="clcrd_span_big">41/50GB</span>
                    <span className="clcrd_span_small">Buy More Space</span>
                </div>
            </div>
        );
    }
}

export default CloudCard;