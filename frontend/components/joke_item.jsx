import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JokeItem = ({avatar, link, value}) => {
  return (
        <div>
          <ul>
            <li>{avatar}</li>
            <li>{value}</li>
            <li>{link}</li>
          </ul>
          <br />
        </div>
  );
};

export default JokeItem;
