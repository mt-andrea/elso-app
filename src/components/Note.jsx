import React from 'react';

function Note(props){

  function kattintas() {
    props.torles(props.id)
  }

return(
  <div className='note'>
  <h1>{props.title}</h1>
  <p>{props.content}</p>
  <button onClick={kattintas}>X</button>
  </div>
  );}
export default Note;
