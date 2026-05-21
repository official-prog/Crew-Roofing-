import logo from "@/assets/logo.jpg";
import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Crew Roofing" className="h-10 w-10 object-cover rounded-full" />
          <div>
            <div className="font-display text-lg leading-tight">Crew Roofing</div>
            <div className="text-xs text-foreground/50">Hamilton, ON — Dependability. Integrity. Detail.</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} Crew Roofing. All rights reserved. Hamilton, Ontario, Canada.</div>
        <div className="flex gap-4 text-xs text-foreground/60 items-center">
          <a href="https://www.facebook.com/CrewRoofing/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
}
