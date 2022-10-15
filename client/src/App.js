import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Qrcode from './components/Qrcode';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/qrcode" element={<Qrcode />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
