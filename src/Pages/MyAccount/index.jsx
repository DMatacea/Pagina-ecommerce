import { useContext } from 'react'
import { AuthContext } from '../../Context/autentication'
import { useNavigate } from 'react-router-dom'

function MyAccount() {
  const context = useContext(AuthContext)  
  const navigate = useNavigate()

  const deleteProfile = () => {
    localStorage.removeItem(context?.userVerify?.user)
    context?.setUserVerify({})
  }

  const profileVisible = () => (
    <div className="flex justify-between items-center mb-4 p-2 bg-gray-100 rounded-lg hover:shadow-md transition-all duration-300 gap-3">
      <figure className="w-16 h-16">
          <img className="w-full h-full rounded-full object-cover" src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png" alt={context?.userVerify?.user} />
      </figure>
      <div className="flex flex-col">
        <p className="text-sm font-medium text-gray-800">
          {context?.userVerify?.user}
        </p>
        <p className="text-md font-bold text-gray-900">
          {context?.userVerify?.email}
        </p>
      </div>
        <div 
          className="bg-gray-300 p-1 rounded-full cursor-pointer hover:bg-gray-400 transform transition-transform duration-300"
          onClick= {deleteProfile}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          </svg>
        </div>   
    </div>
  )

  const noRegisteredUsers = () => (
    <>
      <p className="text-md font-medium text-black mb-3">
        No users registered or not logged in 
      </p>
      <button
        className="bg-white border-2 border-zinc-500 hover:border-zinc-900 text-black font-medium w-full rounded-lg p-3 m-2"
        onClick={() => navigate('/signin')}
      >
        Sing up
      </button>
    </>
  )

    return (
      <>
        <div className="w-[300px] h-full">
          <h1 className="font-medium text-center text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent my-4">
            My Account
          </h1>
          {
            context?.userVerify.email ? profileVisible() : noRegisteredUsers()
          }
            
        </div>
      </>
    )
  }
  
  export { MyAccount }