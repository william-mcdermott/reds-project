import React from 'react';
import moment from 'moment';

const now = moment();

export default class TradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.trade ? props.trade.description : '',
      note: props.trade ? props.trade.note : '',
      amount: props.trade ? (props.trade.amount / 100).toString() : '',
      createdAt: props.trade ? moment(props.trade.createdAt) : moment(),
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => {
        return {
          error: 'Please provide description and amount.'
        }
      })
    } else {
      this.setState(() => {
        return {
          error: ''
        }
      })
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <textarea
          placeholder="Add a note for your trade (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Trade</button>
        </div>
      </form>
    )
  }
}
