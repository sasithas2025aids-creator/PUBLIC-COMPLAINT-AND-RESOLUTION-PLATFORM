
import { useState } from 'react'
import './SubmitComplaint.css'

function SubmitComplaint() {
  const [form, setForm] = useState({
    category: '',
    description: '',
    location: ''
  })

  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.category || !form.description || !form.location) {
      alert('Please fill all required fields')
      return
    }

    alert('Complaint form validated! Backend connection is pending.')
  }

  return (
    <div className="complaint-page">
      <div className="complaint-container">

        <h1>Submit Public Complaint</h1>
        <p>Report public issues and help improve your city.</p>

        <form onSubmit={handleSubmit}>

          <label>Complaint Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({...form, category: e.target.value})}
          >
            <option value="">Select Category</option>
            <option>Road Damage</option>
            <option>Water Supply</option>
            <option>Garbage Collection</option>
            <option>Street Light</option>
            <option>Drainage Problem</option>
            <option>Other</option>
          </select>

          <label>Complaint Description</label>
          <textarea
            placeholder="Describe your public issue..."
            value={form.description}
            onChange={(e) => setForm({...form, description: e.target.value})}
            required
          />

          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          {image && <p>Selected: {image.name}</p>}

          <label>Location</label>
          <input
            type="text"
            placeholder="Enter your location"
            value={form.location}
            onChange={(e) => setForm({...form, location: e.target.value})}
            required
          />

          <button type="submit">Submit Complaint</button>

        </form>
      </div>
    </div>
  )
}

export default SubmitComplaint
