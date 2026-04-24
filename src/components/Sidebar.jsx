import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-black text-white p-6">

      <h1 className="text-2xl font-bold mb-10">
        NovexOS
      </h1>

      <ul className="space-y-4">

        <li className="hover:text-gray-300">
          <Link to="/">Dashboard</Link>
        </li>

        <li className="hover:text-gray-300">
          <Link to="/crm">CRM</Link>
        </li>

        <li className="hover:text-gray-300">
          <Link to="/chatbot">AI Chatbot</Link>
        </li>

        <li className="hover:text-gray-300">
          <Link to="/automation">Automation</Link>
        </li>

        <li className="hover:text-gray-300">
          <Link to="/analytics">Analytics</Link>
        </li>

      </ul>

    </div>
  );
}