import { motion } from "framer-motion";

const stats = [
  { value: "750", label: "AI Smart Labs Deployed" },
  { value: "700", label: "Schools in Active Use" },
  { value: "45,000+", label: "Teachers Trained" },
  { value: "2,300", label: "Master Coaches Activated" },
  { value: "~1M", label: "Learners Reached" },
  { value: "7", label: "Countries by End of 2026" },
];

export default function TheNumbers() {
  return (
    <section id="numbers" className="py-20 bg-[#1F8A93]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            The Numbers That Matter
          </h2>
          <p className="text-white/70 text-center mb-14 max-w-xl mx-auto">
            Eight years of deployment. Real schools. Real teachers. Real learners.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center bg-white/10 rounded-2xl p-5"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{s.value}</div>
                <div className="text-xs text-white/70 leading-tight">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
