import { leads } from "../data/Leads.js";

export default function CRM() {

return (

<div style={{padding:"40px"}}>

<h1>CRM Dashboard</h1>

<table border="1" cellPadding="10">

<thead>
<tr>
<th>Email</th>
<th>Date</th>
</tr>
</thead>

<tbody>

{leads.map((lead,index)=>(
<tr key={index}>
<td>{lead.email}</td>
<td>{lead.date?.toString()}</td>
</tr>
))}

</tbody>

</table>

</div>

)

}