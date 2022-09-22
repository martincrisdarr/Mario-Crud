import React from "react";

function NoteModal({ note, onClose, onChange, onSave }) {
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
      >
        <h1 className="title">Create / Edit note</h1>
        <div className="nes-field">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => onChange("title", e.target.value)}
            value={note.title}
            type="text"
            id="title"
            className="nes-input"
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            onChange={(e) => onChange("content", e.target.value)}
            value={note.content}
            id="content"
            className="nes-textarea"
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
          <button className="nes-btn is-error" onClick={onClose}>
            Close
          </button>
          <button onClick={onSave} className="nes-btn is-success">Save</button>
        </div>
      </form>
    </section>
  );
}

export default NoteModal;
