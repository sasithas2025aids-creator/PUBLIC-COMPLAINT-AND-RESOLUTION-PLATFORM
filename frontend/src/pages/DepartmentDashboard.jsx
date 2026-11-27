
import { useState } from 'react'
import './AdminDashboard.css'

function DepartmentDashboard() {

  const [complaints, setComplaints] = useState([
    {
      id: 'CIVIC001',
      citizen: 'Arun',
      category: 'Road Damage',
      location: 'Main Road',
      department: 'Road Department',
      status: 'Pending',
      proof: ''
    },
    {
      id: 'CIVIC002',
      citizen: 'Priya',
      category: 'Water Supply',
      location: 'North Street',
      department: 'Water Department',
      status: 'In Progress',
      proof: ''
    },
    {
      id: 'CIVIC003',
      citizen: 'Kumar',
      category: 'Street Light',
      location: 'Market Road',
      department: 'Electrical Department',
      status: 'Pending',
      proof: ''
    }
  ])

  const updateStatus = (id, status) => {
    setComplaints(prev =>
      prev.map(c =>
        c.id === id ? { ...c, status } : c
      )
    )
  }

  const uploadProof = (id, file) => {
    if (!file) return

    setComplaints(prev =>
      prev.map(c =>
        c.id === id
          ? { ...c, proof: file.name }
          : c
      )
    )
  }

  return (
    <div className="admin-layout">

      <aside className="admin-sidebar">
        <h2>🛡 CivicFix</h2>
        <p>DEPARTMENT PANEL</p>

        <a href="/department-dashboard" className="admin-active">
          🏠 Dashboard
        </a>

        <a href="/login">🚪 Logout</a>
      </aside>

      <main className="admin-main">

        <header className="admin-topbar">
          <div>
            <h1>Department Dashboard</h1>
            <p>Manage assigned complaints and upload resolution proof</p>
          </div>

          <div className="admin-profile">
            👤 Department Staff
          </div>
        </header>

        <section className="admin-stats">

          <div className="admin-stat blue">
            <h3>Total Assigned</h3>
            <h1>{complaints.length}</h1>
          </div>

          <div className="admin-stat orange">
            <h3>Pending</h3>
            <h1>
              {complaints.filter(c => c.status === 'Pending').length}
            </h1>
          </div>

          <div className="admin-stat purple">
            <h3>In Progress</h3>
            <h1>
              {complaints.filter(c => c.status === 'In Progress').length}
            </h1>
          </div>

          <div className="admin-stat green">
            <h3>Resolved</h3>
            <h1>
              {complaints.filter(c => c.status === 'Resolved').length}
            </h1>
          </div>

        </section>

        <section className="admin-table-section">

          <h2>Assigned Complaints</h2>
          <p>Update complaint status and upload resolution proof.</p>

          <div className="admin-table-scroll">

            <table>
              <thead>
                <tr>
                  <th>Complaint ID</th>
                  <th>Citizen</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Status</th>
                  <th>Resolution Proof</th>
                </tr>
              </thead>

              <tbody>
                {complaints.map(c => (
                  <tr key={c.id}>
                    <td>{c.id}</td>
                    <td>{c.citizen}</td>
                    <td>{c.category}</td>
                    <td>{c.location}</td>

                    <td>
                      <select
                        value={c.status}
                        onChange={e =>
                          updateStatus(c.id, e.target.value)
                        }
                      >
                        <option>Pending</option>
                        <option>In Progress</option>
                        <option>Resolved</option>
                      </select>
                    </td>

                    <td>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={e =>
                          uploadProof(c.id, e.target.files[0])
                        }
                      />

                      {c.proof && (
                        <p>Uploaded: {c.proof}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </section>

      </main>
    </div>
  )
}

export default DepartmentDashboard
