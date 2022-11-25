import { useState } from 'react';
import './Ballot.css';
import Category from './Category'

const Ballot = ({ ballotData: { items = [] } }) => {
  let [ballotPicks, setBallotPicks] = useState({});
  return (
    <div className='ballot'>
      {items.map((category, index) => {
        console.log(category);
        return (
          <Category category={category} key={index} setBallotPicks={setBallotPicks} ballotPicks={ballotPicks} />
        )
      })}
      <button className='submitBallot' onClick={() => {
        console.log(ballotPicks)
      }}>SUBMIT BALLOT</button>
    </div>
  )
}

export default Ballot;