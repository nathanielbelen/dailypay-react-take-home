import React from 'react';
import './Nominee.css';

const Nominee = ({ nominee: { title, photoUrL, id }, setSelectedId, selectedId, categoryId }) => {
  return (
    <StyledDiv id={id} selectedId={selectedId} setSelectedId={setSelectedId} categoryId={categoryId}>
      <label className='movieTitle' htmlFor={id}>{title}</label>
      <img className='movieImage' src={photoUrL} alt={title} />
    </StyledDiv>
  )
}

const StyledDiv = ({ id, selectedId, setSelectedId, categoryId, children }) => {

  const handleClick = (e) => {
    setSelectedId(id);
  }

  if (id === selectedId) {
    return (
      <div className='nominee'>
        <div className='card selected'>
          {children}
          <input type='radio' name={categoryId} className='selectMovieButton selected' value={id} onClick={handleClick}/>
        </div>
      </div>
    )
  }
  return (
    <div className='nominee'>
      <div className='card'>
        {children}
          <input type='radio' name={categoryId} value={id}  className='selectMovieButton' onClick={handleClick} />
      </div>
    </div>
  )
}

export default Nominee;