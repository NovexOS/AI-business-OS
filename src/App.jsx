import { BrowserRouter, Routes, Route } from "react-router-dom"
import Leads from "./pages/Leads"
import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Dashboard from "./pages/Dashboard"
import Automation from "./pages/Automation"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/automation" element={<Automation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>

    </BrowserRouter>
  )
}

export default App