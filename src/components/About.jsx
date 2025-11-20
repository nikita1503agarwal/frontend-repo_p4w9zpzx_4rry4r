import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8"
        >
          <h3 className="text-white text-2xl font-semibold mb-2">About</h3>
          <p className="text-slate-300 leading-relaxed">
            I’m a developer focused on crafting accessible, performant interfaces and scalable backends. I love shipping products end‑to‑end, from pixel to production.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-slate-300">React / Next.js</div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-slate-300">TypeScript</div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-slate-300">Node / APIs</div>
            <div className="rounded-xl bg-white/5 p-3 border border-white/10 text-slate-300">Design Systems</div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8"
        >
          <h3 className="text-white text-2xl font-semibold mb-2">Experience</h3>
          <ul className="text-slate-300 space-y-3">
            <li>• 5+ years building full-stack web apps</li>
            <li>• Led teams shipping to millions of users</li>
            <li>• Passionate about DX, a11y, and performance</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
