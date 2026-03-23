export default function TheForge() {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="forge-content">
      <h2 className="section-title">The Forge</h2>
      <div className="blog-card">
        <div className="blog-header">
          <h3 className="blog-title">Steel</h3>
          <span className="blog-date">{today}</span>
        </div>
        <p className="blog-text">
          We're living in a very unsual time. Things are progressing faster than people can adapt. I think we're witnessing the widening of the technological divide in real time. 
          With all that's happening, who's taking time to bridge the gap between the nerds and normies? Could this finally be the moment we nerds create a new social class of our own?
          Find out next time on the Forge.
        </p>
      </div>
    </div>
  )
}
