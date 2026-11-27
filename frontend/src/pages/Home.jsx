
import '../App.css'

function Home() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2 className="logo">CivicFix<span>.</span></h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-buttons">
          <a href="/login"><button className="login-btn">Login</button></a>
          <a href="/register"><button className="register-btn">Register</button></a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="tagline">SMARTER CITIES. BETTER LIVING.</p>

          <h1>
            Report Issues.
            <br />
            <span>Build a Better City.</span>
          </h1>

          <p className="description">
            CivicFix helps citizens report public problems,
            track complaints and connect with local authorities
            to make communities cleaner, safer and better.
          </p>

          <div className="hero-buttons">
            <a href="/submit-complaint">
              <button className="primary-btn">Report a Complaint →</button>
            </a>

            <a href="/track-complaint">
              <button className="secondary-btn">Track Complaint</button>
            </a>
          </div>

          <div className="stats">
            <div><h2>24/7</h2><p>Complaint Access</p></div>
            <div><h2>100%</h2><p>Transparency</p></div>
            <div><h2>One</h2><p>Connected Platform</p></div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-card">
            <div className="image-icon">🏙️</div>
            <h3>Let's Fix Our City</h3>
            <p>Your voice can make a difference.</p>
            <div className="status">● Community First</div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <p className="tagline">WHAT WE DO</p>
        <h2>Making Public Services Better</h2>

        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">📢</div>
            <h3>Report Issues</h3>
            <p>Submit complaints about roads, water, waste and public facilities.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>Track Progress</h3>
            <p>Track your complaint using a unique complaint ID.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3>Faster Resolution</h3>
            <p>Connect complaints with the relevant departments.</p>
          </div>
        </div>
      </section>

      <footer id="about">
        <h2>CivicFix<span>.</span></h2>
        <p>Building better communities through citizen participation.</p>
        <p>© 2026 CivicFix. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default Home

