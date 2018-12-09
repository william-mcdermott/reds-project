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

// REMOVE_TRADE
export const removeTrade = ({id} = {}) => ({
  type: 'REMOVE_TRADE',
  id
});

export const startRemoveTrade = ({id} = {}) => {
  return (dispatch, getState) => {
    return database.ref(`trades/${id}`).remove().then(() => {
      dispatch(removeTrade({id}))
    });
  };
};

// EDIT_TRADE
export const editTrade = (id, updates) => ({
  type: 'EDIT_TRADE',
  id,
  updates
});

export const startEditTrade = (id, updates) => {
  return (dispatch, getState) => {
    return database.ref(`trades/${id}`).update(updates).then(() => {
      dispatch(editTrade(id, updates))
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
