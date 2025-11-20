import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat',
    desc: 'Socket-powered chat with auth and message persistence.',
    tags: ['Next.js', 'Socket.io', 'Prisma'],
  },
  {
    title: 'E‑commerce UI',
    desc: 'Elegant storefront with filters, cart, and Stripe.',
    tags: ['React', 'Tailwind', 'Stripe'],
  },
  {
    title: 'Portfolio Engine',
    desc: 'CMS-backed portfolio with animations and SEO.',
    tags: ['Next.js', 'Framer Motion', 'CMS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
            <p className="text-slate-300 mt-2">A selection of things I loved building.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:border-white/20 hover:bg-slate-900/70 transition"
            >
              <div className="flex items-center gap-3 text-slate-200 mb-3">
                {i === 0 && <Code2 className="text-cyan-300"/>}
                {i === 1 && <Globe className="text-violet-300"/>}
                {i === 2 && <Smartphone className="text-emerald-300"/>}
                <h3 className="font-semibold text-white text-lg">{p.title}</h3>
              </div>
              <p className="text-slate-300/90">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
