import { Link } from "react-router-dom";

export default function LandingNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b z-50">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        <h1 className="text-3xl font-bold text-blue-600">
          🚀 TaskFlow
        </h1>

        <nav className="flex items-center gap-8">

          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <Link
            to="/login"
            className="px-5 py-2 rounded-lg border hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
          >
            Get Started
          </Link>

        </nav>

      </div>
    </header>
  );
}