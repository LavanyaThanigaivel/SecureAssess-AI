import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation
    if (!organization || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // Fake registration logic
    console.log("Register Data:", {
      organization,
      email,
      password,
    });

    alert("Registration Successful!");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">

      <div className="bg-slate-900 p-10 rounded-2xl w-[400px] shadow-lg border border-slate-800">

        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
          Register
        </h2>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Organization Name"
            value={organization}
            onChange={(e) => setOrganization(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 p-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-6 p-3 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-cyan-500 text-slate-900 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            Register
          </button>

        </form>

        <p className="text-slate-400 text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;