import logo from "@/assets/logo.jpg";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="RCAT" className="h-10 w-10 object-cover rounded-full" />
          <div>
            <div className="font-display text-lg leading-tight">RCAT</div>
            <div className="text-xs text-foreground/50">Roofing Contractors Association of Texas</div>
          </div>
        </div>
        <div className="text-xs text-foreground/50">© {new Date().getFullYear()} Roofing Contractors Association of Texas. Non-profit trade association.</div>
        <div className="flex gap-4 text-xs text-foreground/60 items-center">
          <a href="https://www.facebook.com/RoofingContractorsTexas/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="http://instagram.com/RCAT_TX" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Member Portal</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
}
