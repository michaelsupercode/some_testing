import Entry from './Entry';

function List({ entries, fetchData, edit, setEdit }) {
  const handleEditClick = (entryId) => {
    setEdit((prev) => ({
      ...prev,
      [entryId]: true,
    }));
  };

  const handleEditClose = (entryId) => {
    setEdit((prev) => ({
      ...prev,
      [entryId]: false,
    }));
  };

  return (
    <section className='list'>
      {entries?.map((entry, key) => (
        <Entry
          entry={entry}
          key={entry.id}
          fetchData={fetchData}
          edit={edit}
          setEdit={setEdit}
          editMode={edit[entry.id]}
          openEdit={() => handleEditClick(entry.id)}
          closeEdit={() => handleEditClose(entry.id)}
        />
      ))}
    </section>
  );
}

export default List;
