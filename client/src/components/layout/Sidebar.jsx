import {
  FaHome,
  FaTasks,
  FaChartPie,
  FaCog
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Sidebar() {

  const menus = [

    {
      title: "Dashboard",
      icon: <FaHome />,
      path: "/app"
    },

    {
      title: "Tasks",
      icon: <FaTasks />,
      path: "/app/tasks"
    },

    {
      title: "Analytics",
      icon: <FaChartPie />,
      path: "/app/analytics"
    },

    {
      title: "Settings",
      icon: <FaCog />,
      path: "/app/settings"
    }

  ];

  return (

    <aside className="w-64 bg-slate-900 text-white min-h-screen">

      <div className="text-3xl font-bold p-8">

        🚀 TaskFlow

      </div>

      <nav>

        {menus.map((item) => (

          <Link

            key={item.title}

            to={item.path}

            className="flex items-center gap-4 px-8 py-4 hover:bg-slate-800 transition"

          >

            {item.icon}

            {item.title}

          </Link>

        ))}

      </nav>

    </aside>

  );
}