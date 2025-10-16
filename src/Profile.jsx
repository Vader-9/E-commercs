
function Profile() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 md:">
      <div className="bg-white shadow-lg rounded-2xl p-10 w-[90%] max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Login</h1>

        <div className="flex flex-col space-y-4 mb-4">
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-300 rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg p-3 w-full outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
          />
        </div>

        <div className="flex justify-between text-sm text-gray-600 mb-6">
          <button className="hover:text-blue-500 transition">Forgot password?</button>
          <button className="hover:text-blue-500 transition">Create account</button>
        </div>

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition">
          Sign in
        </button>
      </div>
    </div>

  )
}

export default Profile