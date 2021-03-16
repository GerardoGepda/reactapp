import React from 'react';
import Card from './Card';
import CardData from './CardData';
import GraphCard from './graphCard';
import './../styles/HomeScreen.css';
import weatherImg from './../assets/images/weather.png';
import healthImg from './../assets/images/heart.png';
import SectionButton from './SectionButton';
import DoughnutCard from './DoughnutGraphCard';
import CloudCard from './CloudCard';

class HomeScreen extends React.Component {
    render() {
        return(
            <div className="homeScreen">
                <Card
                    cardTitle="Current Month Revenue"
                    cardIcon="leaderboard"
                    cardBody="$12,456"
                    cardOther="5% higher than last month"
                    iconCard="+"
                />
                <Card
                    cardTitle="Today's Visits"
                    cardIcon="visibility"
                    cardBody="1,456,023"
                    cardOther="9% higher than last month"
                    iconCard="+"
                />
                <Card
                    cardTitle="Today's Feedbacks"
                    cardIcon="compare_arrows"
                    cardBody="2,300"
                    cardOther="3% lower than last month"
                    iconCard="-"
                />
                <div className="Weather&Health">
                    <CardData
                        cardData={{fst:"Current", snc:"Weather"}}
                        cardOther="21°"
                        cardImg={weatherImg}
                    />
                    <CardData
                        cardData={{fst:"Health", snc:"Care"}}
                        cardOther="68" 
                        cardImg={healthImg}
                    />
                </div>
                <div className="graphCard_container">
                    <GraphCard/>
                </div>
                <div className="SectionButton_container">
                    <SectionButton iconButton="house" titleButton="UserPanel" colorButton="1"/>
                    <SectionButton iconButton="cloud_upload" titleButton="Cloud Storage" colorButton="2"/>
                    <SectionButton iconButton="get_app" titleButton="Updates" colorButton="3"/>
                    <SectionButton iconButton="visibility" titleButton="Web Visits" colorButton="4"/>
                </div>
                <DoughnutCard/>
                <CloudCard/>
            </div>
        );
    }
}

export default HomeScreen;