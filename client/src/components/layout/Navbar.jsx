import { FaBell, FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8 shadow-sm">

      <div className="flex items-center gap-3">

        <div className="relative">

          <FaSearch className="absolute left-3 top-3 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-lg border w-80 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      <div className="flex items-center gap-6">

        <button className="text-xl text-gray-600 hover:text-blue-600">
          <FaBell />
        </button>

        <div className="flex items-center gap-2 cursor-pointer">

          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">

            <FiUser />

          </div>

          <div>

            <p className="font-semibold">
              Chintan
            </p>

            <span className="text-xs text-gray-500">
              Developer
            </span>

          </div>

        </div>

      </div>

    </header>
  );
}