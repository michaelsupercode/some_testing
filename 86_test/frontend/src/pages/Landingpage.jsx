import Form from '../components/Form';
import List from '../components/List';

function Landingpage({ entries, fetchData, edit, setEdit }) {
  return (
    <>
      <section className='landingpage'>
        <div className='content'>
          <h1>GÄSTEBUCH</h1>
          <Form fetchData={fetchData} edit={edit} setEdit={setEdit} />
          <List entries={entries} edit={edit} setEdit={setEdit} />
        </div>
      </section>
    </>
  );
}

export default Landingpage;
