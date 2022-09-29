import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, editNote } from "../../features/notesSlice";
import { v4 as uuid } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";
function NoteModal({ setModal }) {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  const { selectedNote } = useSelector((state) => state.notes);
  const selected = selectedNote.payload;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setNote({
        title: selected.title,
        description: selected.description,
        id: selected.id,
      });
    }
  }, []);
  // ADD NOTE
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (id) {
      dispatch(editNote(note));
    } else if (note.title.length > 2) {
      dispatch(
        addNote({
          ...note,
          id: uuid(),
          lastEdited: new Date().toString().slice(0, 10),
        })
      );
    }
    if (note.title.length > 2) {
      navigate("/");
    }
  };
  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <section
      className="nes-dialog"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1",
      }}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0.2",
          width: "100%",
          height: "100%",
        }}
      />
      <form
        method="dialog"
        style={{
          backgroundColor: "white",
          zIndex: 1,
          padding: 16,
          border: "5px solid black",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        onSubmit={handleSubmit}
      >
        <h1 className="title">Create / edit note</h1>
        <div className="nes-field">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            autoFocus
            type="text"
            name="title"
            id="title"
            value={note.title}
            className="nes-input"
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            onChange={handleChange}
            name="description"
            id="content"
            className="nes-textarea"
            value={note.description}
          ></textarea>
        </div>
        <div
          className="dialog-menu"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 54px",
          }}
        >
          <Link to="/">
            <button
              type="button"
              className="nes-btn is-error"
              onClick={setModal}
            >
              Close
            </button>
          </Link>

          <button type="submit" className="nes-btn is-success">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}

export default NoteModal;
