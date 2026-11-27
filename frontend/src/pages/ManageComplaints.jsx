
import { useState } from 'react'
import './AdminDashboard.css'

function ManageComplaints() {
  const [complaints, setComplaints] = useState([
    {
      id: 'CIVIC001',
      citizen: 'Arun',
      category: 'Road Damage',
      location: 'Main Road',
      status: 'Pending',
      department: 'Not Assigned'
    },
    {
      id: 'CIVIC002',
      citizen: 'Priya',
      category: 'Water Supply',
      location: 'North Street',
      status: 'In Progress',
      department: 'Water Department'
    },
    {
      id: 'CIVIC003',
      citizen: 'Kumar',
      category: 'Street Light',
      location: 'Market Road',
      status: 'Resolved',
      department: 'Electrical Department'
    },
    {
      id: 'CIVIC004',
      citizen: 'Divya',
      category: 'Garbage Collection',
      location: 'South Street',
      status: 'Pending',
      department: 'Not Assigned'
    }
  ])

  const updateStatus = (id, status) => {
    setComplaints(prev =>
      prev.map(c => c.id === id ? { ...c, status } : c)
    )
  }

  const updateDepartment = (id, department) => {
    setComplaints(prev =>
      prev.map(c => c.id === id ? { ...c, department } : c)
    )
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>🛡 CivicFix</h2>
        <p>ADMIN PANEL</p>

        <a href="/admin-dashboard">🏠 Dashboard</a>
        <a href="/manage-complaints" className="admin-active">
          📋 Manage Complaints
        </a>
        <a href="/login">🚪 Logout</a>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <h1>Manage Complaints</h1>
            <p>Review, assign and update citizen complaints</p>
          </div>
          <div className="admin-profile">👤 Administrator</div>
        </header>

        <section className="admin-table-section">
          <h2>All Complaints ({complaints.length})</h2>
          <p>Assign departments and update complaint status.</p>

          <div className="admin-table-scroll">
            <table>
              <thead>
                <tr>
                  <th>Complaint ID</th>
                  <th>Citizen</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Department</th>
                  <th>Status</th>
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
                        value={c.department}
                        onChange={e =>
                          updateDepartment(c.id, e.target.value)
                        }
                      >
                        <option>Not Assigned</option>
                        <option>Road Department</option>
                        <option>Water Department</option>
                        <option>Electrical Department</option>
                        <option>Sanitation Department</option>
                      </select>
                    </td>
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

export default ManageComplaints
