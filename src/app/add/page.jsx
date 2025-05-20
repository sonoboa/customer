export default function Page() {
    return (
      <>
        <div className="bg-yellow-100 my-3 py-5 border-dashed border-4 border-blue-300">

            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Customer</h1>
    
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="fname"
                    type="text"
                    name="first_name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lname"
                    type="text"
                    name="last_name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </form>
            </div>
        </div>
      </>
    );
  }
  