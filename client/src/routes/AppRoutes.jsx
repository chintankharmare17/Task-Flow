import { Routes, Route } from "react-router-dom";

function Landing() {
  return (
    <div className="flex items-center justify-center h-screen text-5xl font-bold">
      🚀 TaskFlow
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}