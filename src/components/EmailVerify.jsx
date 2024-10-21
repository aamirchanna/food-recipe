export default function EmailVerify() {
    return (
      <div className="flex flex-col md:flex-row h-screen">
        {/* Image Section */}
        <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-4">
          <div className="relative w-64 h-64 bg-gray-300 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Placeholder for food image
            </div>
          </div>
        </div>
  
        {/* Content Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8 space-y-4">
          <h1 className="text-3xl font-bold mb-4">Thank you Chef</h1>
          <p className="text-center text-gray-600">
            We have sent a verification email to Activate your account.
          </p>
          <p className="font-semibold">Example@firstname.com</p>
          <p className="text-sm text-gray-500">Didn`t receive email?</p>
          <a href="#" className="text-blue-500 hover:underline">
            Resend email
          </a>
          <div className="flex space-x-4 mt-4">
            <button className="px-6 py-2 bg-[#d3a18b] text-white rounded hover:bg-[#c08e78] transition-colors">
              back
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors">
              edit profile
            </button>
          </div>
          <div className="mt-8 text-sm text-gray-400">PerfectRecipe</div>
        </div>
      </div>
    )
  }