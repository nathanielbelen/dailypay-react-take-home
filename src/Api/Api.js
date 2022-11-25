const api = {
  getBallotData() {
    return fetch('/api/getBallotData').then(res => {
      return res.json();
    });
  },
  sendBallotData(ballotData) {
    return fetch('/api/sendBallotData', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(ballotData)
    })
  }
};

export default api;