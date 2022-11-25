import { useEffect, useState } from 'react';
import './App.css';
import Ballot from './Components/Ballot/Ballot';
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
    <div className="App">
      <Ballot ballotData={ballotData} />
    </div>
  );
}

export default App;
