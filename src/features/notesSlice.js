import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  selectedNote: {},
};
export const notes = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, { payload }) => {
      state.notes.push(payload);
    },
    deleteNote: ({ notes }, { payload }) => {
      const noteFound = notes.find((note) => note.id === payload);
      if (noteFound) {
        notes.splice(notes.indexOf(noteFound), 1);
      }
    },
    selectNote: (state, { payload }) => {
      return {
        ...state,
        selectedNote: { payload },
      };
    },
    editNote: ({ notes }, { payload }) => {
      const { id, title, description, lastEdited } = payload;
      const noteFound = notes.find((note) => note.id === id);
      if (noteFound) {
        noteFound.title = title;
        noteFound.description = description;
        noteFound.lastEdited = ((new Date()).toString()).slice(0,10)
      }
    },
  },
});

export const { addNote, deleteNote, selectNote, editNote } = notes.actions;

export default notes.reducer;
