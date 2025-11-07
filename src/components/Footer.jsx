import { motion } from 'framer-motion';
import { Rocket, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
          <div className="inline-flex items-center gap-2 text-white">
            <span className="text-lg font-extrabold tracking-wider">KK</span>
            <Rocket className="h-4 w-4 text-red-500" />
          </div>
          <p className="text-white/60 text-sm text-center">© {new Date().getFullYear()} #KatanyaKeras — Born to Dominate.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
