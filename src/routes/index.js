import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import FavouriteMentor from "../pages/favourite-mentor";
import Booking from "../pages/booking";
import MenteeProfile from "../pages/mentee-profile";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/bookings" element={<Booking />} />
      <Route path="/favorite-mentor" element={<FavouriteMentor />} />
      <Route path="/mentee/:menteeId" element={<MenteeProfile />} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
};

export default AppRoute;
