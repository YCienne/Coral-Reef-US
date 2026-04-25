import { motion } from "framer-motion";
import { Monitor, BrainCircuit, Shield } from "lucide-react";

const products = [
  {
    icon: Monitor,
    name: "AI Smart Labs",
    desc: "Edge-deployed, offline-capable AI learning environments. No internet required. Each lab integrates hardware, curated curriculum, and teacher training tools into a single managed unit — running on the same architecture we use across 700 schools in Ghana.",
    tag: "Hardware + Curriculum",
    color: "#1F8A93",
    light: "bg-[#1F8A93]/10",
    border: "bg-[#1F8A93]",
    gradient: "from-[#1F8A93] to-white",
    text: "text-[#1F8A93]",
    stats: [
      { label: "Schools", value: "700" },
      { label: "Countries", value: "7" },
    ],
  },
  {
    icon: BrainCircuit,
    name: "LearnAIrium",
    desc: "An AI-augmented learning OS that adapts to each student's pace, trains teachers through AI-guided modules, and generates automated performance data. Built for the environments others ignore.",
    tag: "Learning Platform",
    color: "#F97316",
    light: "bg-[#F97316]/10",
    border: "bg-[#F97316]",
    gradient: "from-[#F97316] to-white",
    text: "text-[#F97316]",
    stats: [
      { label: "Teachers", value: "45K+" },
      { label: "Learners", value: "~1M" },
    ],
  },
  {
    icon: Shield,
    name: "Agentic Transformation Layer",
    desc: "For enterprises and governments requiring data sovereignty and secure AI deployment — an offline-capable AI infrastructure stack that replaces cloud-dependent solutions.",
    tag: "Enterprise & Government",
     color: "gradient",
    light: "bg-gradient-to-r from-[#1F8A93]/10 to-[#F97316]/10",
    border: "bg-gradient-to-r from-[#1F8A93] to-[#F97316]",
    gradient: "from-[#1F8A93] via-[#F97316] to-white",
    text: "text-transparent bg-clip-text bg-gradient-to-r from-[#1F8A93] to-[#F97316]",
    stats: [
      { label: "Offline", value: "100%" },
      { label: "Sovereign", value: "Data" },
    ],
  },
];

export default function WhatWeBuild() {
  const aiLab = products[0]; // First product (AI Smart Labs)
  const otherProducts = products.slice(1); // Remaining 2

  const aiLabImages = [
    "https://www.coralreefafrica.com/wp-content/uploads/2025/10/KAY_3515-scaled.jpg",
    "https://www.coralreefafrica.com/wp-content/uploads/2025/10/Bl4-1.jpg",
    "https://www.coralreefafrica.com/wp-content/uploads/2024/11/Untitled-design98765.png",
    "https://www.coralreefafrica.com/wp-content/uploads/2024/11/DSC_0959-scaled.jpg",
  ];

  return (
    <section id="what-we-build" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#1F8A93]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#1F8A93]/10 text-[#1F8A93] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Our Products
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            What We Build
          </h2>

          <p className="text-black/70 max-w-xl mx-auto">
            Three integrated products. One mission: AI education infrastructure for every learner, everywhere.
          </p>
        </motion.div>

        {/* 🔥 FEATURE SECTION (AI SMART LABS) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#1F8A93]/10 text-[#1F8A93] inline-block mb-4">
                {aiLab.tag}
              </span>

              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1F8A93] mb-4">
                {aiLab.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {aiLab.desc}
              </p>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-6">
                {aiLab.stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-extrabold text-[#1F8A93]">
                      {s.value}
                    </div>
                    <div className="text-sm text-gray-500">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE GRID */}
            <div className="grid grid-cols-2 gap-4">
              {aiLabImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="overflow-hidden rounded-2xl"
                >
                  <img
                    src={img}
                    alt="AI Smart Lab"
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* 🧩 REMAINING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {otherProducts.map((p, i) => {

            const isSecond = i === 0;

            const borderColor = isSecond
              ? "bg-orange-500"
              : "bg-gradient-to-r from-[#1F8A93] to-orange-300";

            const iconTextColor = isSecond
              ? "text-orange-300"
              : "text-white";

            const tagStyle = isSecond
              ? "text-orange-300 bg-orange-300/10"
              : "text-white bg-gradient-to-r from-[#1F8A93]/80 to-orange-500/20";

            const titleColor = isSecond
              ? "text-orange-300"
              : "text-transparent bg-clip-text bg-gradient-to-r from-[#1F8A93] to-orange-300";

            const iconBgGradient = isSecond
              ? "from-orange-300 to-white"
              : "from-[#1F8A93]/50 via-orange-300 to-white";

            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white rounded-3xl border border-white/10 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
              >
                
                <div className={`absolute top-0 left-0 right-0 h-1 ${borderColor}`} />

                <div className={`h-32 bg-gradient-to-br ${iconBgGradient} flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center"
                  >
                    <p.icon className={`w-8 h-8 ${iconTextColor}`} />
                  </motion.div>
                </div>

                <div className="p-7 flex flex-col flex-1">
                  <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit mb-3 ${tagStyle}`}>
                    {p.tag}
                  </span>

                  <h3 className={`text-xl font-extrabold mb-3 ${titleColor}`}>
                    {p.name}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-gray-200">
                    {p.stats.map((s) => (
                      <div key={s.label} className="text-center">
                        <div className={`text-xl font-extrabold ${titleColor}`}>
                          {s.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}