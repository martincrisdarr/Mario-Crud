import Home from "./Views/Home";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import NoteModal from "./Components/Notes/NoteModal";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-note" element={<NoteModal />}></Route>
        <Route path="/edit-note/:id" element={<NoteModal />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
