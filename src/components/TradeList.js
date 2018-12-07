import React from 'react';
import { connect } from 'react-redux';
import TradeListItem from './TradeListItem';
import selectTrades from '../selectors/trades';

export const TradeList = (props) => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Trades</div>
      <div className="show-for-desktop">Trade</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.trades.length === 0 ? (
          <div>
            <span className="list-item list-item--message">No trades to show</span>
          </div>
        ) : (
          props.trades.map((trade) => <TradeListItem key={trade.id} {...trade}/>)
        )
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    trades: selectTrades(state.trades, state.filters)
  };
};

export default connect(mapStateToProps)(TradeList);
