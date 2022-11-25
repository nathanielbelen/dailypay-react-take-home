import { useCallback, useState, useEffect } from 'react';
import api from '../Api/Api';
import './SubmitButton.css';

const SubmitButton = ({ ballotPicks, categories }) => {
  const [missing, setMissing] = useState([]);
  const [modalDisplay, setModalDisplay] = useState('none')

  useEffect(() => {
    if (ballotPicks) {
      const picked = Object.keys(ballotPicks)
      const missing = [];
      if (picked.length === 7) {
        setMissing(missing);
      }
      else {
        categories.forEach((category) => {
          if (!ballotPicks[category]) missing.push(category);
        });
        setMissing(missing);
      }
    }
  }, [ballotPicks, categories])

  const sendBallotPicks = useCallback(() => {
    console.log('sending data!')
    api.sendBallotData(ballotPicks)
      .then((res) => {
        console.log(res)
      })
  }, [ballotPicks])

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalDisplay('block')
    if (missing.length === 0) {
      console.log('no categories missing, sending: ', ballotPicks)
      sendBallotPicks()
    } else {
      console.log('error, missing categories: ', missing)
    }
  }

  return (
    <>
      <div className='submitContainer'>
        <input type='submit' className='submitBallot' onClick={handleSubmit} value='SUBMIT BALLOT' />
      </div>
      <div id='modal' style={{display: modalDisplay}}>
        <div id='modal-content'>
          <span id="close" onClick={() => {
            setModalDisplay('none')
          }}>&times;</span>
          <p>{missing.length === 0 ? 'SUCCESS' : 'FAILED, please choose a nominee from every category'}</p>
        </div>
      </div>
    </>
  )
}

export default SubmitButton;