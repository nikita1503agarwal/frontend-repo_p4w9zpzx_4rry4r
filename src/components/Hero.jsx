import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80 pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-10 items-center">
        <div className="py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white tracking-tight"
          >
            Hi, I'm Alex — a full‑stack developer crafting modern web experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-5 text-slate-200/90 text-lg max-w-xl"
          >
            I build delightful, performant apps with React, Next.js, and TypeScript, backed by robust APIs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-white text-slate-950 font-medium hover:bg-slate-100 transition">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Contact Me</a>
          </motion.div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
