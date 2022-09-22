import { useMemo, useState } from "react";
import "./App.css";
import api from "./Api/api";
import NoteCard from "./Components/Notes/NoteCard";
import NoteModal from "./Components/Notes/NoteModal";

function App() {
  const [notes, setNotes] = useState([]);
  const [draft, setDraft] = useState(null);
 
  // DELETE FUNCTION
  const handleDelete = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  // ARCHIVED FUNCTION
  const handleArchived = (id) => {
    setNotes((notes) =>
      notes.map((note) => {
        if (note.id === id) return note;
        return {
          ...note,
          archived: !note.archived,
        };
      })
    );
  };

  // EDIT FUNCTION
  const handleEdit = (note) => {
    setDraft(note);
  };

  // DRAFT CHANGE
  const handleDraftChange = (field, value) => {
    setDraft((draft) => ({
      ...draft,
      [field]: value,
    }));
  };

  // SAVE BUTTON
  const handleSave = () => {
    if (draft.id) {
      setNotes((notes) =>
        notes.map((note) => {
          if (note.id !== draft.id) return note;
          return {
            ...draft,
            lastEdited: new Date().toString().split(" ").slice(0, 3).join(" "),
          };
        })
      );
    } else {
      setNotes((notes) =>
        notes.concat({
          id: +new Date(),
          lastEdited: new Date().toString().split(" ").slice(0, 3).join(" "),
          ...draft,
        })
      );
    }
    setDraft(null);
  };

  return (
    <>
      <div>
        <h1>Mis notas</h1>
        <div>
        <button className="nes-btn" onClick={() => setDraft({ title: "" })}>
          Crear nota
        </button>
       
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 12,
          padding: 18,
        }}
      >
        {notes.map((note) => (
          <NoteCard
            onEdit={handleEdit}
            onDelete={handleDelete}
            onArchive={handleArchived}
            key={note.id}
            note={note}
          />
        ))}
      </div>
      {draft && (
        <NoteModal
          onSave={handleSave}
          onChange={handleDraftChange}
          note={draft}
          onClose={() => setDraft(null)}
        />
      )}
    </>
  );
}

export default App;
