import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
// import Profile from "./pages/Profile/Profile";
import Profile from "./pages/Profile/FinalProfile";
import Homepage from "./pages/Homepage/Homepage";
import LinearProgress from "@mui/material/LinearProgress";
import ScanQrCode from "./pages/ScanQR/ScanQrCode";
import { useSelector } from "react-redux";

function App() {
  // const creds = localStorage.getItem("profile");
  const loadingStatus = useSelector((state) => state.loading.isLoading);

  return (
    <>
      {loadingStatus && <LinearProgress />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateOutlet1 />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/scanqr" element={<ScanQrCode />} />
            <Route path="/" element={<Navigate to="/profile" />} />
          </Route>
          <Route path="/" element={<PrivateOutlet2 />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function PrivateOutlet1() {
  const creds = localStorage.getItem("email_password");

  return creds ? <Outlet /> : <Navigate to="/home" />;
}

function PrivateOutlet2() {
  const creds = localStorage.getItem("email_password");

  return !creds ? <Outlet /> : <Navigate to="/profile" />;
}

export default App;
