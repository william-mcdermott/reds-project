import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TradeListItem = ({ id, redsPlayers, otherPlayers, comment, team, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{team}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMM Do YYYY, h:mm a')}</span>
    </div>
    <h3 className="list-item__data">{`You discussed trading ${redsPlayers} for ${otherPlayers}`}</h3>
    <p>{comment}</p>
  </Link>
)

export default TradeListItem;
