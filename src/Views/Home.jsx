import "../App.css";
import NoteCard from "../Components/Notes/NoteCard";
import { useSelector, useDispatch } from "react-redux";
import { deleteNote, selectNote } from "../features/notesSlice";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../firebaseContext/AuthContext";
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const { notes } = useSelector((state) => state.notes);
  const {user, logout} = UserAuth()
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleEdit = (note) => {
    dispatch(selectNote(note))
    navigate(`/edit-note/${note.id}`)
  }
  const handleLogout = async () => {
    try {
      await logout()
      navigate('/login')
    }catch (e) {
      console.log(e.message)
    }
  }
  useEffect(()=>{
    if(!user){
      setLoading(true)
      navigate('/login')
      
    }
  },[])
  if(!user) return <h1>You are not connected. Please <Link to ='/login'>Log in</Link></h1>
  return (
    <>
      <div>
        <h1>My notes</h1>
        <p>User: {user && user.email}</p>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            gap: 10,
          }}
        >
          <Link to='/create-note'><button className="nes-btn" onClick={() => dispatch(selectNote(null))}>Create note</button></Link>
          <button className="nes-btn">Total notes : {notes.length}</button>
          <button onClick={handleLogout} className="nes-btn is-warning">Logout</button>
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
            key={note.id}
            note={note}
            handleDelete={() => dispatch(deleteNote(note.id))}
            handleEdit={() => handleEdit(note)}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
