import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const JokeItem = ({avatar, link, value}) => {
  return (
        <div className='jokes-cont'>
          <ul className='joke-item'>
            <li className='img-cont'><img src={avatar} alt="avatar" /></li>
            <li className='value-cont'><p>{value}</p></li>
            <li className='link-cont'><a href={link}>Link</a></li>
          </ul>
          <br />
        </div>
  );
};

export default JokeItem;
