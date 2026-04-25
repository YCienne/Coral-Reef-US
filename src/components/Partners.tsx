import { motion } from "framer-motion";

const partners = [
  { name: "Intel", logo: "https://cdn.mos.cms.futurecdn.net/MKBZhC5Dz7u76BeTtkgW3a.jpg" },
  { name: "Access Bank", logo: "https://ghanatalksbusiness.com/wp-content/uploads/2019/06/access-bank-1.jpg" },
  { name: "MTN", logo: "https://cdn.worldvectorlogo.com/logos/mtn-3.svg" },
  { name: "Mastercard Foundation", logo: "https://mifos.org/wp-content/uploads/2021/08/mastercard-foundation-vector-logo-1.png" },
  { name: "Ministry of Education (Ghana)", logo: "https://pbs.twimg.com/profile_images/1928411971889590273/halbPXxm_400x400.jpg" },
  { name: "Durham University", logo: "https://wp.logos-download.com/wp-content/uploads/2020/06/Durham_University_Logo.png?dl" },
  { name: "George Mason University", logo: "https://www.logo-designer.co/storage/2024/04/2024-george-mason-university-new-logo-design.png" },
  { name: "Ecobank", logo: "https://toppng.com/uploads/preview/the-pan-african-bank-ecobank-logo-11563959485cpume2ktri.png" },
  { name: "ABSA", logo: "https://p1.hiclipart.com/preview/801/708/1022/circle-logo-absa-group-limited-organization-bank-rebranding-text-line-png-clipart.jpg" },
  { name: "Coronation Insurance", logo: "https://ghanainsurers.org.gh/wp-content/uploads/2025/10/New-Project-3.png" },
];

function PartnerCard({ name, logo }: { name: string; logo: string | null }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 bg-[#F0F4F566] border border-border rounded-2xl px-5 py-5 shadow-sm hover:shadow-md hover:border-primary/30 transition-all min-h-[110px] group">
      {logo ? (
        <img
          src={logo}
          alt={name}
          className="h-10 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
          {name.charAt(0)}
        </div>
      )}
      <span className="text-xs font-semibold text-muted-foreground text-center leading-tight">{name}</span>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Who We Work With
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-sm">
            A trusted network of global institutions, banks, and governments.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <PartnerCard {...p} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
