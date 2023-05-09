import { Component } from "react";
import coinhead from "./xoinhead.jpg";
import cointail from './cointtail.jpg';
import "./coin.css"

class Coin extends Component{
    render() {
        return (
            <div className="Coin">
                <img src={coinhead} alt="coinhead" />
                <img src={cointail} alt="cointail"/>
            </div>
        );
    }
}

export default Coin;