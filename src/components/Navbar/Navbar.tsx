import { useState } from 'react';

export default function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);

     return (
          <header className="sticky top-0 z-20 border-b border-[#f0f2f7] bg-white/97 p-5 lg:py-5">
               <div className="container mx-auto flex items-center justify-between gap-5 ">
                    {/* Mobile Hamburger */}
                    <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                         <img
                              src="/public/images/hamburger.png"
                              alt="Open menu"
                              className="h-6 w-6"
                         />
                    </button>

                    {/* Logo */}
                    <a href="#home">
                         <img src="/images/logo-text.png" alt="Dev Stack Logo" className="w-32.5" />
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                         <ul className="flex items-center gap-5 text-[16px] font-semibold text-[#475569]">
                              <li>
                                   <a href="#home" className="text-brand-pink">
                                        Home
                                   </a>
                              </li>
                              <li>
                                   <a href="#technologies">Technologies</a>
                              </li>
                              <li>
                                   <a href="#projects">Projects</a>
                              </li>
                              <li>
                                   <a href="#about">About</a>
                              </li>
                              <li>
                                   <a href="#contact">Contact</a>
                              </li>
                         </ul>
                    </nav>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 md:gap-5">
                         <button className="cursor-pointer text-[14px] font-normal md:text-[16px]">
                              Sign In
                         </button>

                         <button className="cursor-pointer rounded-full bg-brand-pink px-4 py-2 text-[14px] text-white md:px-5 md:text-[16px]">
                              Sign Up
                         </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                         <nav className="absolute left-0 top-full w-full border-t bg-white p-5 shadow-md md:hidden">
                              <ul className="flex flex-col gap-4 font-semibold">
                                   <li>
                                        <a href="#home" onClick={() => setMenuOpen(false)}>
                                             Home
                                        </a>
                                   </li>

                                   <li>
                                        <a href="#technologies" onClick={() => setMenuOpen(false)}>
                                             Technologies
                                        </a>
                                   </li>

                                   <li>
                                        <a href="#projects" onClick={() => setMenuOpen(false)}>
                                             Projects
                                        </a>
                                   </li>

                                   <li>
                                        <a href="#about" onClick={() => setMenuOpen(false)}>
                                             About
                                        </a>
                                   </li>

                                   <li>
                                        <a href="#contact" onClick={() => setMenuOpen(false)}>
                                             Contact
                                        </a>
                                   </li>
                              </ul>
                         </nav>
                    )}
               </div>
          </header>
     );
}
