import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CreateShoppingContex } from '../../Context'

function NavBar() {

    const context = useContext(CreateShoppingContex)
    const activeStyle = 'underline underline-offset-4'

    return(
        <>
        <nav className='flex justify-between items-center fixed z-1 top-0 w-full py-5 px-8 text-sm font-light'>
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
                <li>
                    <NavLink to='/'
                        className={({isActive}) => 
                            isActive ? activeStyle : undefined
                        }>
                        🛒{context.count}
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    )
}

export {NavBar}