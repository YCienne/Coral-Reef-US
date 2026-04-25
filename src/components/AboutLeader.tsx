import { motion } from "framer-motion";
import Richard from "../assets/Richard.jpg";

export default function AboutLeader() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Photo */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="relative w-52 h-64 rounded-2xl overflow-hidden shadow-lg border-4 border-primary/20">
                <img
                  src={Richard}
                  alt="Richard Osei-Anim"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom teal gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-primary/70 to-transparent flex items-end px-4 pb-3">
                  <span className="text-white text-xs font-semibold tracking-wide">Group CEO</span>
                </div>
              </div>
              {/* Orange accent badge */}
              <div className="mt-3 bg-[#F36F16] text-white text-xs font-bold px-3 py-1.5 rounded-full text-center shadow">
                8+ Years · Ghana to USA
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <span className="text-xs font-bold text-[#1F8A93] uppercase tracking-widest">Leadership</span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                Richard Osei-Anim
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Richard Osei-Anim is Group CEO of Coral Reef Innovation Africa and Senior Partner at
                Ishmael Yamson & Associates, leading the AI Global Practice and Organisational
                Transformation Advisory.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over eight years, he has deployed{" "}
                <strong className="text-foreground">750 AI Smart Labs</strong> across{" "}
                <strong className="text-foreground">700 schools in Ghana</strong>, trained{" "}
                <strong className="text-foreground">45,000+ teachers</strong>, and reached nearly{" "}
                <strong className="text-foreground">one million learners</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                He holds an MBA from <strong className="text-foreground">Durham University</strong>{" "}
                and has advised Ghana COCOBOD, Ecobank, UNESCO, and the Ministry of Education.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Ghana COCOBOD", "Ecobank", "UNESCO", "Ministry of Education", "Durham University MBA"].map(
                  (org) => (
                    <span
                      key={org}
                      className="bg-[#1F8A931A] text-[#1F8A93] text-xs font-semibold px-3 py-1.5 rounded-full"
                    >
                      {org}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
