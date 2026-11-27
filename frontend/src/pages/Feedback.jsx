
import { useState } from 'react'
import './Feedback.css'

function Feedback() {

  const [formData, setFormData] = useState({
    complaintId: '',
    rating: '',
    quality: '',
    comments: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert('Thank you! Your feedback has been submitted.')

    setFormData({
      complaintId: '',
      rating: '',
      quality: '',
      comments: ''
    })
  }

  return (
    <div className="feedback-page">

      <div className="feedback-container">

        <h1>CivicFix Feedback</h1>

        <p className="feedback-subtitle">
          Share your experience with us.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Complaint ID</label>
          <input
            type="text"
            name="complaintId"
            placeholder="Enter Complaint ID"
            value={formData.complaintId}
            onChange={handleChange}
            required
          />

          <label>Rate Our Service</label>
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select Rating</option>
            <option value="5">★★★★★ - Excellent</option>
            <option value="4">★★★★ - Very Good</option>
            <option value="3">★★★ - Good</option>
            <option value="2">★★ - Average</option>
            <option value="1">★ - Poor</option>
          </select>

          <label>Service Quality</label>
          <select
            name="quality"
            value={formData.quality}
            onChange={handleChange}
            required
          >
            <option value="">Select Service Quality</option>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Poor">Poor</option>
          </select>

          <label>Your Comments</label>
          <textarea
            name="comments"
            placeholder="Write your feedback here..."
            value={formData.comments}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Submit Feedback
          </button>

        </form>

      </div>

    </div>
  )
}

export default Feedback
