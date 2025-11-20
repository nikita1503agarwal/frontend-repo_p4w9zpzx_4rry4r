import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-white text-3xl font-bold"
        >
          Let's build something great
        </motion.h3>
        <p className="text-slate-300 mt-3">Have an idea or opportunity? I'm open to freelance and full‑time roles.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="mailto:hello@example.com" className="px-5 py-3 rounded-xl bg-white text-slate-950 font-medium hover:bg-slate-100 transition">Email Me</a>
          <a href="/resume.pdf" className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">Download Resume</a>
        </div>
      </div>
    </section>
  );
}
