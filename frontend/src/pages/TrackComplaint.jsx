
import { useState } from 'react'
import './TrackComplaint.css'

function TrackComplaint() {
  const [complaintId, setComplaintId] = useState('')
  const [searched, setSearched] = useState(false)

  const handleTrack = (e) => {
    e.preventDefault()

    if (!complaintId.trim()) {
      alert('Please enter Complaint ID')
      return
    }

    setSearched(true)
  }

  return (
    <div className="track-page">

      <div className="track-container">

        <div className="track-icon">🔍</div>

        <h1>Track Your Complaint</h1>

        <p>
          Enter your unique Complaint ID to check
          the current status of your complaint.
        </p>

        <form onSubmit={handleTrack}>

          <label>Complaint ID</label>

          <input
            type="text"
            placeholder="Example: CIVIC001"
            value={complaintId}
            onChange={(e) => {
              setComplaintId(e.target.value)
              setSearched(false)
            }}
          />

          <button type="submit">
            Track Complaint →
          </button>

        </form>

        {searched && (
          <div className="track-message">
            <h3>Complaint ID Entered Successfully!</h3>
            <p>
              Your Complaint ID: <strong>{complaintId}</strong>
            </p>
            <p>
              Live complaint status will be available
              after MongoDB backend connection.
            </p>
          </div>
        )}

        <div className="track-help">
          <h3>How to Track?</h3>

          <p>1. Enter your Complaint ID.</p>
          <p>2. Click Track Complaint.</p>
          <p>3. View your complaint status.</p>
        </div>

      </div>

    </div>
  )
}

export default TrackComplaint
