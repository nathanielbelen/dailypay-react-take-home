import { useCallback } from 'react';
import api from '../Api/Api';

const SubmitButton = ({ ballotPicks }) => {

  let sendBallotPicks = useCallback(() => {
    api.sendBallotData(ballotPicks)
      .then((res) => {
        console.log(res)
      })
  }, [ballotPicks])

  return (
    <input type='submit' className='submitBallot' onClick={(e) => {
      e.preventDefault();
      sendBallotPicks()
      console.log(ballotPicks)
    }} value='SUBMIT BALLOT'/>
  )
}

export default SubmitButton;