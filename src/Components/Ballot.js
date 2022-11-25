import { useState, useCallback } from 'react';
import './Ballot.css';
import Category from './Category'
import SubmitButton from './SubmitButton'

const Ballot = ({ ballotData: { items = [] } }) => {
  let [ballotPicks, setBallotPicks] = useState({});

  return (
    <form className='ballot'>
      <fieldset>
      {items.map((category, index) => {
        console.log(category);
        return (
          <Category category={category} key={index} setBallotPicks={setBallotPicks} ballotPicks={ballotPicks} />
        )
      })}
      <SubmitButton />
      </fieldset>
    </form>
  )
}

export default Ballot;