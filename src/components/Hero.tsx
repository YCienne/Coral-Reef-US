import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&auto=format&fit=crop&q=80')",
        }}
      />
      {/* Gradient overlay: teal (primary) left → deep navy right, with orange (secondary) accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1F8A93]/90 via-foreground/70 to-[#F36F16]/80" />
      {/* Extra depth layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            
            <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full mb-7 tracking-widest uppercase border border-white/20">
              Coral Reef Innovation Africa. Now in the USA
            </span>
           
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Africa Built It.
              <br />
              <span className="text-secondary drop-shadow-md">Now We're Bringing</span>
              <br />
              It to America.
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto mb-6 leading-relaxed">
              Coral Reef Innovation Africa deploys offline-capable AI Smart Labs and the LearnAIrium
              platform in environments where other EdTech companies don't go.
            </p>
            <div className="flex flex-wrap justify-center gap-5 text-white font-semibold text-sm mb-8">
              {["750 Labs", "700 Schools", "45,000+ Teachers Trained", "~1 Million Learners Reached"].map(
                (stat, i) => (
                  <span key={stat} className="flex items-center gap-2">
                    {i > 0 && <span className="text-white/40">|</span>}
                    <span className="text-secondary font-bold">{stat}</span>
                  </span>
                )
              )}
            </div>
            <p className="text-2xl font-bold text-white mb-10 tracking-wide">Now we're here.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base px-8 py-6 bg-white hover:bg-secondary/90 text-secondary-foreground shadow-lg"
              >
                <a href="#contact">Partner with Us</a>
              </Button>
              <Button
                asChild
                size="lg"
                // variant="outline"
                className="text-base px-8 py-6 border-white/60 text-white hover:bg-white/15 bg-[#F36F16] backdrop-blur-sm"
              >
                <a href="#raise">Invest in the Build</a>
              </Button>
            </div>
          </motion.div>

          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl px-8 py-6 max-w-2xl mx-auto"
          >
            <p className="text-lg font-medium text-white italic leading-relaxed">
              "Students placed{" "}
              <span className="text-secondary font-bold">5th out of 50</span> in a coding
              competition after just one month of training, with no prior device exposure."
            </p>
            <p className="text-sm text-white/60 mt-3">~ AI Smart Lab student cohort, Ghana</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
