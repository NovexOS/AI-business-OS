import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "Mon", leads: 20 },
  { name: "Tue", leads: 45 },
  { name: "Wed", leads: 30 },
  { name: "Thu", leads: 60 },
  { name: "Fri", leads: 75 },
];

export default function Dashboard() {
  return (
    <div className="flex-1 p-6">

      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Total Leads</p>
          <h2 className="text-2xl font-bold">124</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">AI Conversations</p>
          <h2 className="text-2xl font-bold">532</h2>
        </div>

        <div className="bg-white shadow p-4 rounded-lg">
          <p className="text-gray-500">Revenue</p>
          <h2 className="text-2xl font-bold">$12,430</h2>
        </div>

      </div>

      {/* Leads Chart */}
      <div className="bg-white shadow p-6 rounded-lg mb-8">
        <h2 className="text-lg font-bold mb-4">Leads This Week</h2>

        <LineChart width={500} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="leads" stroke="#8884d8" />
        </LineChart>

      </div>

      {/* Activity */}
      <div className="bg-white shadow p-6 rounded-lg">

        <h2 className="text-lg font-bold mb-4">Recent Activity</h2>

        <ul className="space-y-2">

          <li>New lead from website</li>
          <li>AI chatbot started conversation</li>
          <li>Lead converted to customer</li>

        </ul>

      </div>

    </div>
  );
}