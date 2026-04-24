import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Mon", leads: 20 },
  { name: "Tue", leads: 45 },
  { name: "Wed", leads: 30 },
  { name: "Thu", leads: 60 },
  { name: "Fri", leads: 75 },
]
export default function Dashboard() {
  
  return (
    <div className="flex">

      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-900 text-white p-6">

        <h2 className="text-2xl font-bold mb-10">
          AI OS
        </h2>

        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer">
            Dashboard
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Leads
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Automation
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Analytics
          </li>

          <li className="hover:text-blue-400 cursor-pointer">
            Settings
          </li>
        </ul>

      </div>

      {/* Main Content */}

      <div className="flex-1 p-10">

        <h1 className="text-3xl font-bold mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <p className="text-gray-500">Total Leads</p>
            <h2 className="text-3xl font-bold">
              124
            </h2>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <p className="text-gray-500">AI Conversations</p>
            <h2 className="text-3xl font-bold">
              532
            </h2>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-xl">
            <p className="text-gray-500">Revenue</p>
            <h2 className="text-3xl font-bold">
              ₹45,000
            </h2>
          </div>

        </div>
<div className="bg-white p-6 shadow rounded">

  <h2 className="text-xl font-bold mb-4">
    Leads Growth
  </h2>

  <LineChart width={500} height={300} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="leads" stroke="#2563eb" />
  </LineChart>

</div>
<div className="bg-white p-6 shadow rounded mt-10">

<h2 className="text-xl font-bold mb-4">
Recent Leads
</h2>

<table className="w-full">

<thead>
<tr className="text-left border-b">
<th className="p-2">Name</th>
<th className="p-2">Email</th>
<th className="p-2">Status</th>
<th className="p-2">Source</th>
</tr>
</thead>

<tbody>

<tr className="border-b">
<td className="p-2">Rahul</td>
<td className="p-2">rahul@gmail.com</td>
<td className="p-2">New</td>
<td className="p-2">Website</td>
</tr>

<tr className="border-b">
<td className="p-2">Aman</td>
<td className="p-2">aman@gmail.com</td>
<td className="p-2">Contacted</td>
<td className="p-2">WhatsApp</td>
</tr>

<tr>
<td className="p-2">Priya</td>
<td className="p-2">priya@gmail.com</td>
<td className="p-2">Qualified</td>
<td className="p-2">Facebook</td>
</tr>

</tbody>
</table>

</div>
      </div>

    </div>
  )
}