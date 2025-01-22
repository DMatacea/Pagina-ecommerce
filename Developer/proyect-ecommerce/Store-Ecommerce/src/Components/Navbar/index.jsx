import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CreateShoppingContex } from '../../Context'

function NavBar() {

    const context = useContext(CreateShoppingContex)
    const activeStyle = 'underline underline-offset-4'

    return(
        <>
        <nav className='flex justify-between items-center fixed z-1 top-0 w-full py-4 px-8 text-sm font-light z-20 bg-white'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    davde@gmail.com
                </li>
                <li>
                    <NavLink to='/myorders'
                        className={({isActive}) => (
                            isActive ? activeStyle : undefined)
                        }>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/myaccount'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signin'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        Sing in
                    </NavLink>
                </li>
                <li className='flex items-center justify-center'>
                    <NavLink to='/'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </NavLink>
                    {context.count}
                </li>
            </ul>
        </nav>
        </>
    )
}

export {NavBar}