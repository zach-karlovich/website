import { getRepositories } from '../../lib/github'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { FaGithub, FaArrowLeft } from 'react-icons/fa'
import { use } from 'react'

export const revalidate = 3600

type Props = {
  params: Promise<{
    name: string
  }>
  searchParams: { [key: string]: string | string[] | undefined }
}

async function getProjectData(projectName: string) {
  const repos = await getRepositories('zach-karlovich')
  return repos.find(r => r.name === projectName)
}

export default async function ProjectPage({ params, searchParams }: Props) {
  const { name } = await params
  const repo = await getProjectData(name)

  if (!repo) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-nord6 mb-6">Project Not Found</h1>
        <Link href="/projects" className="text-nord8 hover:text-nord9 flex items-center gap-2">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <Link 
          href="/projects" 
          className="text-nord8 hover:text-nord9 flex items-center gap-2"
        >
          <FaArrowLeft /> Back to Projects
        </Link>
        <a 
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-nord8 hover:text-nord9 flex items-center gap-2 ml-auto"
        >
          View on GitHub <FaGithub />
        </a>
      </div>

      <div className="content-card">
        <h1 className="text-4xl font-bold text-nord6 mb-6">{repo.name}</h1>
        
        {repo.description && (
          <p className="text-nord4 text-lg mb-6">{repo.description}</p>
        )}

        <ReactMarkdown 
          className="prose prose-invert max-w-none
            prose-headings:text-nord6 
            prose-p:text-nord4 
            prose-a:text-nord8 hover:prose-a:text-nord9
            prose-strong:text-nord6
            prose-code:text-nord4 prose-code:bg-nord2 prose-code:px-1 prose-code:rounded
            prose-pre:bg-nord2 prose-pre:border prose-pre:border-nord3
            prose-ul:text-nord4 prose-ol:text-nord4
            prose-blockquote:text-nord4 prose-blockquote:border-nord8
            prose-hr:border-nord3"
          remarkPlugins={[remarkGfm]}
        >
          {repo.readme}
        </ReactMarkdown>
      </div>
    </div>
  )
} 