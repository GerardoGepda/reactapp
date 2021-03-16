import React from 'react';
import BotonBarra from './BotonBarra';
import './../styles/Barra.css';

class BarraLateral extends React.Component {
    render() {
        return(
            <div className="barra">
                <BotonBarra btnClass="btnBarra" btnIcon="menu"/>
                <BotonBarra btnClass="btnBarra" btnIcon="explore"/>
                <BotonBarra btnClass="btnBarra" btnIcon="grade"/>
                <BotonBarra btnClass="btnBarra" btnIcon="favorite"/>
                <BotonBarra btnClass="btnBarra" btnIcon="leaderboard"/>
                <BotonBarra btnClass="btnBarra" btnIcon="location_on"/>
                <BotonBarra btnClass="btnBarra" btnIcon="near_me"/>
                <BotonBarra btnClass="btnBarra" btnIcon="settings"/>
                <BotonBarra btnClass="btnBarra" btnIcon="lock"/>
            </div>
        );
    }
}

export default BarraLateral;