import React from 'react';
import TradeList from './TradeList';
import TradeListFilters from './TradeListFilters';

const TradeDashboardPage = () => (
  <div>
    <TradeListFilters />
    <TradeList />
  </div>
);

export default TradeDashboardPage;
