import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TradeListItem = ({ id, redsPlayers, otherPlayers, comments, team, createdAt }) => (
  // <Link className="list-item" to={`/edit/${id}`}>
  <div className="list-item">
    <div>
      <h3 className="list-item__title">{comments}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY, h:mm a')}</span>
    </div>
    <h3 className="list-item__data">{team}</h3>
    <p>{`You discussed trading ${redsPlayers} for ${otherPlayers}`}</p>
  </div>
  // </Link>
)

export default TradeListItem;
