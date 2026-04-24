export default function Home() {
  return (
    <div className="text-center p-10">

      <h1 className="text-5xl font-bold mb-4">
        AI Business Automation OS
      </h1>

      <p className="text-lg mb-6">
        Automate your entire business using powerful AI agents.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-lg">
        Start Free Trial
      </button>

      <h2 className="text-3xl font-bold mt-16 mb-8">
        Core Modules
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">AI CRM</h3>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">AI Chatbot</h3>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Workflow Automation</h3>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Marketing Automation</h3>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Sales Automation</h3>
        </div>

        <div className="border p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold">Analytics Dashboard</h3>
        </div>

      </div>

    </div>
  )
}