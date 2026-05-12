import { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'About', href: '/#about' },
  { label: 'Techstack', href: '/#techstack' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Connect', href: '/#connect' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-14 flex items-center justify-between px-4 md:px-6 border-b border-black bg-white min-w-xs">

        {/* MOBILE HAMBURGER-BUTTON */}
        <button
          className="sm:hidden flex flex-col justify-center gap-1.25 w-6 h-6 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className={`block h-0.5 bg-black transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-1.75' : ''}`} />
          <span className={`block h-0.5 bg-black transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 bg-black transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-1.75' : ''}`} />
        </button>

        {/* HJ NAV-TO-TOP */}
        <Link
          to="/"
          aria-label="To top"
          className="text-2xl leading-none select-none font-poppins uppercase active:bg-black active:text-white hover:bg-black  hover:text-white p-1 transition-colors duration-400"
        >
          <span className='font-bold tracking-widest'>
            Hanna
          </span>
          <span className='font-extralight text-[#565656]'>
            J
          </span>
        </Link>

        {/* DESKTOP NAV-LINKS */}
        <nav className='hidden sm:inline' aria-label="Head menu">
          <ul className="hidden sm:flex gap-4 md:gap-8 text-sm font-medium">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link to={href} className="p-2 font-bold tracking-widest hover:bg-black hover:text-white uppercase transition-colors duration-400">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/CVhannaJ.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 font-bold tracking-widest hover:bg-black hover:text-white uppercase transition-colors duration-400 border-2 border-black"
              >
                CV
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* MOBILE NAV-LINKS-OPEN/CLOSE-MENU */}
      <nav
        id="mobile-menu"
        aria-label="Mobilmeny"
        aria-hidden={!open}
        className={`fixed top-0 left-0 h-svh overflow-y-auto w-64 z-40 border-r border-black bg-white transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6 px-8 pt-24">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link to={href} onClick={() => setTimeout(() => setOpen(false), 200)} className='p-2 font-bold tracking-widest active:bg-black active:text-white uppercase transition-colors duration-200 text-md'>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/CVhannaJ.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setTimeout(() => setOpen(false), 200)}
              className='p-2 font-bold tracking-widest active:bg-black active:text-white uppercase transition-colors duration-200 text-md border-2 border-black'
            >
              CV
            </a>
          </li>
        </ul>
      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/20"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}