
import { Link } from 'react-router-dom'
import './CitizenDashboard.css'

function CitizenDashboard() {
  return (
    <div className="citizen-layout">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2>🛡 CivicFix</h2>
        <p className="side-label">MAIN MENU</p>

        <Link to="/citizen-dashboard" className="active">
          🏠 Dashboard
        </Link>

        <Link to="/submit-complaint">
          📝 Submit Complaint
        </Link>

        <Link to="/my-complaints">
          📋 My Complaints
        </Link>

        <Link to="/track-complaint">
          🔍 Track Complaint
        </Link>

        <Link to="/feedback">
          💬 Feedback
        </Link>

        <Link to="/login" className="logout">
          🚪 Logout
        </Link>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">

        <header className="topbar">
          <div>
            <h2>Citizen Dashboard</h2>
            <p>Welcome to CivicFix Portal</p>
          </div>
          <div className="profile">
            👤 Citizen
          </div>
        </header>

        <section className="welcome-banner">
          <h1>Welcome to CivicFix! 👋</h1>
          <p>
            Report public issues and help make
            your city a better place.
          </p>
          <Link to="/submit-complaint">
            + Report an Issue
          </Link>
        </section>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card blue">
            <h3>Total Complaints</h3>
            <h1>05</h1>
            <p>All submitted complaints</p>
          </div>

          <div className="stat-card orange">
            <h3>Pending</h3>
            <h1>02</h1>
            <p>Waiting for action</p>
          </div>

          <div className="stat-card purple">
            <h3>In Progress</h3>
            <h1>01</h1>
            <p>Currently processing</p>
          </div>

          <div className="stat-card green">
            <h3>Resolved</h3>
            <h1>02</h1>
            <p>Successfully completed</p>
          </div>

        </section>

        {/* Quick Actions */}
        <section className="quick-section">
          <h2>Quick Actions</h2>

          <div className="action-grid">

            <Link to="/submit-complaint" className="action-card">
              <span>📝</span>
              <h3>Submit Complaint</h3>
              <p>Report a new public issue</p>
            </Link>

            <Link to="/my-complaints" className="action-card">
              <span>📋</span>
              <h3>My Complaints</h3>
              <p>View all your complaints</p>
            </Link>

            <Link to="/track-complaint" className="action-card">
              <span>🔍</span>
              <h3>Track Complaint</h3>
              <p>Check complaint status</p>
            </Link>

            <Link to="/feedback" className="action-card">
              <span>💬</span>
              <h3>Feedback</h3>
              <p>Share your experience</p>
            </Link>

          </div>
        </section>

      </main>
    </div>
  )
}

export default CitizenDashboard
