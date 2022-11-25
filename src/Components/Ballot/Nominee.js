import React from 'react';
import './Nominee.css';

const Nominee = ({ nominee: { title, photoUrL, id } }) => {
  return (<div className='nominee'>
    <div className='movieTitle'>{title}</div>
    <img className='movieImage' src={photoUrL} alt={title} />
    <button>Select Movie</button>
  </div>)
}


export default Nominee;