import { motion } from "framer-motion";
import { GraduationCap, FileText, School, CheckCircle2, Clock } from "lucide-react";

export default function USPresence() {
  return (
    <section id="us-presence" className="py-24 bg-[#F0F4F54D] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#1F8A93]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          
          {/* HEADER */}
          <div className="text-center mb-16">
            <span className="inline-block bg-[#1F8A93]/10 text-[#1F8A93] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              US Expansion
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
              Our US Presence
            </h2>

            <p className="text-gray-600">
              Partnerships, grants, and pilots already underway.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[0,1,2].map((i) => {

              const isFirst = i === 0;
              const isSecond = i === 1;

              const borderColor = isFirst
                ? "bg-[#1F8A93]"
                : isSecond
                ? "bg-orange-300"
                : "bg-gradient-to-r from-[#1F8A93] to-orange-300";

              const titleColor = isFirst
                ? "text-[#1F8A93]"
                : isSecond
                ? "text-orange-300"
                : "text-transparent bg-clip-text bg-gradient-to-r from-[#1F8A93] to-orange-300";

              const iconColor = isFirst
                ? "text-[#1F8A93]"
                : isSecond
                ? "text-orange-300"
                : "text-white";

              const iconBg = isFirst
                ? "from-[#1F8A93] to-white"
                : isSecond
                ? "from-orange-300 to-white"
                : "from-[#1F8A93] via-orange-300 to-white";

              const tagStyle = isFirst
                ? "text-[#1F8A93] bg-[#1F8A93]/10"
                : isSecond
                ? "text-orange-300 bg-orange-300/10"
                : "text-white bg-gradient-to-r from-[#1F8A93]/20 to-orange-300/20";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -6 }}
                  className="relative bg-white rounded-3xl overflow-hidden border border-white/10 shadow-sm hover:shadow-xl transition-all flex flex-col"
                >

                  {/* TOP BORDER */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${borderColor}`} />

                  {/* ICON AREA */}
                  <div className={`h-28 bg-gradient-to-br ${iconBg} flex items-center justify-center`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center">
                      
                      {i === 0 && <GraduationCap className={`w-7 h-7 ${iconColor}`} />}
                      {i === 1 && <FileText className={`w-7 h-7 ${iconColor}`} />}
                      {i === 2 && <School className={`w-7 h-7 ${iconColor}`} />}
                    
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7 flex flex-col flex-1">

                    {/* TITLE */}
                    <h3 className={`font-bold text-lg mb-5 ${titleColor}`}>
                      {i === 0 && "University Consortium"}
                      {i === 1 && "Federal Grant Pipeline"}
                      {i === 2 && "Title I School Pilot"}
                    </h3>

                    {/* CONTENT SWITCH */}
                    {i === 0 && (
                      <ul className="space-y-4">
                        {[
                          { name: "George Mason University Enterprise Center", note: "Arlington, VA", confirmed: true },
                          { name: "Durham University", note: "UK/US Anchor", confirmed: true },
                          { name: "ASU Edson E+I", note: "Active Engagement", confirmed: false },
                        ].map(({ name, note, confirmed }) => (
                          <li key={name} className="flex gap-3 items-start">
                            {confirmed ? (
                              <CheckCircle2 className={`w-4 h-4 mt-1 ${iconColor}`} />
                            ) : (
                              <Clock className="w-4 h-4 mt-1 text-gray-400" />
                            )}
                            <div>
                              <p className="text-sm font-semibold text-gray-800">{name}</p>
                              <p className="text-xs text-gray-500">{note}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {i === 1 && (
                      <ul className="space-y-4">
                        {[
                          { label: "NSF SBIR Phase I", date: "May 2026" },
                          { label: "IES SBIR", date: "Fall 2026" },
                          { label: "DOD SBIR", date: "April 2026 solicitation" },
                        ].map(({ label, date }) => (
                          <li key={label} className="flex gap-3 items-start">
                            <Clock className={`w-4 h-4 mt-1 ${iconColor}`} />
                            <div>
                              <p className="text-sm font-semibold text-gray-800">{label}</p>
                              <p className="text-xs text-gray-500">{date}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    {i === 2 && (
                      <>
                        <p className="text-sm text-gray-600 mb-5">
                          <strong>Fairfax County Public Schools</strong> — in conversation for a 3–5 school pilot in Virginia.
                        </p>

                        <div className="grid grid-cols-2 gap-3 mt-auto">
                          <div className="bg-[#1F8A93]/10 rounded-xl px-3 py-3 text-center">
                            <div className={`text-xl font-extrabold ${titleColor}`}>3–5</div>
                            <div className="text-xs text-gray-500">Schools</div>
                          </div>

                          <div className="bg-orange-500/10 rounded-xl px-3 py-3 text-center">
                            <div className={`text-xl font-extrabold ${titleColor}`}>VA</div>
                            <div className="text-xs text-gray-500">Virginia</div>
                          </div>
                        </div>
                      </>
                    )}

                  </div>
                </motion.div>
              );
            })}

          </div>
        </motion.div>
      </div>
    </section>
  );
}