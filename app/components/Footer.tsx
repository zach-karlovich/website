'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => {
    setYear(new Date().getFullYear().toString())
  }, [])

  return (
    <footer className="w-full py-4 mt-auto text-center text-nord4">
      <p>© {year} John Z. Karlovich. All rights reserved.</p>
    </footer>
  )
}
  
  