import { useState } from 'react';

function Form({ fetchData, edit, setEdit }) {
  const [error, setError] = useState(null);
  const writeNewEntry = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const new_date = new Date();
    let date = new_date.toLocaleDateString();
    form.set('date', date);

    fetch('http://localhost:9898/api/entries', {
      method: 'POST',
      body: form,
    }).then((res) => {
      if (res.ok) {
        console.log('gästebucheintrag wurde erstellt!');
        window.alert('Dein Gästebucheintrag wurde erfolgreich erstellt !!!!!!');
        fetchData();
        e.target.reset();
        setError(null);
      } else {
        // Joi error handling hier
        res.json().then((data) => setError(data));
      }
    });
  };

  return (
    <section className='form'>
      <form onSubmit={writeNewEntry}>
        {/* error message erscheint wenn es einen error gibt (Joi) */}
        {error && <div className='error-message'>{error.message}</div>}
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
          <label htmlFor='userimg'>Profilbild</label>
          <input type='file' id='userimg' name='userimg' />
        </div>
        <input id='button' type='submit' value='Absenden' />
      </form>
    </section>
  );
}

export default Form;
