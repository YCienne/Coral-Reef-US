import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "What We Build", href: "#what-we-build" },
    { label: "US Presence", href: "#us-presence" },
    { label: "Impact", href: "#numbers" },
    { label: "The Raise", href: "#raise" },
    { label: "University Partners", href: "#university" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <a href="#" className="flex items-center">
          <img
            src="https://images.fillout.com/orgid-630133/flowpublicid-default/widgetid-default/aaXCNEYK5Stez9XnTm5FKR/pasted-image-1776567686771.png"
            alt="Coral Reef USA"
            className="h-10 w-auto"
          />
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="bg-[#F36F16] text-white">
            <a href="#raise">Invest in the Build</a>
          </Button>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2 bg-[#F36F16]">
            <a href="#raise">Invest in the Build</a>
          </Button>
        </div>
      )}
    </nav>
  );
}
