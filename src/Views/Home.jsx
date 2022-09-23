import { useState } from "react";
import "../App.css";
import NoteModal from "../Components/Notes/NoteModal";
import NoteCard from "../Components/Notes/NoteCard";
function Home() {
  const [notes, setNotes] = useState([]);
  const [draft, setDraft] = useState(null);
  // DELETE FUNCTION
  const handleDelete = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
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
        <h1>My notes</h1>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button className="nes-btn" onClick={() => setDraft({ title: "" })}>
            Create note
          </button>
          <button className="nes-btn is-warning">
            Logout
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

export default Home;
