import React from 'react';
import './Ballot.css';
import Category from './Category'

const Ballot = ({ ballotData: { items = [] } }) => {
  return (
    <div className='ballot'>
      {items.map((category, index) => {
        console.log(category);
        return (<Category category={category} key={index} />)
      })}
    </div>
  )
}

export default Ballot;