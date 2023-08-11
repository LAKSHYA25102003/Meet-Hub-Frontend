import './App.css';
import Home from './Pages/Home/Home';
import Room from './Pages/Room/Room';
import RoomState from './Context/Room/RoomState';
import PreMeet from './Pages/PreMeet/PreMeet';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <RoomState>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/room" element={<PreMeet />}></Route>
            <Route path="/room/:id" element={<Room />}></Route>
          </Routes>
    </RoomState>
  );
}

export default App;
