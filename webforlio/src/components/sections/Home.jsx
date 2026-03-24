import { LaptopMinimal } from "lucide-react";
export default function Home() {
  return (
    <div className="home-content">
      <div className="home-icon">
        <svg className="floating-laptop" viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
        
        <rect x="20" y="10" width="160" height="80" rx="4" fill="#1a1a1a" stroke="#ff8c00" strokeWidth="2"/>
        
        <defs>
          <linearGradient id="screenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8c00" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#ff8c00" stopOpacity="0.05"/>
          </linearGradient>
        </defs>
        <rect x="22" y="12" width="156" height="76" rx="3" fill="url(#screenGrad)"/>
       
        <ellipse cx="100" cy="95" rx="90" ry="12" fill="#1a1a1a" stroke="#ff8c00" strokeWidth="2"/>
      
        <rect x="95" y="88" width="10" height="7" fill="#ff8c00"/>
      </svg>
      </div>

      <h1 className="home-title">Siphelele Msane </h1>
      <p className="home-subtitle">
        I'm an aspiring software developer and DevOps Engineer
      </p>
    </div>
  );
}
