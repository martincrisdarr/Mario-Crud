

function NoteCard({ note, onArchive, onDelete, onEdit }) {
  return (
    <main className="nes-container" style={{backgroundColor: 'whitesmoke'}}>
      <h3>{note.title}</h3>
      <p>Last edited: {note.lastEdited}</p>
      <section style={{ display: "flex", gap: "20px" }}>
        <button onClick={()=> onArchive(note.id)} className="nes-btn is-success">Archivar</button>
        <button onClick={()=> onEdit(note)} className="nes-btn is-primary">Editar</button>
        <button onClick={()=>onDelete(note.id)} className="nes-btn is-error">Borrar</button>
      </section>
    </main>
  );
}

export default NoteCard;
