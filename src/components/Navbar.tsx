import React from 'react';
import logo from '../assets/logo.svg';
import { Brain, Info } from 'lucide-react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black p-4 border-b-2 border-[#0049ff]">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-[#0049ff] text-lg font-bold flex items-center gap-2">
                    <img src={logo} className='w-12'/>
                    <h1>ENGJOY</h1>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-[#0049ff]"><Brain className='hover:scale-110 transition-all duration-300'/></a>
                    </li>
                    <li>
                        <a href="#" className="text-[#0049ff]"><Info className='hover:scale-110 transition-all duration-300'/></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;