import React from 'react';
import moment from 'moment';

const now = moment();

export default class TradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      redsPlayers: props.trade ? props.trade.redsPlayers : '',
      otherPlayers: props.trade ? props.trade.otherPlayers : '',
      comment: props.trade ? props.trade.comment : '',
      team: props.trade ? props.trade.team : '',
      createdAt: props.trade ? moment(props.trade.createdAt) : moment(),
      error: ''
    };
  }
  onRedsPlayersChange = (e) => {
    const redsPlayers = e.target.value;
    this.setState(() => ({ redsPlayers }));
  };
  onOtherPlayersChange = (e) => {
    const otherPlayers = e.target.value;
    this.setState(() => ({ otherPlayers }));
  };
  onCommentChange = (e) => {
    const comment = e.target.value;
    this.setState(() => ({ comment }));
  };
  onTeamChange = (e) => {
    const team = e.target.value;
    this.setState(() => ({ team }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.redsPlayers || !this.state.otherPlayers || !this.state.team) {
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
        redsPlayers: this.state.redsPlayers,
        otherPlayers: this.state.otherPlayers,
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
          placeholder="Reds Players Discussed"
          autoFocus
          className="text-input"
          value={this.state.redsPlayers}
          onChange={this.onRedsPlayersChange}
        />
        <input
          type="text"
          placeholder={this.state.team ? `${this.state.team} players discussed` : 'Other players discussed'}
          className="text-input"
          value={this.state.otherPlayers}
          onChange={this.onOtherPlayersChange}
        />
        <select
          className="select"
          onChange={this.onTeamChange}
          value={this.state.team}
        >
          <option value="">Select Team</option>
          <option value="Angels">Angels</option>
          <option value="Astros">Astros</option>
          <option value="Athletics">Athletics</option>
          <option value="Blue Jays">Blue Jays</option>
          <option value="Braves">Braves</option>
          <option value="Brewers">Brewers</option>
          <option value="Cardinals">Cardinals</option>
          <option value="Cubs">Cubs</option>
          <option value="Diamondbacks">Diamondbacks</option>
          <option value="Dodgers">Dodgers</option>
          <option value="Giants">Giants</option>
          <option value="Indians">Indians</option>
          <option value="Mariners">Mariners</option>
          <option value="Marlins">Marlins</option>
          <option value="Mets">Mets</option>
          <option value="Nationals">Nationals</option>
          <option value="Orioles">Orioles</option>
          <option value="Padres">Padres</option>
          <option value="Phillies">Phillies</option>
          <option value="Pirates">Pirates</option>
          <option value="Rangers">Rangers</option>
          <option value="Rays">Rays</option>
          <option value="Red Sox">Red Sox</option>
          <option value="Rockies">Rockies</option>
          <option value="Royals">Royals</option>
          <option value="Tigers">Tigers</option>
          <option value="Twins">Twins</option>
          <option value="White Sox">White Sox</option>
          <option value="Yankees">Yankees</option>
        </select>
        <textarea
          placeholder="Add comments for your trade"
          className="textarea"
          value={this.state.comment}
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
