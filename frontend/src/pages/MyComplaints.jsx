
import './MyComplaints.css'

function MyComplaints() {

  const complaints = [
    {
      id: 'CIVIC001',
      category: 'Road Damage',
      date: '25-11-2026',
      location: 'Main Road',
      status: 'Pending'
    },
    {
      id: 'CIVIC002',
      category: 'Water Supply',
      date: '24-11-2026',
      location: 'North Street',
      status: 'In Progress'
    },
    {
      id: 'CIVIC003',
      category: 'Street Light',
      date: '23-11-2026',
      location: 'Market Road',
      status: 'Resolved'
    }
  ]

  return (
    <div className="my-complaints-page">

      <div className="my-complaints-header">
        <h1>My Complaints</h1>
        <p>View and manage all your submitted complaints.</p>
      </div>

      {/* Summary Cards */}
      <div className="complaint-stats">

        <div className="complaint-stat total">
          <h3>Total Complaints</h3>
          <h1>{complaints.length}</h1>
        </div>

        <div className="complaint-stat pending">
          <h3>Pending</h3>
          <h1>{complaints.filter(c => c.status === 'Pending').length}</h1>
        </div>

        <div className="complaint-stat progress">
          <h3>In Progress</h3>
          <h1>{complaints.filter(c => c.status === 'In Progress').length}</h1>
        </div>

        <div className="complaint-stat resolved">
          <h3>Resolved</h3>
          <h1>{complaints.filter(c => c.status === 'Resolved').length}</h1>
        </div>

      </div>

      {/* Complaints Table */}
      <div className="complaints-table-container">

        <h2>Complaint History</h2>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Category</th>
                <th>Date</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.category}</td>
                  <td>{complaint.date}</td>
                  <td>{complaint.location}</td>
                  <td>
                    <span className={`status-badge ${complaint.status.toLowerCase().replace(' ', '-')}`}>
                      {complaint.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  )
}

export default MyComplaints
