function Sidebar() {
  return (
    <div style={{
      width: "220px",
      height: "100vh",
      background: "#111",
      color: "white",
      padding: "20px",
      position: "fixed"
    }}>

      <h2>NovexOS</h2>

      <div style={{marginTop:"30px"}}>

        <p><a href="/" style={{color:"white"}}>Dashboard</a></p>
        <p><a href="/leads" style={{color:"white"}}>Leads</a></p>
        <p><a href="/automation" style={{color:"white"}}>Automation</a></p>
        <p><a href="/analytics" style={{color:"white"}}>Analytics</a></p>
        <p><a href="/about" style={{color:"white"}}>About</a></p>

      </div>

    </div>
  )
}

export default Sidebar