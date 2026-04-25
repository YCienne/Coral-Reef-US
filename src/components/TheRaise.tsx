import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Globe } from "lucide-react";
import InvestorBriefingModal from "./InvestorBriefingModal";

export default function TheRaise() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="raise" className="py-20 bg-[#1F8A93]/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="inline-block bg-[#F36F16]/40 text-secondary text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4">
              Capital Markets
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Raise</h2>
          </div>
          <div className="bg-gradient-to-br from-[#1F8A93]/20 via-background to-[#F36F16]/20 rounded-3xl border border-primary/20 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center border border-border">
                <DollarSign size={28} className="text-[#1F8A93] mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-foreground mb-1">$12–18M</div>
                <div className="text-sm text-[#1F8A93]">Phase 1 Raise</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center border border-border">
                <TrendingUp size={28} className="text-[#F36F16] mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-foreground mb-1">$150M</div>
                <div className="text-sm text-[#1F8A93]">5-Year Capital Target</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm text-center border border-border">
                <Globe size={28} className="text-[#1F8A93] mx-auto mb-3" />
                <div className="text-2xl font-extrabold text-foreground mb-1">100–300</div>
                <div className="text-sm text-[#1F8A93]">AI Smart Labs in Nigeria</div>
              </div>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed mb-4">
              We are raising <strong className="text-foreground">$12–18M Phase 1</strong> to deploy
              100–300 AI Smart Labs in Nigeria and activate LearnAIrium at scale. Our 5-year capital
              target is <strong className="text-foreground">$150M</strong> across a blended
              VC/DFI/corporate/government stack.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              If you are an investor, DFI, or foundation interested in the infrastructure layer of
              Africa's AI economy — and its US expansion — we want to talk.
            </p>
            <div className="text-center">
              <Button
                size="lg"
                className="block mx-auto text-base px-8 py-4 bg-[#F36F16] hover:bg-secondary/90 text-white shadow-md"
                onClick={() => setModalOpen(true)}
              >
                Request an Investor Briefing
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <InvestorBriefingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
