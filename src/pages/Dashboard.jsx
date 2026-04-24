export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 shadow rounded">
          <h2>Total Leads</h2>
          <p className="text-2xl">245</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2>Active Bots</h2>
          <p className="text-2xl">12</p>
        </div>

        <div className="bg-white p-6 shadow rounded">
          <h2>Automation Flows</h2>
          <p className="text-2xl">34</p>
        </div>

      </div>
    </div>
  )
}