import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
  useParams,
} from "react-router-dom";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import Profile from "./pages/Profile/Profile";
import Homepage from './pages/Homepage/Homepage';
import LinearProgress from "@mui/material/LinearProgress";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const creds = localStorage.getItem("profile");
  const loadingStatus = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  return (
    <>
      {loadingStatus && <LinearProgress />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateOutlet1 />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/" element={<PrivateOutlet2 />}>
            <Route path="/home" element={<Homepage />} />
            <Route path="/signIn" element={<SignIn />} />
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
