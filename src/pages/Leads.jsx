import { supabase } from "../supabaseClient"
import { useEffect, useState } from "react"
export default function Leads(){

const [leads,setLeads] = useState([])

useEffect(()=>{
 fetchLeads()
},[])

async function fetchLeads(){
 const { data, error } = await supabase
   .from("leads")
   .select("*")

 if(data){
   setLeads(data)
 }
}

return(

<div className="p-6">

<h1 className="text-2xl font-bold mb-6">
Leads Manager
</h1>

<table className="w-full bg-white shadow rounded">

<thead>
<tr className="border-b text-left">
<th className="p-3">Name</th>
<th className="p-3">Email</th>
<th className="p-3">Status</th>
<th className="p-3">Source</th>
</tr>
</thead>

<tbody>

{leads.map((lead,index)=>(
<tr key={index} className="border-b">
<td className="p-3">{lead.name}</td>
<td className="p-3">{lead.email}</td>
<td className="p-3">{lead.status}</td>
<td className="p-3">{lead.source}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}