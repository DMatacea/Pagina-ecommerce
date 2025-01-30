function SignIn() {
  const isVisible = true

    return (
      <>
        <div className=" w-[300px] h-full">
        <h1 className="text-lg font-bold text-[#071952] text-center mb-6 mt-4" >
          Welcome To Shopi
        </h1>
        {!isVisible && (
          <>
            <p className="text-md font-medium text-black mb-3">
              User Name
            </p>
            <input 
              type="text" 
              placeholder="example@example.com"
              className="mb-6 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2.5 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
            />
          </>
        )}
        <p className="text-md font-medium text-black mb-3">
          Email
        </p>
        <input 
          type="text" 
          placeholder="example@example.com"
          className="mb-6 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2.5 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
        />
        {
          isVisible ? (
            <>
              <p className="text-md font-medium text-black mb-3">
                Password
              </p>
              <input 
                type="text" 
                placeholder="*******"
                className="mb-8 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
              />
              <button className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold w-full rounded-lg p-3 m-2">
                Login
              </button>
              <p className="text-sm font-light text-zinc-500 mb-3 underline text-center">
              Forgot my password
              </p>
              <button className="bg-white border-2 border-zinc-500 hover:border-zinc-900 text-black font-medium w-full rounded-lg p-3 m-2">
                Sing up
              </button>
            </>
          ) : (
            <>
              <p className="text-md font-medium text-black mb-3">
                Password
              </p>
              <input 
                type="text" 
                placeholder="*******"
                className="mb-8 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
              />
              <p className="text-md font-medium text-black mb-3">
                rectify password
              </p>
              <input 
                type="text" 
                placeholder="*******"
                className="mb-8 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
              />
              <button className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold w-full rounded-lg p-3 m-2">
                Login
              </button>
            </>
          )
        }
      </div>
      </>
    )
  }
  
  export { SignIn }