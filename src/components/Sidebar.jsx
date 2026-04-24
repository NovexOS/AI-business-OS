import { Link } from "react-router-dom";

export default function Sidebar(){
  return(
    <div className="w-64 h-screen bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-10">AI OS</h2>

      <ul className="space-y-4">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
      </ul>
    </div>
  )
}