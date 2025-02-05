import { useState, useContext } from 'react'
import { AuthContext } from '../../Context/autentication'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const context = useContext(AuthContext)
  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordCheck, setPasswordCheck] = useState('')
  const [handlTextError, setHandlTextError] = useState('')
  const [handlErrorPassword, setHandlErrorPassword] = useState(false)
  const [handlError, setHandlError] = useState(null)

  const arrayUser = {
    user: userName,
    password: password,
    email: email,
  };

  const signInVisible = () => (
    <>
      <h1 className="font-medium text-center text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent my-4">
        Welcome To Shopi
      </h1>
      <p className="text-md font-medium text-black mb-3">User Name</p>
      <input
        type="text"
        placeholder="Juan123"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="mb-6 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2.5 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
      />
      <p className="text-md font-medium text-black mb-3">Password</p>
      <input
        type="password"
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-8 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
      />
      <button 
        onClick={handlUserVerify}
        className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold w-full rounded-lg p-3 m-2"
      >
        Login
      </button>
      <p className="text-sm font-light text-zinc-500 mb-3 underline text-center">
        Forgot my password
      </p>
      <button
        className="bg-white border-2 border-zinc-500 hover:border-zinc-900 text-black font-medium w-full rounded-lg p-3 m-2"
        onClick={() => {context.setSignUpButton(true)}}
      >
        Sing up
      </button>
    </>
  );

  const signUpVisible = () => (
    <>
      <h1 className="font-medium text-center text-xl bg-gradient-to-r from-[#071952] to-[#088395] bg-clip-text text-transparent my-4">
        Welcome To Shopi
      </h1>
      <p className="text-md font-medium text-black mb-3">User Name</p>
      <input
        type="text"
        placeholder="Example"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="mb-6 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2.5 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
      />
      <p className="text-md font-medium text-black mb-3">Email</p>
      <input
        type="text"
        placeholder="example@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-6 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2.5 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400"
      />
      <p className="text-md font-medium text-black mb-3">Password</p>
      <input
        type="password"
        placeholder="*******"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={`${
          handlErrorPassword
            ? 'mb-8 w-full border-[1px] border-red-700 bg-red-200 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto shadow-sm text-red-700 placeholder-red-400'
            : 'mb-8 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400'
        }`}
      />
      <p className="text-md font-medium text-black mb-3">Rectify password</p>
      <input
        type="password"
        placeholder="*******"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
        className={`${
          handlErrorPassword
            ? 'mb-2 w-full border-[1px] border-red-700 bg-red-200 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto shadow-sm text-red-700 placeholder-red-400'
            : 'mb-8 w-full border-gray-300 focus:outline-none rounded-lg focus:ring-2 p-2 mx-auto focus:ring-zinc-500 focus:border-zinc-500 transition-all shadow-sm text-gray-700 placeholder-gray-400'
        }`}
      />
      {handlErrorPassword ? (
        <p className="text-md font-medium text-red-400 mb-3">
          Passwords do not match
        </p>
      ) : (
        <></>
      )}
      <button
        onClick={() => {
          context.setUserVerify(arrayUser)
          saveUser()
        }}
        className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold w-full rounded-lg p-3 m-2"
      >
        Login
      </button>
    </>
  );

  const clearInput = () => {
    setUserName('')
    setPassword('')
    setEmail('')
    setPasswordCheck('')
    navigate('/')
  };

  const handlUserVerify = () => {
    const keys = Object.keys(localStorage)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if(key === userName){
        let usercheck = localStorage.getItem(key)
        usercheck = JSON.parse(usercheck)
        if(usercheck.password === password){
          context.setUserVerify(usercheck)
          clearInput()
        }else{
          setHandlTextError("Incorrect Password")
          setHandlError(true)
          setTimeout(() => {
            setHandlError(false)
          }, 2500);
        }
      }else{
        setHandlTextError("The user is not registered")
        setHandlError(true)
          setTimeout(() => {
            setHandlError(false)
          }, 2500);
      }
    }
  }

  const saveUser = () => {
    try {
      if (password === passwordCheck) {
        localStorage.setItem(userName, JSON.stringify(arrayUser))
        clearInput()
      } else {
        setHandlErrorPassword(true)
        setTimeout(() => {
          setHandlErrorPassword(false)
        }, 2500)
      }
    } catch (error) {
      setHandlTextError("Error adding user")
      setHandlError(true)
      setTimeout(() => {
        setHandlError(false)
      }, 3000)
    }
  };

  const handlErrorVisible = () => (
    <div className="mb-2 w-full border-[1px] border-red-500 bg-red-200 rounded-lg p-2.5 mx-auto shadow-sm text-red-700">
      {handlTextError}
    </div>
  )

  const showSignUp = context.signUpButton || !context.hasUsers

  return (
    <>
      <div className="w-[300px] h-full">
        {handlError? handlErrorVisible() : <></>}
        
        {showSignUp ? signUpVisible() : signInVisible()}
      </div>
    </>
  )
}

export { SignIn };