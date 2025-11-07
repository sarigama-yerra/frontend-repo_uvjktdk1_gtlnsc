import { motion } from 'framer-motion';
import { Trophy, User, Play, Instagram, Twitter, Facebook } from 'lucide-react';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: 'easeOut' }
};

export function AboutSection() {
  return (
    <section id="about" className="relative bg-[#0B0B0B] py-24">
      <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-red-700/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 {...reveal} className="text-3xl md:text-4xl font-bold text-white">About</motion.h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3 text-white/80">
          {[`Lahir dari komunitas kompetitif Point Blank, KK hadir membawa mentalitas juara.`,
            `Filosofi kami sederhana: disiplin, eksekusi cepat, komunikasi jernih.`,
            `Target kami: konsisten di papan atas dan menginspirasi generasi berikutnya.`].map((p, i) => (
            <motion.p key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.1 }}>
              {p}
            </motion.p>
          ))}
      </div>
    </section>
  );
}

const players = [
  { name: 'RAVEN', role: 'Entry Fragger', img: 'https://images.unsplash.com/photo-1547097465-5976d421f857?q=80&w=1200&auto=format&fit=crop' },
  { name: 'NYX', role: 'IGL', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
  { name: 'VOLT', role: 'Sniper', img: 'https://images.unsplash.com/photo-1556157381-36ad9a1e0432?q=80&w=1200&auto=format&fit=crop' },
  { name: 'KAZE', role: 'Support', img: 'https://images.unsplash.com/photo-1556157380-97eda2d62296?q=80&w=1200&auto=format&fit=crop' },
];

export function RosterSection() {
  return (
    <section id="roster" className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 {...reveal} className="text-3xl md:text-4xl font-bold text-white">Roster</motion.h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {players.map((p, i) => (
            <motion.div
              key={p.name}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur border border-white/10"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white font-semibold text-lg">{p.name}</h3>
                <p className="text-white/70 text-sm">{p.role}</p>
                <div className="mt-3 flex items-center gap-3 text-white/80">
                  <a href="#" className="hover:text-white"><Instagram className="h-4 w-4" /></a>
                  <a href="#" className="hover:text-white"><Twitter className="h-4 w-4" /></a>
                  <a href="#" className="hover:text-white"><Facebook className="h-4 w-4" /></a>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-red-600/0 group-hover:ring-red-600/60 transition shadow-[0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_0_30px_rgba(255,30,30,0.4)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const matches = [
  { opp: 'Alpha Wolves', score: '13-9', date: '2025-09-21' },
  { opp: 'Crimson Path', score: '13-6', date: '2025-09-12' },
  { opp: 'Night Raid', score: '10-13', date: '2025-08-30' },
];

export function MatchesSection() {
  return (
    <section id="matches" className="relative bg-gradient-to-b from-[#0B0B0B] to-[#0b0b0b] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(198,40,40,0.12),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(255,30,30,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 {...reveal} className="text-3xl md:text-4xl font-bold text-white">Matches & Achievements</motion.h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {matches.map((m, i) => (
            <motion.div key={i} {...reveal} transition={{ ...reveal.transition, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center gap-3 text-white">
                <Trophy className="h-5 w-5 text-red-500" />
                <p className="font-semibold">vs {m.opp}</p>
                <span className="ml-auto text-red-400 font-mono">{m.score}</span>
              </div>
              <p className="mt-2 text-white/70 text-sm">{new Date(m.date).toLocaleDateString()}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const gallery = [
  'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517765371796-5bd3a7d30a9f?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511511450040-677116ff3896?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop',
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2 {...reveal} className="text-3xl md:text-4xl font-bold text-white">Highlights</motion.h2>
        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-3">
          {gallery.map((src, i) => (
            <motion.div key={i} {...reveal} transition={{ ...reveal.transition, delay: (i%3)*0.05 }} className="group relative overflow-hidden rounded-xl">
              <img src={src} alt="highlight" className="h-48 md:h-56 w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button className="inline-flex items-center gap-2 rounded-full bg-red-600/90 px-4 py-2 text-white text-sm shadow-[0_0_20px_rgba(198,40,40,0.6)]">
                  <Play className="h-4 w-4" /> Play
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-[#0B0B0B] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,30,30,0.08),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2 {...reveal} className="text-3xl md:text-4xl font-bold text-white">Join / Contact</motion.h2>
        <motion.form {...reveal} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Name</label>
            <input className="rounded-lg border border-red-500/30 bg-black/40 px-4 py-2 text-white outline-none ring-0 focus:border-red-500/70 focus:shadow-[0_0_25px_rgba(255,30,30,0.35)]" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Email</label>
            <input type="email" className="rounded-lg border border-red-500/30 bg-black/40 px-4 py-2 text-white outline-none focus:border-red-500/70 focus:shadow-[0_0_25px_rgba(255,30,30,0.35)]" placeholder="you@example.com" />
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm text-white/70">Role</label>
            <select className="rounded-lg border border-red-500/30 bg-black/40 px-4 py-2 text-white outline-none focus:border-red-500/70">
              <option className="bg-black">Entry Fragger</option>
              <option className="bg-black">Rifler</option>
              <option className="bg-black">Sniper</option>
              <option className="bg-black">Support</option>
            </select>
          </div>
          <div className="grid gap-2 md:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea rows={5} className="rounded-lg border border-red-500/30 bg-black/40 px-4 py-2 text-white outline-none focus:border-red-500/70 focus:shadow-[0_0_25px_rgba(255,30,30,0.35)]" placeholder="Tell us about you" />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="button" className="rounded-full bg-red-600/90 px-6 py-2 font-semibold text-white shadow-[0_0_25px_rgba(198,40,40,0.6)] hover:shadow-[0_0_40px_rgba(255,30,30,0.8)]">Submit</button>
          </div>
        </motion.form>
        <div className="mt-6 text-center text-white/60 text-sm">#KatanyaKeras — Born to Dominate.</div>
      </div>
    </section>
  );
}
