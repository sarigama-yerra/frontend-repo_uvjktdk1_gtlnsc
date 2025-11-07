import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Roster', href: '#roster' },
  { label: 'Matches', href: '#matches' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? 'backdrop-blur-xl bg-black/40 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="relative">
              <motion.span
                className="text-2xl font-extrabold tracking-wider"
                initial={{ textShadow: '0 0 0px #C62828' }}
                animate={{ textShadow: ['0 0 8px #C62828', '0 0 18px #FF1E1E', '0 0 8px #C62828'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                KK
              </motion.span>
              <span className="absolute -inset-1 rounded-md bg-red-600/20 blur-md" />
            </div>
            <Rocket className="h-5 w-5 text-red-500 opacity-80 group-hover:opacity-100 transition" />
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-red-600/90 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(198,40,40,0.6)] hover:shadow-[0_0_30px_rgba(255,30,30,0.8)] transition"
            >
              Join the Fight
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 bg-red-600/90 text-white text-center shadow-[0_0_20px_rgba(198,40,40,0.6)] hover:shadow-[0_0_30px_rgba(255,30,30,0.8)]"
              >
                Join the Fight
              </a>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
