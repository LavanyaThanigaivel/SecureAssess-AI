import { useState } from "react";

function Login() {

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

      const response = await fetch(
        "http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.text();

      alert(data);

      if (data === "Login Successful") {
        console.log("User Logged In");
      }

    } catch (error) {
      console.error(error);
      alert("Login Failed");
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