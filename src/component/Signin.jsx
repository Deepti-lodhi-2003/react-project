import React from 'react'

const Signin = (props) => {
    // const toggler = props.toggler;
    // const setToggler = props.setToggler;
    const {toggler, setToggler } = props;
  return (
    <div>
         <form  className='w-[90%] sm:w-[60%] md:w-[40%] mx-auto mt-10 bg-white shadow-2xl p-6 rounded-md shadow-md'
        autoComplete="off">
          <h2 className='text-2xl font-semibold mb-4 text-center'>Sign In</h2>

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
            Login
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
  )
}

export default Signin