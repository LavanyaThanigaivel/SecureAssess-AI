import { Outlet, Link } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">

      {/* Sidebar */}
      <div className="w-64 bg-slate-900 border-r border-slate-800 p-5">
        
        <h1 className="text-2xl font-bold text-cyan-400 mb-8">
          AI Exam Panel
        </h1>

        <nav className="flex flex-col space-y-4">

          <Link className="hover:text-cyan-400" to="/dashboard">
            Dashboard
          </Link>

          <Link className="hover:text-cyan-400" to="/dashboard/create-exam">
            Create Exam
          </Link>

          <Link className="hover:text-cyan-400" to="/dashboard/exams">
            Manage Exams
          </Link>

          <Link className="hover:text-cyan-400" to="/dashboard/results">
            Results
          </Link>

        </nav>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>

    </div>
  );
}

export default DashboardLayout;