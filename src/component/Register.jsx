import React from 'react';

const Register = ({ toggler, setToggler }) => {
  return (
    <div>
      <form 
        className='w-[90%] sm:w-[60%] md:w-[40%] mx-auto mt-10 shadow-2xl bg-white p-6 rounded-md shadow-md'
        autoComplete="off" // disables autofill for the form
      >
        <h2 className='text-2xl font-semibold mb-4 text-center'>Let's start your journey</h2>

        <input
          type="text"
          placeholder="Enter your name"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete="off"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete="off"
        />

        <input
          type="password"
          placeholder="********"
          className='w-full p-3 mt-4 border border-gray-300 rounded-md'
          autoComplete="new-password"
        />

         <button
          type="submit"
          className="w-full bg-gray-700 text-white py-3 mt-6 rounded-md hover:bg-blue-700 transition-all"
        >
           Register
        </button>

        <div className="mt-4 text-sm text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => setToggler(!toggler)}
            className="text-blue-600 font-medium underline"
          >
            Signin
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
