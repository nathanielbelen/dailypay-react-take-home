import { useEffect, useState, useCallback } from 'react';
import './App.css';
import Ballot from './Components/Ballot';
import api from './Api/Api';

function App() {
  const [ballotData, setBallotData] = useState({});

  useEffect(() => {
    api.getBallotData()
      .then((data) => {
        setBallotData(data);
      })
  }, [])

  return (
    <div className='App'>
      <header className='title'>AWARDS 2021</header>
      <div className='container'>
        <Ballot ballotData={ballotData} />
      </div>
    </div>
  );
}

export default App;
