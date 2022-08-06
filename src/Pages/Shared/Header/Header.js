import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../../Utilities/CustomLink';

const Header = () => {
    const menus = [
        <CustomLink key={1} to='/' className='p-3 rounded-xl'>Home</CustomLink>,
        <CustomLink key={2} to='/statement' className='p-3 rounded-xl'>Statement</CustomLink>,
        <CustomLink key={3} to='/deposit' className='p-3 rounded-xl'>Deposit</CustomLink>,
        <CustomLink key={4} to='/payments' className='p-3 rounded-xl'>Payments</CustomLink>,
        <CustomLink key={5} to='/expenses' className='p-3 rounded-xl'>Expenses</CustomLink>,
    ]
    const [user] = useAuthState(auth);
    return (
        <header className='bg-base-200'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* small device hamburger */}
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menus}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src="Softmind_l_logo.png" height={30} width={150} alt="" className='ml-5' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menus}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        <><img src={user?.photoURL} alt="img" width={50} className='rounded-lg' title={user?.displayName} /><button onClick={() => signOut(auth)} className='border mx-5'><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg></button></> : <Link to='/login' className='mr-5 btn btn-ghost'>Login Please!</Link>}
                </div>
            </div>
        </header>
    );
};

export default Header;