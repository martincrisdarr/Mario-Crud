function NoteCard({ note, handleDelete, handleEdit }) {
  return (
    <main
      className="nes-container"
      style={{
        backgroundColor: "whitesmoke",
        maxWidth: "90%",
        overflow: "hidden",
      }}
    >
      <h3>{note.title}</h3>
      <p style={{color: 'gray'}}>{note.description}</p>
      <p>Last edited: {note.lastEdited}</p>
      <section
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
        }}
      >
        <button className="nes-btn is-primary" onClick={handleEdit}>
          Editar
        </button>
        <button className="nes-btn is-error" onClick={handleDelete}>
          Borrar
        </button>
      </section>
    </main>
  );
}

export default NoteCard;
