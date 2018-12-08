import moment from 'moment';

// Get visible trades
export default (trades, { text, sortBy }) => {
  return trades.filter((trade) => {
    const createdAtMoment = moment(trade.createdAt)
    const textMatch = trade.team.toLowerCase().includes(text.toLowerCase());

    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
  });
};
