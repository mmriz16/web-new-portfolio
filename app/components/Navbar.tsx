"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `font-jetbrains-mono text-[16px] font-light uppercase transition-colors ${isActive ? 'text-white' : 'text-white/70 hover:text-white/90'}`;
  };

  return (
    <nav className="flex justify-between items-center px-24 py-6 border-b border-[#ffffff]/10">
      <div>
        <h1 className='text-[20px] font-manrope font-extrabold'>Miftakhul Rizky</h1>
        <p className='uppercase font-jetbrains-mono text-[12px] font-light text-white/70'>UI/UX Programmer at winning soft</p>
      </div>
      <ul className="flex space-x-4">
        <li className={getLinkClass('/')}>
          <Link href="/">Home</Link>
        </li>
        <li className={getLinkClass('/projects')}>
          <Link href="/projects">Projects</Link>
        </li>
        <li className={getLinkClass('/uses')}>
          <Link href="/uses">Uses</Link>
        </li>
        <li className={getLinkClass('/contact')}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
