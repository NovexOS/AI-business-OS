export default function Pricing() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Pricing</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="border p-6 rounded">
          <h2 className="text-xl font-bold">Starter</h2>
          <p className="text-2xl mt-2">₹999 / month</p>
        </div>

        <div className="border p-6 rounded">
          <h2 className="text-xl font-bold">Growth</h2>
          <p className="text-2xl mt-2">₹2999 / month</p>
        </div>

        <div className="border p-6 rounded">
          <h2 className="text-xl font-bold">Enterprise</h2>
          <p className="text-2xl mt-2">₹9999 / month</p>
        </div>

      </div>
    </div>
  )
}