//import React from 'react';
//import ReactDom from 'react-dom';
//import * as App from './App.css';

//class Seat extends React.Component {
//  render() {
//    return (
//      <button className="seat" onClick={() => this.props.onClick()}>
//        {this.props.value}
//      </button>
//    );
//  }
//}
//
//class SeatChart extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      seats: Array(9).fill('E'),
//    };
//  }
//
//  handleClick(i) {
//    const seats = this.state.seats.slice();
//    seats[i] = 'X';
//    this.setState({seats: seats});
//  }
//  renderSeat(i) {
//    return (
//      <Seat
//        value={this.state.seats[i]}
//        onClick={() => this.handleClick(i)}
//      />
//    );
//  }
//
//  render() {
//    const status = 'Select Seat: X';
//
//    return (
//      <div>
//        <div className="status">{status}</div>
//        <div className="board-row">
//          {this.renderSeat(0)}
//          {this.renderSeat(1)}
//          {this.renderSeat(2)}
//        </div>
//        <div className="board-row">
//          {this.renderSeat(3)}
//          {this.renderSeat(4)}
//          {this.renderSeat(5)}
//        </div>
//        <div className="board-row">
//          {this.renderSeat(6)}
//          {this.renderSeat(7)}
//          {this.renderSeat(8)}
//        </div>
//      </div>
//    );
//  }
//}
//
//class App extends React.Component {
//  render() {
//      return (
//            <div className="game">
//              <div className="game-board">
//                <SeatChart />
//              </div>
//              <div className="game-info">
//                <div>{/* status */}</div>
//                <ol>{/* TODO */}</ol>
//              </div>
//            </div>
//          );
//    }
//}
//
//export default App;
//