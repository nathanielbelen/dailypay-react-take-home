import React from 'react';
import './Nominee.css';

const Nominee = ({ nominee: { title, photoUrL, id }, setSelectedId, selectedId }) => {
  return (
    <StyledDiv id={id} selectedId={selectedId} setSelectedId={setSelectedId}>
      <div className='movieTitle'>{title}</div>
      <img className='movieImage' src={photoUrL} alt={title} />
    </StyledDiv>
  )
}

const StyledDiv = ({ id, selectedId, setSelectedId, children }) => {

  const handleClick = (e) => {
    e.preventDefault();
    setSelectedId(id);
  }

  if (id === selectedId) {
    return (
      <div className='nominee'>
        <div className='card selected'>
          {children}
          <button className='selectMovieButton selected'>✔️</button>
        </div>
      </div>
    )
  }
  return (
    <div className='nominee'>
      <div className='card'>
        {children}
        <button className='selectMovieButton' onClick={handleClick}>Select Movie</button>
      </div>
    </div>
  )
}

export default Nominee;