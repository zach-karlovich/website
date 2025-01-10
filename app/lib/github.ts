import { Octokit } from '@octokit/rest'
import { decode } from 'base-64'
import { remark } from 'remark'
import html from 'remark-html'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

// You'll need to add OpenAI API key to your .env.local
const generateSummary = async (content: string) => {
  // This is a placeholder - you'll need to implement the actual OpenAI call
  // For now, let's extract the first paragraph
  const firstParagraph = content.split('\n\n')[0].replace(/[#*]/g, '').trim()
  return firstParagraph.slice(0, 200) + (firstParagraph.length > 200 ? '...' : '')
}

export async function getRepositories(username: string) {
  const { data: repos } = await octokit.repos.listForUser({
    username,
    sort: 'updated',
    per_page: 10
  })

  return Promise.all(
    repos.map(async (repo) => {
      try {
        const { data: readme } = await octokit.repos.getReadme({
          owner: username,
          repo: repo.name,
        })

        const content = decode(readme.content)
        const summary = await generateSummary(content)

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          readme: content,
          summary,
          topics: repo.topics,
          language: repo.language,
          updated_at: repo.updated_at
        }
      } catch (error) {
        console.log(`No README found for ${repo.name}`)
        return null
      }
    })
  ).then(repos => repos.filter(Boolean))
} 