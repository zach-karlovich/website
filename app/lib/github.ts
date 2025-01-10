import { Octokit } from '@octokit/rest'
import { decode } from 'base-64'
import { remark } from 'remark'
import html from 'remark-html'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
})

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
        const processedContent = await remark()
          .use(html)
          .process(content)
        const contentHtml = processedContent.toString()

        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          html_url: repo.html_url,
          readme: contentHtml,
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