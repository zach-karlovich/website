import Link from 'next/link'
import { FaCode, FaBook, FaUser } from 'react-icons/fa'
import { getRepositories } from './lib/github'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  // Fetch repositories
  const repos = await getRepositories('zach-karlovich')
  const latestRepo = repos?.[0] // Get the first repo (most recent)

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <h1 className="text-5xl font-bold text-nord6 mb-4 text-center">
        Welcome to My <span className="text-nord8">Digital World</span>
      </h1>
      <p className="text-xl text-nord4 mb-8 text-center max-w-2xl">
        I'm a passionate developer, creator, and lifelong learner. Explore my projects, read my thoughts, and get to know me better.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Link href="/projects" className="bg-nord8 hover:bg-nord9 text-nord0 font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
          <FaCode className="mr-2" /> View Projects
        </Link>
        <Link href="/notes" className="bg-nord10 hover:bg-nord11 text-nord0 font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
          <FaBook className="mr-2" /> Read Notes
        </Link>
        <Link href="/about" className="bg-nord14 hover:bg-nord15 text-nord0 font-bold py-4 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
          <FaUser className="mr-2" /> About Me
        </Link>
      </div>

      {/* Latest Project Section */}
      {latestRepo && (
        <div className="mt-12 p-6 bg-nord2 rounded-lg shadow-lg max-w-md w-full backdrop-blur-sm bg-opacity-80 mb-6">
          <h2 className="text-2xl font-bold text-nord6 mb-4">Latest Project</h2>
          <h3 className="text-lg font-semibold text-nord8 mb-2">{latestRepo.name}</h3>
          <p className="text-nord4 mb-4">
            {latestRepo.description || latestRepo.summary}
          </p>
          <Link 
            href={`/projects/${latestRepo.name}`} 
            className="text-nord8 hover:text-nord9 font-semibold"
          >
            View Project →
          </Link>
        </div>
      )}

      {/* Latest Note Section */}
      <div className="mt-6 p-6 bg-nord2 rounded-lg shadow-lg max-w-md w-full backdrop-blur-sm bg-opacity-80">
        <h2 className="text-2xl font-bold text-nord6 mb-4">Latest Note</h2>
        <p className="text-nord4 mb-4">Check out my most recent thoughts and insights on technology and development.</p>
        <Link href="/notes" className="text-nord8 hover:text-nord9 font-semibold">
          Read More →
        </Link>
      </div>
    </div>
  )
}

