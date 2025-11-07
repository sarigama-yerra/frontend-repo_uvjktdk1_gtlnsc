import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden bg-[#0B0B0B]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_12px_rgba(255,30,30,0.25)]"
        >
          KK — Katanya Keras
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg sm:text-xl text-white/80"
        >
          Dominating the Battlefield, One Headshot at a Time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#matches"
            className="pointer-events-auto rounded-full bg-red-600/90 px-6 py-3 text-white font-semibold shadow-[0_0_25px_rgba(198,40,40,0.6)] hover:shadow-[0_0_40px_rgba(255,30,30,0.8)] transition"
          >
            Watch Live
          </a>
          <a
            href="#contact"
            className="pointer-events-auto rounded-full border border-red-500/50 px-6 py-3 text-white/90 hover:text-white hover:border-red-500 bg-white/0 hover:bg-white/5 transition"
          >
            Join Us
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
    </section>
  );
}
