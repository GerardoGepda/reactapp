import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import BotonBarra from './BotonBarra';
import './../styles/doughnutCard.css';

class DoughnutCard extends React.Component {
    render() {
        return(
            <div className="doughnutCard">
                <div className="doughnutCard_data">
                    <span>Current<br/>Status</span>
                    <span>New<br/>Data</span>
                </div>
                <Doughnut
                    id="doughnutCard_graph"
                    data = {{
                        datasets: [{
                            backgroundColor: ['rgb(26,21,106)', 'rgb(29, 38, 119)', '#1b2ab1', '#275ae7'],
                            data: [10, 20, 30, 45]
                        }],
                        labels: [
                            'Data 1',
                            'Data 2',
                            'Data 3',
                            'Data 4'
                        ]
                    }}
                    options={{
                        responsive: false,
                        maintainAspectRatio: false,
                        spanGaps: true,
                        legend: {
                            display: false
                        }
                    }}
                />
                <BotonBarra btnClass="btnCard" btnIcon="more_horiz"/>
            </div>
        );
    }
}

export default DoughnutCard;