
import '../App.css'

function Register() {
  return (
    <div className="login-page">
      <h1>CivicFix Registration</h1>
      <p>Create your citizen account</p>

      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required />
        <input type="password" placeholder="Create Password" required />
        <input type="password" placeholder="Confirm Password" required />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
