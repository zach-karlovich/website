import Link from 'next/link'
import { getRepositories } from '../lib/github'

export const revalidate = 3600

export default async function Projects() {
  try {
    const repos = await getRepositories('zach-karlovich')

    if (!repos || repos.length === 0) {
      return (
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-nord6 mb-6">Projects</h1>
          <p className="text-nord4">
            No repositories found. New repositories will appear here once they're created.
          </p>
        </div>
      )
    }

    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-nord6 mb-6">Projects</h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {repos.map((repo) => (
            <Link 
              key={repo.id} 
              href={`/projects/${repo.name}`}
              className="block"
            >
              <div className="content-card hover:border-nord8 transition-colors h-full">
                <h2 className="text-2xl font-bold text-nord8 mb-2">{repo.name}</h2>
                
                <p className="text-nord4 mb-4 line-clamp-3">{repo.summary}</p>
                
                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.map((topic) => (
                      <span key={topic} className="px-2 py-1 bg-nord3 text-nord4 rounded-md text-sm">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-nord8 hover:text-nord9 font-semibold">
                    View Details →
                  </span>
                  <span className="text-nord4 text-sm">
                    {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching repos:', error)
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-nord6 mb-6">Projects</h1>
        <p className="text-nord4">Error loading projects. Please check the console for more details.</p>
      </div>
    )
  }
}

