'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaStrava } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="bg-nord1 bg-opacity-90 backdrop-blur-sm shadow-lg border-b border-nord3">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-2xl font-bold text-nord8 hover:text-nord9 transition-colors duration-200"
          >
            zk
          </Link>

          <ul className="flex space-x-8">
            <li>
              <Link 
                href="/projects" 
                className="text-nord4 hover:text-nord8 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-nord2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/notes" 
                className="text-nord4 hover:text-nord8 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-nord2"
              >
                Notes
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="text-nord4 hover:text-nord8 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-nord2"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/resume" 
                className="text-nord4 hover:text-nord8 transition-colors duration-200 font-medium px-2 py-1 rounded-md hover:bg-nord2"
              >
                Resume
              </Link>
            </li>
          </ul>

          <div className="flex space-x-6">
            <a 
              href="https://github.com/zach-karlovich" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nord4 hover:text-nord8 transition-all duration-200 transform hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/zach-karlovich" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nord4 hover:text-nord8 transition-all duration-200 transform hover:scale-110"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a 
              href="https://www.strava.com/athletes/51932129" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-nord4 hover:text-nord8 transition-all duration-200 transform hover:scale-110"
            >
              <FaStrava size={24} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

