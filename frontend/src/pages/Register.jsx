
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Register() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  function onSubmit(data) {
    console.log("Register Details:", data);
    navigate('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg--100">

      <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">

        <h1 className="text-2xl font-bold text-center text-blue-600 mb-2">
          CivicFix
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Create Your Account
        </p>

        <h2 className="text-xl font-semibold mb-5">
          Register
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block mb-2">Full Name</label>

            <input type="text" placeholder="Enter your name" {...register("name", {required: "Name is required"})} className="w-full border p-2 rounded-md"/>

            {errors.name && (<p className="text-red-500 text-sm"> {errors.name.message} </p>)}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Email ID</label>

            <input type="email" placeholder="Enter your email" {...register("email", { required: "Email is required"})}className="w-full border p-2 rounded-md"/>

            {errors.email && (<p className="text-red-500 text-sm"> {errors.email.message} </p>)}
          </div>

          <div className="mb-4">
            <label className="block mb-2">Password</label>

            <input type="password" placeholder="Create password" {...register("password", { required: "Password is required", minLength: {value: 6, message: "Minimum 6 characters required" }})} className="w-full border p-2 rounded-md"/>

            {errors.password && (<p className="text-red-500 text-sm"> {errors.password.message} </p> )}
          </div>

          <div className="mb-5">
            <label className="block mb-2">Confirm Password</label>

            <input type="password" placeholder="Confirm your password" {...register("confirmPassword", {required: "Please confirm your password" })}className="w-full border p-2 rounded-md" />

            {errors.confirmPassword && (<p className="text-red-500 text-sm"> {errors.confirmPassword.message}</p> )}
          </div>

          <button type="submit" className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600">Register</button>

        </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?

          <button type="button" onClick={() => navigate('/')} className="text-blue-600 font-semibold ml-1">Login
          </button>
        </p>

      </div>
    </div>
  );
}

export default Register;
