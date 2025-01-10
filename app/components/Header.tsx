'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaStrava } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-nord2 bg-opacity-80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-nord4 hover:text-nord6">
            zk
          </Link>

          <ul className="flex space-x-6">
            <li>
              <Link href="/projects" className="text-nord4 hover:text-nord6">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-nord4 hover:text-nord6">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-nord4 hover:text-nord6">
                About
              </Link>
            </li>
          </ul>

          <div className="flex space-x-4">
            <a 
              href="https://github.com/zach-karlovich" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nord4 hover:text-nord6 transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
            <a 
              href="https://linkedin.com/in/zach-karlovich" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nord4 hover:text-nord6 transition-colors duration-200"
            >
              <FaLinkedinIn size={22} />
            </a>
            <a 
              href="https://www.strava.com/athletes/51932129" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nord4 hover:text-nord6 transition-colors duration-200"
            >
              <FaStrava size={22} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

