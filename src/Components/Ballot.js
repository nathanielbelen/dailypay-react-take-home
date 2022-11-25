import { useState, useMemo } from 'react';
import './Ballot.css';
import Category from './Category'
import SubmitButton from './SubmitButton'

const Ballot = ({ ballotData: { items = [] } }) => {
  let [ballotPicks, setBallotPicks] = useState({});

  let categories = useMemo(() => {
    return items.map((groups) => {
      return groups.id
    })
  }, [items])

  return (
    <div className='ballot'>
      <fieldset>
        {items.map((category, index) => {
          return (
            <Category category={category} key={index} setBallotPicks={setBallotPicks} ballotPicks={ballotPicks} />
          )
        })}
        <SubmitButton ballotPicks={ballotPicks} categories={categories}/>
      </fieldset>
    </div>
  )
}

export default Ballot;