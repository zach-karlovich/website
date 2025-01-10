'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaStrava } from 'react-icons/fa'

const Header = () => {
  return (
    <header className="bg-nord1 text-nord6 p-4" suppressHydrationWarning>
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-nord8">jzk</Link>
        <ul className="flex space-x-4">
          <li><Link href="/about" className="hover:text-nord8">About</Link></li>
          <li><Link href="/projects" className="hover:text-nord8">Projects</Link></li>
          <li><Link href="/blog" className="hover:text-nord8">Blog</Link></li>
          <li><Link href="/resume" className="hover:text-nord8">Resume</Link></li>
        </ul>
        <div className="flex space-x-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-nord8 transition-colors duration-200">
            <FaGithub size={22} suppressHydrationWarning />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-nord8 transition-colors duration-200">
            <FaLinkedinIn size={22} suppressHydrationWarning />
          </a>
          <a href="https://www.strava.com/athletes/51932129" target="_blank" rel="noopener noreferrer" className="hover:text-nord8 transition-colors duration-200">
            <FaStrava size={22} suppressHydrationWarning />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Header

