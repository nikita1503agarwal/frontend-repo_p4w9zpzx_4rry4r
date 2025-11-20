import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* decorative background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(800px_400px_at_20%_0%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_80%_0%,rgba(168,85,247,0.15),transparent)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Alex Developer. All rights reserved.</p>
          <p className="opacity-80">Built with React, Tailwind, and a playful 3D touch.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
