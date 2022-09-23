import Home from "./Views/Home";
import { Routes, Route} from 'react-router-dom'
import Login from "./Views/Login/Login";
import Register from "./Views/Register/Register";
function App() {
 
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
    </Routes>
    </>
  );
}

export default App;
