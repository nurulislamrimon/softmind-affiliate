import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const menus = [
        <li key={1}><Link to='/about'>Home</Link></li>,
        <li key={2}><Link to='/about'>Payment</Link></li>,
        <li key={3}><Link to='/about'>Expenses</Link></li>,
    ]
    const [user] = useAuthState(auth);

    console.log(user);
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
                    {user ? <button onClick={() => signOut(auth)} className='border mr-5' title={user?.displayName}><img src={user?.photoURL} alt="img" width={50} className='rounded-lg' /></button> : <Link to='/login' className='mr-5 btn btn-ghost'>Login Please!</Link>}
                </div>
            </div>
        </header>
    );
};

export default Header;