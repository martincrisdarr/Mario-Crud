import Home from "./Views/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import NoteModal from "./Components/Notes/NoteModal";
import { AuthContextProvider } from "./firebaseContext/AuthContext";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-note" element={<NoteModal />}></Route>
          <Route path="/edit-note/:id" element={<NoteModal />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
