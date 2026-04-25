import { motion } from "framer-motion";
import { Mail, Phone, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#1F8A930D] border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-10">
            Whether you're an investor, a school district, a university, or a government — we'd love to hear from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:harriet@us.coralreefafrica.com"
              className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
            >
              <Mail size={24} className="text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground mb-1 text-sm">US Operations</div>
              <div className="text-[#1F8A93] text-sm group-hover:underline break-all">harriet@us.coralreefafrica.com</div>
            </a>
            <a
              href="mailto:richard.anim@gmail.com"
              className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
            >
              <Phone size={24} className="text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground mb-1 text-sm">Group CEO</div>
              <div className="text-[#1F8A93] text-sm group-hover:underline">richard.anim@gmail.com</div>
              <div className="text-muted-foreground text-xs mt-1">+233 506 311 053</div>
            </a>
            <a
              href="https://coralreefafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-border rounded-2xl p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all"
            >
              <Globe size={24} className="text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground mb-1 text-sm">Website</div>
              <div className="text-[#1F8A93] text-sm group-hover:underline">coralreefafrica.com</div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
