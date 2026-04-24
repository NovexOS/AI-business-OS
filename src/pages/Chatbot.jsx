import { useState } from "react";
import { leads } from "../data/leads";

export default function Chatbot() {

const [messages,setMessages] = useState([]);
const [input,setInput] = useState("");

function sendMessage(){

if(input==="") return;

let reply="Hello 👋 How can I help you today?";

if(input.toLowerCase().includes("hello")){
reply="Hello 👋 Nice to meet you";
}

if(input.toLowerCase().includes("price")){
reply="Our plan starts from $29/month";
}

if(input.toLowerCase().includes("demo")){
reply="You can book a demo on our website.";
}

if(input.toLowerCase().includes("contact")){
reply="Please tell me your name and email so our team can contact you.";
}

if(input.toLowerCase().includes("crm")){
reply="Our platform includes an AI powered CRM system.";
}

if(input.includes("@")){
leads.push({
email: input,
date: new Date()
});

reply="Thank you! Your details have been saved.";
}

setMessages([
...messages,
{text:input,user:true},
{text:reply,user:false}
]);

setInput("");

}

return (

<div style={{padding:"20px"}}>

<h2>AI Chatbot</h2>

<div style={{
border:"1px solid #ccc",
height:"300px",
overflowY:"scroll",
padding:"10px",
marginBottom:"10px"
}}>

{messages.map((msg,i)=>(
<div key={i} style={{
textAlign: msg.user ? "right" : "left",
margin:"5px"
}}>
<span style={{
background: msg.user ? "#007bff" : "#eee",
color: msg.user ? "#fff" : "#000",
padding:"8px 12px",
borderRadius:"10px",
display:"inline-block"
}}>
{msg.text}
</span>
</div>
))}

</div>

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Type message..."
style={{width:"80%",padding:"10px"}}
/>

<button
onClick={sendMessage}
style={{padding:"10px 20px",marginLeft:"10px"}}
>
Send
</button>

</div>

);

}