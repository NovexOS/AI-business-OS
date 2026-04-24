import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{display:"flex",gap:"20px",padding:"20px",background:"#111",color:"#fff"}}>
      <Link to="/" style={{color:"white"}}>Home</Link>
      <Link to="/features" style={{color:"white"}}>Features</Link>
      <Link to="/pricing" style={{color:"white"}}>Pricing</Link>
      <Link to="/about" style={{color:"white"}}>About</Link>
      <Link to="/dashboard" style={{color:"white"}}>Dashboard</Link>
    </nav>
  );
}