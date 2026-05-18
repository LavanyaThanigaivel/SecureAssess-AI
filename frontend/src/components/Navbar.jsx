import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 shadow-lg px-8 py-4 flex justify-between items-center border-b border-slate-800">

      {/* Logo */}
      <h1 className="text-2xl font-bold text-cyan-400">
        AI Exam Platform
      </h1>

      {/* Navigation Buttons */}
      <div className="space-x-4">

        <Link
          to="/login"
          className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-4 py-2 bg-cyan-500 text-slate-900 rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          Register
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;