import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TradeListItem = ({ id, redsPlayers, otherPlayers, comment, team, createdAt }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3>{team}</h3>
      <p className="list-item__sub-title">{moment(createdAt).format('MMM Do YYYY, h:mm a')}</p>
      <p className="list-item__data">{`You discussed trading ${redsPlayers} for ${otherPlayers}`}</p>
      <h4>{comment ? 'Comments:' : ''}</h4>
      <p className="list-item__data">{comment}</p>
    </div>
  </Link>
)

export default TradeListItem;
