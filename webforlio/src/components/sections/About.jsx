export default function About() {
  return (
    <div className="about-content">
      <h2 className="section-title">About Me</h2>
      <div className="about-tiles">
        <div className="tile">
          <h3 className="tile-title">Lore</h3>
          <p className="tile-text">
           I'm a student at ITCA Durban North, enrolled in the Systems Development programme. I've got a passion for technology and people, I believe the future of tech of people-centric. I like to think of myself as a problem solver
          </p>
        </div>
        <div className="tile">
          <h3 className="tile-title">Skillset</h3>
          <p className="tile-text">
            Skilled in full-stack software Development, systems design and cloud technologies. 
          </p>
          <div className="tags">
            <span className="tag">C#</span>
            <span className="tag">Python</span>
            <span className="tag">Azure Cloud</span>
            <span className="tag">Full-stack Web Dev</span>
          </div>
        </div>
      </div>
    </div>
  )
}
