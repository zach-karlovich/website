import Link from 'next/link'

const posts = [
  { id: 1, title: "Blog Post 1", excerpt: "A brief excerpt of Blog Post 1" },
  { id: 2, title: "Blog Post 2", excerpt: "A brief excerpt of Blog Post 2" },
  { id: 3, title: "Blog Post 3", excerpt: "A brief excerpt of Blog Post 3" },
]

export default function Blog() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-nord6 mb-6">Blog</h1>
      <div className="content-card mb-6">
        <h2 className="text-2xl font-bold text-nord8 mb-4">Latest Blog Posts</h2>
        {posts.map((post) => (
          <div key={post.id} className="bg-nord2 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-nord6 mb-2">{post.title}</h2>
            <p className="text-nord4 mb-4">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-nord8 hover:text-nord9">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

