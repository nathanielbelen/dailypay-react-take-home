import { useState, useEffect } from 'react';
import './Category.css';
import Nominee from './Nominee'

const Category = ({ category: { id, items, title }, ballotPicks, setBallotPicks, }) => {
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
      <legend className='categoryTitle'>{title}</legend>
      <div className='nominees'>
        {items.map((nominee, index) => {
          return (
            <Nominee categoryId={id} nominee={nominee} key={index} selectedId={selectedId} setSelectedId={setSelectedId} />
          )
        })}
      </div>
    </div>
  )
}


export default Category;