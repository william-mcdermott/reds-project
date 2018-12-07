import React from 'react';
import moment from 'moment';

const now = moment();

export default class TradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      players: props.trade ? props.trade.players : '',
      comment: props.trade ? props.trade.comment : '',
      team: props.trade ? props.trade.team : '',
      createdAt: props.trade ? moment(props.trade.createdAt) : moment(),
      error: ''
    };
  }
  onPlayersChange = (e) => {
    const players = e.target.value;
    this.setState(() => ({ players }));
  };
  onCommentChange = (e) => {
    const comment = e.target.value;
    this.setState(() => ({ comment }));
  };
  onTeamChange = (e) => {
    console.log(e.target.value);
    const team = e.target.value;
    this.setState(() => ({ team }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.players || !this.state.team) {
      this.setState(() => {
        return {
          error: 'Please specify player(s) discussed and team.'
        }
      })
    } else {
      this.setState(() => {
        return {
          error: ''
        }
      })
      this.props.onSubmit({
        players: this.state.players,
        team: this.state.team,
        createdAt: this.state.createdAt.valueOf(),
        comment: this.state.comment
      })
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Players"
          autoFocus
          className="text-input"
          value={this.state.players}
          onChange={this.onPlayersChange}
        />
        <select
          className="select"
          onChange={this.onTeamChange}
        >
          <option value="angels">Angels</option>
          <option value="astros">Astros</option>
          <option value="athletics">Athletics</option>
          <option value="blue jays">Blue Jays</option>
          <option value="braves">Braves</option>
          <option value="brewers">Brewers</option>
          <option value="cardinals">Cardinals</option>
          <option value="cubs">Cubs</option>
          <option value="diamondbacks">Diamondbacks</option>
          <option value="dodgers">Dodgers</option>
          <option value="giants">Giants</option>
          <option value="indians">Indians</option>
          <option value="mariners">Mariners</option>
          <option value="marlins">Marlins</option>
          <option value="mets">Mets</option>
          <option value="nationals">Nationals</option>
          <option value="orioles">Orioles</option>
          <option value="padres">Padres</option>
          <option value="phillies">Phillies</option>
          <option value="pirates">Pirates</option>
          <option value="rangers">Rangers</option>
          <option value="rays">Rays</option>
          <option value="red sox">Red Sox</option>
          <option value="rockies">Rockies</option>
          <option value="royals">Royals</option>
          <option value="tigers">Tigers</option>
          <option value="twins">Twins</option>
          <option value="white sox">White Sox</option>
          <option value="yankees">Yankees</option>
        </select>
        <textarea
          placeholder="Add comments for your trade"
          className="textarea"
          value={this.state.note}
          onChange={this.onCommentChange}
        >
        </textarea>
        <div>
          <button className="button">Save Trade</button>
        </div>
      </form>
    )
  }
}
