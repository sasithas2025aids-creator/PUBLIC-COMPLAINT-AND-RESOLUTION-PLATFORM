
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Main Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

// Citizen Pages
import CitizenDashboard from './pages/CitizenDashboard'
import SubmitComplaint from './pages/SubmitComplaint'
import MyComplaints from './pages/MyComplaints'
import TrackComplaint from './pages/TrackComplaint'
import Feedback from './pages/Feedback'

// Admin Pages
import AdminDashboard from './pages/AdminDashboard'
import ManageComplaints from './pages/ManageComplaints'

// Department Page
import DepartmentDashboard from './pages/DepartmentDashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Citizen Dashboard */}
        <Route
          path="/citizen-dashboard"
          element={<CitizenDashboard />}
        />

        {/* Citizen Functions */}
        <Route
          path="/submit-complaint"
          element={<SubmitComplaint />}
        />

        <Route
          path="/my-complaints"
          element={<MyComplaints />}
        />

        <Route
          path="/track-complaint"
          element={<TrackComplaint />}
        />

        <Route
          path="/feedback"
          element={<Feedback />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

        {/* Manage Complaints */}
        <Route
          path="/manage-complaints"
          element={<ManageComplaints />}
        />

        {/* Department Dashboard */}
        <Route
          path="/department-dashboard"
          element={<DepartmentDashboard />}
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App
