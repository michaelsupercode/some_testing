import { useEffect, useState } from 'react';

function Edit({ fetchData, id }) {
  console.log(id);
  function editEntry() {
    console.log('edit bereich ist da');
  }
  return (
    <section className='form'>
      <form onSubmit={editEntry}>
        {/* error message erscheint wenn es einen error gibt (Joi) */}
        {/* {error && <div className='error-message'>{error.message}</div>} */}
        <div>
          <label htmlFor='name'>Vorname</label>
          <input type='text' id='name' name='name' />
        </div>
        <div>
          <label htmlFor='lastname'>Nachname</label>
          <input type='text' id='lastname' name='lastname' />
        </div>
        <div>
          <label htmlFor='email'>E-Mail</label>
          <input type='email' id='email' name='email' />
        </div>
        <div>
          <label htmlFor='message'>Nachricht</label>
          <input type='text' id='message' name='message' />
        </div>
        <div>
          <label htmlFor='userimg'>Bild</label>
          <input type='file' id='userimg' name='userimg' />
        </div>
        <input id='button' type='submit' value='Absenden' />
      </form>
    </section>
  );
}

export default Edit;
