import { getRepositories } from '../lib/github'

export const revalidate = 3600 // Revalidate every hour

export default async function Projects() {
  const repos = await getRepositories('your-github-username')

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-nord6 mb-6">Projects</h1>
      
      <div className="space-y-8">
        {repos.map((repo) => (
          <div key={repo.id} className="content-card">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-nord8">
                <a 
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-nord9"
                >
                  {repo.name}
                </a>
              </h2>
              <span className="text-nord4 text-sm">
                {new Date(repo.updated_at).toLocaleDateString()}
              </span>
            </div>
            
            {repo.description && (
              <p className="text-nord4 mb-4">{repo.description}</p>
            )}
            
            {repo.topics?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.topics.map((topic) => (
                  <span 
                    key={topic}
                    className="px-2 py-1 bg-nord3 text-nord4 rounded-md text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            )}
            
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: repo.readme }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

