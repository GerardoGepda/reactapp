import React from 'react';
import {Line} from 'react-chartjs-2';
import BotonBarra from './BotonBarra';
import './../styles/graphCard.css';

class GraphCard extends React.Component {

    render() {
        const data = () => {
            const ctx = document.getElementById('graphCard_graph').getContext('2d');
            const medida = ctx.canvas.offsetParent.clientWidth - 300;

            const grad = ctx.createLinearGradient(0, 0, medida, 0);
            grad.addColorStop(0, " rgba(26,21,106,1)");
            grad.addColorStop(1, "rgb(117, 218, 248)");
            return {
                labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: grad,
                    borderColor: grad,
                    data: [10, 25, 40, 25, 30, 25, 48, 9, 49, 27, 45, 27, 54, 20, 30],
                    fill: false
                }]
            };
        };

        return(
            <div className="graphCard">
                <div className="graphCard_header">
                    <span>Current Memory Load</span>
                    <BotonBarra btnClass="btnCard" btnIcon="more_horiz"/>
                </div>
                <Line 
                    id='graphCard_graph'
                    data={data}
                    options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        spanGaps: true,
                        elements: {
                            line: {
                                tension: 0.000001
                            }
                        },
                        legend: {
                            display: false
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 100,
                                    min: 0,
                                    stepSize: 50
                                }
                            }]
                        },
                        plugins: {
                            filler: {
                                propagate: false
                            },
                            'samples-filler-analyser': {
                                target: 'chart-analyser'
                            }
                        }
                    }}
                />
                <div className="graphCard_footer">
                    <span><b>83%</b> Memory Usage</span>
                    <span><b>74.5%</b> Max. Memory Usage</span>
                    <span><b>9.2%</b> Current Memory Usage</span>
                </div>
            </div>
        );
    }
}

export default GraphCard;