import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CreateShoppingContex } from '../../Context';
import { AuthContext } from '../../Context/autentication';

function NavBar() {
    const context = useContext(CreateShoppingContex);
    const contextAuth = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    
    const activeStyle = 'bg-[#088395] text-white px-3 py-1 rounded-full'
    const desactiveStyle = 'text-gray-600 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors duration-200'

    return (
        <>
            <nav className='flex justify-between items-center fixed top-0 w-full py-4 px-6 text-sm font-light bg-white shadow-md z-20'>
                {/* Logo y Botón de Menú en móviles */}
                <div className="flex items-center justify-between w-full md:w-auto">
                    <NavLink to="/" className="font-semibold text-lg">Shopi</NavLink>
                    <button 
                        className="md:hidden text-2xl" 
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>
                </div>

                {/* Menú en pantallas grandes */}
                <ul className='hidden md:flex items-center gap-1 z-20'>
                    {["All", "Clothes", "Electronics", "Furnitures", "Toys", "Miscellaneous"].map((item, index) => (
                        <li key={index}>
                            <NavLink 
                                to={`/${item === "All" ? item = "": item}`} 
                                className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)}
                            >
                                {item === "" ? item = "All" : item}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Opciones de usuario y carrito (Oculto en móviles) */}
                <ul className='hidden md:flex items-center gap-3'>
                    <li className='text-black/60'>{contextAuth.userVerify?.email}</li>
                    <li>
                        <NavLink to='/myorders' className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)}>
                            My Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/myaccount' className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)}>
                            My Account
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/signin' className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)}>
                            <button onClick={() => contextAuth.setSignUpButton(false)}>
                                Sign in
                            </button>
                        </NavLink>
                    </li>
                    <li className='flex items-center justify-center'>
                        <NavLink to='/'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                        </NavLink>
                        {context.count}
                    </li>
                </ul>
            </nav>

            {/* Menú desplegable en móviles */}
            {menuOpen && (
                <div className={`fixed top-14 left-0 w-full bg-white shadow-md md:hidden z-30 
                    transform transition-transform duration-800 ease-in-out
                    ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                    <ul className="flex flex-col items-center gap-3 py-4">
                        {["All", "Clothes", "Electronics", "Furnitures", "Toys", "Miscellaneous"].map((item, index) => (
                            <li key={index}>
                                <NavLink 
                                    to={`/${item === "All" ? item = "": item}`} 
                                    className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item === "" ? item = "All" : item}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <NavLink to='/myorders' className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)} onClick={() => setMenuOpen(false)}>
                                My Orders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/myaccount' className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)} onClick={() => setMenuOpen(false)}>
                                My Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/signin' className={({ isActive }) => (isActive ? activeStyle : desactiveStyle)} onClick={() => setMenuOpen(false)}>
                                <button onClick={() => contextAuth.setSignUpButton(false)}>
                                    Sign in
                                </button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
}

export { NavBar };
