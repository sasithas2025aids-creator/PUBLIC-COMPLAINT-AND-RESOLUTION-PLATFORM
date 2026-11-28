
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function onSubmit(data) {
    console.log("Login Details:", data);
    navigate('/dashboard');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">

      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">

        <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">
          CivicFix
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Smart Public Complaint Platform
        </p>

        <h2 className="text-xl font-semibold mb-5">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block mb-2">Email ID</label>

            <input
              type="email" placeholder="Enter your email" {...register("email", { required: "Email is required" })}
              className="w-full border p-2 rounded-md"
            />

            {errors.email && (<p className="text-red-500 text-sm">{errors.email.message} </p>
            )}
          </div>

          <div className="mb-5">
            <label className="block mb-2">Password</label>

            <input type="password" placeholder="Enter your password" {...register("password", { required: "Password is required",minLength: {value: 6, message: "Minimum 6 characters required"}})}
              className="w-full border p-2 rounded-md"
            />

            {errors.password && (<p className="text-red-500 text-sm"> {errors.password.message} </p>)}
          </div>

          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600" > Login </button>

        </form>

        <p className="text-center mt-5 text-gray-600">
          Don't have an account?

          <button type="button" onClick={() => navigate('/register')} className="text-blue-600 font-semibold ml-1" > Register </button>
        </p>

      </div>
    </div>
  );
}

export default Login;
