TEST PUSH

This website was built using a mix of AI tools and some manual work to personalize it.  I have absolutely no experience with Next.js or Tailwind CSS.  This was a fun learning experience and it's a great starting point.  Pretty remarkable what you can do with AI these days.

# Personal Website
A modern, responsive personal website built with Next.js and styled with Tailwind CSS using the Nord color theme by John Z. Karlovich. Features a dynamic particle background and integrates with GitHub to showcase projects.

## Features
- Dark theme using Nord color palette with animated particle background
- Responsive design that works on desktop and mobile
- Built with Next.js 14 and TypeScript
- Dynamic project showcase pulling directly from GitHub
- Notes section for sharing thoughts and insights
- Automatic README parsing for project documentation

## Tech Stack
- Framework: Next.js 14
- Language: TypeScript
- Styling: Tailwind CSS
- Icons: React Icons
- Version Control: Git
- APIs: GitHub REST API
- Theme: Nord Color Palette

## Getting Started
1. Clone the repository
```bash
git clone git@github-website:zach-karlovich/website.git
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

4. Add your GitHub token (and any other required variables) to .env.local.

5. Run the development server
```bash
npm run dev
```

## Environment Variables
Create a .env.local file in the project root with the following content (or use cp .env.example .env.local as described above, then add your token):

```bash
echo "GITHUB_TOKEN=your_github_token" > .env.local
```
Replace your_github_token with a valid personal access token from GitHub.

## Project Structure
```php
website/
├── app/          # Next.js 14 app directory
│   ├── components/  # Reusable components
│   ├── lib/         # Utility functions and API clients
│   ├── about/       # About page
│   ├── notes/       # Notes section
│   ├── projects/    # Projects showcase
│   └── resume/      # Professional resume
├── public/          # Static assets
└── styles/          # Global styles
```

Happy Coding!
Feel free to open an issue or submit a pull request if you have any questions or improvements.
