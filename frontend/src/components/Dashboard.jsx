import { useEffect, useState } from "react";
import { getHealth } from "../api/api";

function Dashboard() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    getHealth()
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Backend Connection Failed"));
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[500px]">
        <h1 className="text-4xl font-bold text-center mb-4">
          ECS Fargate Demo 🚀
        </h1>

        <p className="text-center text-gray-600 mb-6">
          React + Vite + Tailwind + Flask
        </p>

        <div className="bg-green-100 p-4 rounded-lg">
          <p className="font-semibold">Backend Response:</p>

          <p className="mt-2 text-green-700">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
