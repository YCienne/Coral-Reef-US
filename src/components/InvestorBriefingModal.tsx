import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { submitInvestorBriefing } from "../lib/api";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function InvestorBriefingModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", organization: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.organization) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await submitInvestorBriefing(form);
      setSubmitted(true);
    } catch {
      toast.error("Something went wrong. Please try emailing us directly at harriet@us.coralreefafrica.com");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", organization: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">Request Investor Briefing</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Fill in your details and we'll send the investor briefing document directly to your inbox.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-semibold">
                  Email Address <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="organization" className="text-sm font-semibold">
                  Organization <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="organization"
                  name="organization"
                  placeholder="Acme Capital / World Bank / ..."
                  value={form.organization}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-5 text-base bg-primary"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin mr-2" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send Me the Briefing
                  </>
                )}
              </Button>
            </form>
          </>
        ) : (
          <div className="py-10 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle2 size={36} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Request Received!</h3>
            <p className="text-muted-foreground text-sm max-w-xs">
              Thank you, <strong>{form.name}</strong>. The investor briefing document has been sent to{" "}
              <strong>{form.email}</strong>. We look forward to speaking with you.
            </p>
            <Button onClick={handleClose} className="mt-2">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
