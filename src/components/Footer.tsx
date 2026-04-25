export default function Footer() {
  return (
    <footer className="bg-[#1B2A32] text-background/70 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <img
          src="https://images.fillout.com/orgid-630133/flowpublicid-default/widgetid-default/aaXCNEYK5Stez9XnTm5FKR/pasted-image-1776567686771.png"
          alt="Coral Reef USA"
          className="h-10 w-auto"
        />
        <p className="text-sm text-center text-[#FFFFFFB3]">
          © {new Date().getFullYear()} Coral Reef Innovation Africa USA. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-[#FFFFFFB3]">
          <a href="mailto:harriet@us.coralreefafrica.com" className="hover:text-[#FFFFFFB3] transition-colors">
            Contact
          </a>
          <a href="https://coralreefafrica.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            coralreefafrica.com
          </a>
        </div>
      </div>
    </footer>
  );
}
