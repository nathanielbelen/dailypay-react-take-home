import { useState, useEffect } from 'react';
import './Category.css';
import Nominee from './Nominee'

const Category = ({ category: { id, items, title }, ballotPicks, setBallotPicks }) => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedId) {
      const newPicks = { ...ballotPicks };
      newPicks[id] = selectedId;
      setBallotPicks(newPicks);
    }
  }, [selectedId])

  return (
    <div className='category'>
      <div className='categoryTitle'>{title}</div>
      <div className='nominees'>
        {items.map((nominee, index) => {
          return (
            <Nominee nominee={nominee} key={index} selectedId={selectedId} setSelectedId={setSelectedId} />
          )
        })}
      </div>
    </div>
  )
}


export default Category;