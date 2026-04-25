import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { toast } from "sonner";

export default function UniversityPartnerships() {
  return (
    <section id="university" className="py-20 bg-[#C2E7F066]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-16 h-16 bg-[#C2E7F066] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen size={30} className="text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">University Partnerships</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            We are building the agentic operations engine that lets us scale without scaling headcount. We are looking for US university partners to co-build it with us.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            <strong className="text-foreground">Six live workstreams. Real data. Real impact.</strong> Student teams own one workstream each — as a capstone project, summer program, or research collaboration.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10 text-sm">
            {[
              "AI Curriculum Design",
              "Teacher Training Systems",
              "Performance Analytics",
              "Agentic Operations",
              "Impact Measurement",
              "Deployment Logistics",
            ].map((stream) => (
              <div
                key={stream}
                className="bg-white border border-border rounded-xl px-4 py-3 text-foreground font-medium shadow-sm"
              >
                {stream}
              </div>
            ))}
          </div>
          <Button
            size="lg"
            // variant="outline"
            className="block mx-auto border-2 border-[#1F8A93] text-[#1F8A93] hover:bg-primary/10 bg-white"
            onClick={() => {
              window.location.href = "mailto:harriet@us.coralreefafrica.com?subject=University Partnership Playbook Request";
              toast("Opening your email client...");
            }}
          >
            Download the Partnership Playbook
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
