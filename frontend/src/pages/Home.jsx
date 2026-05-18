import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center mt-32 px-4">

        <h1 className="text-6xl font-bold mb-6 leading-tight">
          AI-Powered <span className="text-cyan-400">Online Examination</span> Platform
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mb-8">
          Conduct secure online examinations with AI-based webcam monitoring,
          tab-switch detection, suspicious activity tracking, and intelligent
          proctoring systems.
        </p>

        <div className="space-x-4">

          <button className="bg-cyan-500 text-slate-900 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-cyan-400 transition">
            Get Started
          </button>

          <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-xl text-lg hover:bg-cyan-400 hover:text-slate-900 transition">
            Learn More
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;