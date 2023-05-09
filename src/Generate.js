import { Component } from "react";
import coinhead from "./xoinhead.jpg";
import cointail from "./cointtail.jpg";

class Generate extends Component {
  static defaultProps = {
    coins: [
      { side: "head", imgSrc: coinhead },
      { side: "tail", imgSrc: cointail }
    ]
  };
  constructor(props) {
    super(props);
    this.state = { currentCoin: null, totalFlips: 0, tailNum: 0, headNum: 0 };
    this.generate = this.generate.bind(this);
  }
  choice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }

  generate() {
    const newCoin = this.choice(this.props.coins);
    this.setState((st) => {
      return {
        currentCoin: newCoin,
        totalFlips: st.totalFlips + 1,
        headNum: st.headNum + (newCoin.side === "head" ? 1 : 0),
        tailNum: st.tailNum + (newCoin.side === "tail" ? 1 : 0)
      };
    });
  }
  render() {
    return (
      <section>
        <div className="Generate">
          Total flips are: {this.state.totalFlips}, number of tails: {this.state.tailNum}, number of heads: {this.state.headNum}
        </div>
        {this.state.currentCoin && (
          <img src={this.state.currentCoin.imgSrc} alt={this.state.currentCoin.side} />
        )}
        <button onClick={this.generate}>Flip the coin.</button>
      </section>
    );
  }
}

export default Generate;
