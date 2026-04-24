export default function Login(){

return(

<div className="flex items-center justify-center h-screen bg-gray-100">

<div className="bg-white p-8 shadow rounded w-96">

<h1 className="text-2xl font-bold mb-6 text-center">
Login
</h1>

<input 
type="email"
placeholder="Email"
className="w-full border p-3 mb-4 rounded"
/>

<input 
type="password"
placeholder="Password"
className="w-full border p-3 mb-4 rounded"
/>

<button className="w-full bg-blue-600 text-white p-3 rounded">
Login
</button>

</div>

</div>

)

}