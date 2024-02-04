import React from 'react';
import { Link } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import { faDashboard, faGear, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ClerkButton from '../ClerkButton/Button';
import { NavLink } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const { user, logOut } = useClerk();
    const email = user?.primaryEmailAddress?.emailAddress;
    return (
        <>
        <div className="navbar font-semibold bg-gradient-to-r fixed z-50 from-sky-400 via-gray-50 to-blue-500 flex justify-between">
            <div className="flex-1">
                <NavLink to='/' className="btn btn-ghost text-xl normal-case">DoCure</NavLink>
            </div>
            <div className="flex-none">
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <React.Fragment>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/services'>Services</Link></li>
                            <li><Link to='/appointment'>Appointments</Link></li>
                            <li><Link to='/blogs'>Blogs</Link></li>
                            <li className="flex items-center"> {/* Add flex and items-center classes */}
                                {user ? (
                                    <UserButton className = "" afterSignOutUrl='/' />
                                ) : (
                                    <ClerkButton />
                                )}
                            </li>
                        </React.Fragment>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;
