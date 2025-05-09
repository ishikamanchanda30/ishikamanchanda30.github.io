import React, { useState } from 'react';
import options from "../assets/options.svg"
import { Link } from "react-scroll"

const NavbarMobile: React.FC = () => {
    const [nav, setNav] = useState(false);


    return (
        <nav className="relative top-0 left-0 right-0 z-50 backdrop-blur-lg border-neutral-700/20 flex items-center justify-between w-[85%] m-auto">
            <div className="flex-shrink-0">
                <Link to="/">
                    Based In <br></br>
                    New Delhi, India
                </Link>
            </div>

            <div className='flex-shrink-0'>
                <img
                    src={options}
                    alt="options"
                    className="h-6 w-auto"
                    onClick={() => setNav(!nav)}
                />
            </div>
            <div
                className='fixed top-12 left-[10%] w-[80%] flex flex-col bg-[#0D0D0D]/40 backdrop-blur-lg  z-100 border-neutral-700 rounded-lg'
                style={{ display: nav ? "" : 'none' }}
                onClick={() => setNav(false)}
            >
                <Link to="about" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2'>
                    ABOUT
                </Link>
                <Link to="projects" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2'>
                    PROJECTS
                </Link>
                <Link to="experience" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2'>
                    EXPERIENCE
                </Link>
                <Link to="contact" smooth={true} duration={300} className='cursor-pointer px-4 flex justify-center py-3 m-2'>
                    CONTACT
                </Link>
            </div>

        </nav>
    );
};

export default NavbarMobile;
