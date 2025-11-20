import { Menu, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center gap-6 text-slate-200">
      <li><a href="#home" className="hover:text-white/90 transition">Home</a></li>
      <li><a href="#projects" className="hover:text-white/90 transition">Projects</a></li>
      <li><a href="#about" className="hover:text-white/90 transition">About</a></li>
      <li><a href="#contact" className="hover:text-white/90 transition">Contact</a></li>
      <li className="hidden md:flex items-center gap-4">
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white/90 transition"><Github size={20}/></a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white/90 transition"><Linkedin size={20}/></a>
        <a href="#contact" className="hover:text-white/90 transition"><Mail size={20}/></a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-900/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight text-lg">dev.portfolio</a>
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
        <button className="md:hidden text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4">
          <NavLinks />
        </div>
      )}
    </header>
  );
}
