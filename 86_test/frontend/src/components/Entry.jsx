import { useEffect, useState } from 'react';
import Edit from './Edit';

function Entry({ entry, fetchData, edit, setEdit }) {
  // console.log(entry.id);
  // console.log(edit);
  return (
    <article className='entry'>
      <div className='container'>
        <div className='user'>
          <div className='img-wrapper'>
            <img
              src={`http://localhost:9898/${entry.userimg}`}
              alt={entry.name}
            />
          </div>
          <p className='name'>{entry.name}</p>
          <p className='email'>{entry.email}</p>
        </div>
        <div className='text'>
          <p>
            schrieb am <span>{entry.date}</span>
          </p>
        </div>
        <div className='message'>
          <p>{entry.message}</p>
        </div>
      </div>
      <div>
        <button onClick={() => setEdit(true)}>Eintrag bearbeiten</button>
        {edit && <Edit id={entry.id} />}
      </div>
    </article>
  );
}

export default Entry;
