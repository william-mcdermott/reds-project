import uuid from 'uuid';
import database from '../firebase/firebase.js';


// ADD_EXPENSE
export const addTrade = (trade) => ({
  type: 'ADD_TRADE',
  trade
});

export const startAddTrade = (tradeData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = tradeData;
    const trade = { description, note, amount, createdAt }
    return database.ref(`trades`).push(trade).then((ref) => {
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
    return database.ref(`trades`)
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
