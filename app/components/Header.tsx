'use client'

import Link from 'next/link'
import { FaGithub, FaStrava } from 'react-icons/fa'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-nord0/80 backdrop-blur-md border-b border-nord3/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-2"
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-nord8 to-nord9 bg-clip-text text-transparent 
              transition-all duration-300 ease-in-out transform group-hover:scale-105">
              zk
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/projects"
              className="text-nord4/80 hover:text-nord8 transition-all duration-200 
                px-3 py-2 text-sm font-medium rounded-md hover:bg-nord2/30"
            >
              Projects
            </Link>
            <Link
              href="/notes"
              className="text-nord4/80 hover:text-nord8 transition-all duration-200 
                px-3 py-2 text-sm font-medium rounded-md hover:bg-nord2/30"
            >
              Notes
            </Link>
            <Link
              href="/about"
              className="text-nord4/80 hover:text-nord8 transition-all duration-200 
                px-3 py-2 text-sm font-medium rounded-md hover:bg-nord2/30"
            >
              About
            </Link>
            <Link
              href="/resume"
              className="text-nord4/80 hover:text-nord8 transition-all duration-200 
                px-3 py-2 text-sm font-medium rounded-md hover:bg-nord2/30"
            >
              Resume
            </Link>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/zach-karlovich"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord4/80 hover:text-nord8 transition-all duration-300 
                transform hover:scale-110 p-2 rounded-full hover:bg-nord2/30"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.strava.com/athletes/51932129"
              target="_blank"
              rel="noopener noreferrer"
              className="text-nord4/80 hover:text-nord8 transition-all duration-300 
                transform hover:scale-110 p-2 rounded-full hover:bg-nord2/30"
            >
              <FaStrava className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-md p-2 text-nord4 hover:text-nord8 
              hover:bg-nord2/30 transition-colors duration-200"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2 pb-3">
              <Link
                href="/projects"
                className="text-nord4/80 hover:text-nord8 px-3 py-2 text-sm font-medium 
                  rounded-md hover:bg-nord2/30 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/notes"
                className="text-nord4/80 hover:text-nord8 px-3 py-2 text-sm font-medium 
                  rounded-md hover:bg-nord2/30 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Notes
              </Link>
              <Link
                href="/about"
                className="text-nord4/80 hover:text-nord8 px-3 py-2 text-sm font-medium 
                  rounded-md hover:bg-nord2/30 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/resume"
                className="text-nord4/80 hover:text-nord8 px-3 py-2 text-sm font-medium 
                  rounded-md hover:bg-nord2/30 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

