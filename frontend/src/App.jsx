import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import DashboardLayout from "./layouts/DashboardLayout";

import DashboardHome from "./pages/dashboard/DashboardHome";
import CreateExam from "./pages/dashboard/CreateExam";
import ManageExams from "./pages/dashboard/ManageExams";
import Results from "./pages/dashboard/Results";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
  <Route index element={<DashboardHome />} />
  <Route path="create-exam" element={<CreateExam />} />
  <Route path="exams" element={<ManageExams />} />
  <Route path="results" element={<Results />} />
</Route>
    </BrowserRouter>
  );
}

export default App;