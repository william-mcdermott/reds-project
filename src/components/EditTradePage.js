import React from 'react';
import { connect } from 'react-redux';
import TradeForm from './TradeForm';
import { startEditTrade, startRemoveTrade } from '../actions/trades'

export class EditTradePage extends React.Component {
  onSubmit = (trade) => {
    this.props.startEditTrade(this.props.trade.id, trade);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.startRemoveTrade({ id: this.props.trade.id })
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Trade</h1>
          </div>
        </div>
        <div className="content-container">
          <TradeForm
            trade={this.props.trade}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Trade</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditTrade: (id, trade) => dispatch(startEditTrade(id, trade)),
  startRemoveTrade: (data) => dispatch(startRemoveTrade(data)),
})

const mapStateToProps = (state, props) => {
  return {
    trade: state.trades.find((trade) => {
      return trade.id === props.match.params.id;
    })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditTradePage);
