import { motion } from "framer-motion";
import { WifiOff, Building2, Zap } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#1B2A32" }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center color-white text-white">The Problem We Solve</h2>
          <p className="text-lg text-background/80 text-center mb-12 max-w-2xl mx-auto text-white/70">
            The US has <span className="text-[#1F8A93] font-bold">13,000+ school districts</span>. Millions of students in Title I schools, rural communities, and under-resourced urban areas are still waiting for AI education infrastructure that actually works in their environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: WifiOff,
                title: "Cloud Platforms Fail",
                desc: "Cloud-dependent platforms fail without reliable internet — leaving millions of students behind.",
              },
              {
                icon: Building2,
                title: "Built for the Best",
                desc: "Most EdTech companies build for the best-connected schools, ignoring the hardest-to-reach communities.",
              },
              {
                icon: Zap,
                title: "We Built for the Hardest",
                desc: "We built for the hardest conditions on earth — across 700 schools in Ghana. And it works.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.2)]
                transition-all duration-300 p-10 hover:bg-white/10 hover:border-white/20 hover:shadow-xl
                transition-all duration-300">
                <div
                    className="
                      w-12 h-12 rounded-2xl
                      bg-[#1F8A93]/13 backdrop-blur-md
                      flex items-center justify-center
                      shadow-lg shadow-primary/10
                      transition-all duration-300
                      group-hover:scale-110 group-hover:bg-primary/25
                    "
                  >
                    <Icon className="w-6 h-6 text-[#1F8A93]" />
                  </div>
                <h3 className="font-bold text-lg mb-2 text-white">{title}</h3>
                <p className="text-background/70 text-sm leading-relaxed text-white/70">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
