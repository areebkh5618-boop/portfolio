import { useState, useEffect } from 'react'
import './App.css'

const projects = [
  {
    name: 'ZyroFit',
    desc: 'Sports apparel e-commerce platform. Next.js, MongoDB, Stripe Checkout, JWT auth, admin dashboard.',
    tag: 'Full-Stack',
  },
  {
    name: 'AntiGravity Scanner',
    desc: 'Network vulnerability scanner with a live terminal UI. FastAPI, React, WebSockets.',
    tag: 'Security',
  },
  {
    name: 'PathfinderAI',
    desc: 'Interactive pathfinding visualizer for BFS, DFS, Dijkstra, and A* on real-world maps.',
    tag: 'Algorithms',
  },
]

function useTypedText(text, speed = 35) {
  const [typed, setTyped] = useState('')
  useEffect(() => {
    setTyped('')
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(text.slice(0, i))
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text])
  return typed
}

export default function App() {
  const typed = useTypedText('practice-site // deployed on github pages')

  return (
    <div className="page">
      <div className="grid-overlay" />

      <header className="hero">
        <p className="eyebrow">&gt; system.boot()</p>
        <h1>
          Hello, I'm <span className="accent">Areeb</span>.
        </h1>
        <p className="terminal-line">
          <span className="prompt">$</span> {typed}
          <span className="cursor">▌</span>
        </p>
        <p className="sub">
          CS student &amp; full-stack developer, building toward AI research.
        </p>
      </header>

      <main>
        <section className="panel">
          <h2>01 // About</h2>
          <p>
            I'm a BSCS student working across React, Next.js, FastAPI, and
            MongoDB — with a soft spot for dark UIs and security tooling.
            This page exists purely as a deployment exercise: no raw HTML
            was hand-written, it's all React components compiled by Vite.
          </p>
        </section>

        <section className="panel">
          <h2>02 // Projects</h2>
          <div className="project-grid">
            {projects.map((p) => (
              <article key={p.name} className="card">
                <div className="card-head">
                  <h3>{p.name}</h3>
                  <span className="tag">{p.tag}</span>
                </div>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel">
          <h2>03 // Deployment</h2>
          <p>
            This site is built with Vite + React and shipped to GitHub Pages
            through a GitHub Actions workflow — push to <code>main</code>,
            and the site rebuilds and redeploys automatically.
          </p>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Areeb — built for deployment practice.</p>
      </footer>
    </div>
  )
}
