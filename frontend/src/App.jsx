import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";
import Itinerary from "./pages/itinerary/itinerary";
import NewItinerary from "./pages/itinerary/NewItinerary";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Layout from "./components/Layout";
import EditItinerary from "./pages/itinerary/EditItinerary";

function App() {
  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/new-itinerary" element={<NewItinerary />} />
        <Route path="/edit-itinerary" element={<EditItinerary />} />
      </Route>
    </Routes>
  );
}

export default App;
