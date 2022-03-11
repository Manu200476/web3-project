import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

import logo from '../../images/logo.png';

const NavbarElements = ['Market', 'Exchange', 'Tutorials', 'Wallets'];

const NavbarItem = ({ title, classProps }) => {
    return (
        <li className={`mx-4 cursor-pointer ${classProps}`}>
            { title }
        </li>
    )
}

const Navbar = () => {
    const [ toogleMenu, setToogleMenu ] = useState(false)

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-64 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {NavbarElements.map((element, index) => {
                    return (
                        <NavbarItem title={ element } classProps="hover:text-gray-200" key={ element + index } />
                    )
                })}
                <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>
            <div className="flex relative">
                {toogleMenu ?
                    <AiOutlineClose fontSize={35} className="text-white cursor-pointer md:hidden" onClick={() => setToogleMenu(false)} />
                    : <HiMenuAlt4 fontSize={35} className="text-white cursor-pointer md:hidden" onClick={() => setToogleMenu(true)} />
                }
                {toogleMenu && (
                     <ul
                        className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose fontSize={28} className="text-white cursor-pointer md:hidden" onClick={() => setToogleMenu(false)} />
                        </li>
                        {NavbarElements.map((element, index) => {
                            return (
                                <NavbarItem title={ element } key={ element + index } classprops="my-2 text-xl"/>
                            )
                        })}
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar