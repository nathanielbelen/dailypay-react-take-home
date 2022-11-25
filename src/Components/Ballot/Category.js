import React from 'react';
import './Category.css';
import Nominee from './Nominee'

const Category = ({ category: { id, items, title } }) => {
  return (<div className='category'>
    <div className='categoryTitle'>{title}</div>
    <div className='nominees'>
      {items.map((nominee, index) => {
        return (
          <Nominee nominee={nominee} key={index} />
        )
      })}

    </div>
  </div>)
}


export default Category;