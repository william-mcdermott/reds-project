import uuid from 'uuid';
import database from '../firebase/firebase.js';


// ADD_EXPENSE
export const addTrade = (trade) => ({
  type: 'ADD_TRADE',
  trade
});

export const startAddTrade = (tradeData = {}) => {
  return (dispatch, getState) => {
    const {
      redsPlayers = '',
      otherPlayers = '',
      comment = '',
      team = '',
      createdAt = 0
    } = tradeData;
    const trade = { redsPlayers, otherPlayers, comment, team, createdAt }
    return database.ref('trades').push(trade).then((ref) => {
      dispatch(addTrade({
        id: ref.key,
        ...trade
      }))
    });
  };
};

// SET_TRADES
export const setTrades = (trades) => ({
  type: 'SET_TRADES',
  trades
});

export const startSetTrades = () => {
  return (dispatch, getState) => {
    return database.ref('trades')
      .once('value')
      .then((snapshot) => {
        const trades = [];
        snapshot.forEach((childSnapshot) => {
          trades.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setTrades(trades))
      })
  };
};
