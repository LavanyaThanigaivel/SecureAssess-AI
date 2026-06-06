import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await API.post(
        "/users/login",
        formData
      );

      localStorage.setItem(
        "token",
        response.data.token
      );

      alert("Login Successful");

      console.log(response.data);

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">

      <form
        onSubmit={handleSubmit}
        className="bg-slate-900 p-8 rounded-xl shadow-lg w-96"
      >

        <h2 className="text-3xl text-cyan-400 font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-4 rounded bg-slate-800 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded"
        >
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;