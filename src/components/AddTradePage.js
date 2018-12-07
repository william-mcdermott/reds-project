import React from 'react';
import { connect } from 'react-redux';
import TradeForm from './TradeForm';
import { startAddTrade } from '../actions/trades';

export class AddTradePage extends React.Component {
  onSubmit = (trade) => {
    this.props.startAddTrade(trade);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Trade</h1>
          </div>
        </div>
        <div className="content-container">
          <TradeForm
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddTrade: (trade) => dispatch(startAddTrade(trade))
});

export default connect(undefined, mapDispatchToProps)(AddTradePage);
