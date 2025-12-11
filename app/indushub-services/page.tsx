import { SiteHeader } from "@/components/site-header";

const services = [
  {
    title: "Advisory & Structuring",
    description:
      "We evaluate your working capital mix, understand contractual obligations, and craft the optimal surety solution for each project.",
  },
  {
    title: "Insurer Partnerships",
    description:
      "Indushub works with top-rated insurance carriers to negotiate competitive terms, limits, and collateral requirements on your behalf.",
  },
  {
    title: "Program Management",
    description:
      "From documentation to issuance, renewals, and claims assistance, our specialists manage the end-to-end lifecycle of your bonds.",
  },
  {
    title: "Risk Analytics",
    description:
      "We provide dashboards and analytics so CXOs can track exposure, expiries, and project-level performance in real time.",
  },
];

export default function IndushubServicesPage() {
  return (
    <div className="min-h-screen bg-[#f5f3f0] text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-6xl bg-white px-6 py-16 shadow-sm md:px-12">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#cf6734]">
          Services
        </p>
        <h1 className="mt-4 text-[32px] font-semibold text-slate-900">
          IndusHub Services
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-700">
          Beyond placement, we stay with you throughout the project lifecycle.
          Our interdisciplinary team brings insurance, banking, and engineering
          expertise to help you deploy surety in the most efficient way.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-sm border border-slate-200 bg-[#f9f7f4] p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}


