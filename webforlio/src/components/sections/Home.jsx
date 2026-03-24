import { LaptopMinimal } from "lucide-react";
export default function Home() {
  return (
    <div className="home-content">
      <div className="home-icon">
        <LaptopMinimal size={200} color="#ff8c00" strokeWidth={1} />
      </div>

      <h1 className="home-title">Hello World, </h1>
      <p className="home-subtitle">
        I'm an aspiring software developer and DevOps Engineer
      </p>
    </div>
  );
}
