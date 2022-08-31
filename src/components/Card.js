import React from 'react';
import {Link} from 'react-router-dom'

const Card = () => {
  return (
    <div className='card' style={{marginTop: '20px'}}>
      <img src={''} alt={''} className='card-img-top'/>
      <div className='card-body'>
        <h5 className='card-title'>React JS</h5>
        <Link to={'/profile/'} className='btn btn-primary'>Открыть</Link>
      </div>
    </div>
  );
};

export default Card;