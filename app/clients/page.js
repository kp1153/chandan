import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ExternalLink,
  Building2,
  Award,
  TrendingUp,
  Users,
  Globe,
} from "lucide-react";

export default function ClientsPage() {
  const clients = [
    { name: "ABN AMRO Bank", website: "www.abnamro.co.in", sector: "Banking" },
    {
      name: "ACNielsen - A market research Company",
      website: "www.acnielsen.co.in",
      sector: "Market Research",
    },
    {
      name: "Asian Clinical Trials",
      website: "www.act-india.com",
      sector: "Healthcare",
    },
    {
      name: "Bharat Biotech International Limited",
      website: "www.bharatbiotech.com",
      sector: "Biotechnology",
    },
    {
      name: "Byrraju Foundation",
      website: "www.byrrajufoundation.org",
      sector: "Non-Profit",
    },
    {
      name: "Christian Medical College",
      website: "www.cmcvellore.ac.in",
      sector: "Healthcare",
    },
    {
      name: "CST Valinox",
      website: "www.cstvalinox.com",
      sector: "Manufacturing",
    },
    {
      name: "Dr. Reddy's Laboratories Limited",
      website: "www.drreddys.com",
      sector: "Pharmaceuticals",
    },
    {
      name: "GVK Bioscience Pvt. Ltd.",
      website: "www.gvkbio.com",
      sector: "Bioscience",
    },
    {
      name: "Hetero Drugs Limited",
      website: "www.heterodrugs.com",
      sector: "Pharmaceuticals",
    },
    {
      name: "Jupiter Bioscience Limited",
      website: "www.jupiterbioscience.com",
      sector: "Bioscience",
    },
    {
      name: "Kêrn Communications",
      website: "www.kern-comm.com",
      sector: "Communications",
    },
    {
      name: "LSG-Sky Chefs",
      website: "www.lsgskychefs.com",
      sector: "Aviation",
    },
    {
      name: "Matrix Laboratories Limited",
      website: "www.matrixlabsindia.com",
      sector: "Pharmaceuticals",
    },
    { name: "Nettlinx", website: "www.nettlinx.com", sector: "Technology" },
    {
      name: "Nizam Institute of Medical Sciences",
      website: "nims.ap.nic.in",
      sector: "Healthcare",
    },
    {
      name: "QED Pharmaceutical",
      website: "www.qed-qed.com",
      sector: "Pharmaceuticals",
    },
    {
      name: "Shantha Biotechnics Pvt Ltd",
      website: "www.shanthabiotech.com",
      sector: "Biotechnology",
    },
    {
      name: "Sipra Labs",
      website: "www.sipralabs.com",
      sector: "Pharmaceuticals",
    },
    {
      name: "SKS Microfinance",
      website: "www.sksindia.com",
      sector: "Finance",
    },
    {
      name: "SV Power Pvt Ltd",
      website: "www.kvkenergy.com",
      sector: "Energy",
    },
    {
      name: "Zydus Research Center",
      website: "www.zyduscontractmanufacturing.com",
      sector: "Pharmaceuticals",
    },
  ];

  const sectors = [...new Set(clients.map((c) => c.sector))];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Clients
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Trusted by Leading Organizations
            </h1>
            <p className="text-xl text-gray-600">
              We are proud to serve diverse clients across healthcare, banking,
              research, and technology sectors worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-teal-600" size={28} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-purple-600" size={28} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {sectors.length}+
              </div>
              <div className="text-gray-600">Industry Sectors</div>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={28} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">14+</div>
              <div className="text-gray-600">Years Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Few of Our Clients
            </h2>
            <p className="text-xl text-gray-600">
              Organizations that trust us with their translation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-teal-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-600 transition-colors flex-shrink-0">
                    <Building2
                      className="text-teal-600 group-hover:text-white transition-colors"
                      size={24}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition line-clamp-2">
                      {client.name}
                    </h3>
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                        {client.sector}
                      </span>
                    </div>
                    <a
                      href={`https://${client.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 hover:text-teal-600 flex items-center gap-1 group/link"
                    >
                      <span className="group-hover/link:underline truncate">
                        {client.website}
                      </span>
                      <ExternalLink
                        size={14}
                        className="opacity-0 group-hover/link:opacity-100 transition-opacity flex-shrink-0"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Sectors */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Specialized translation solutions across multiple sectors
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 px-6 py-3 rounded-full text-gray-700 font-semibold hover:from-teal-600 hover:to-blue-600 hover:text-white transition-all cursor-default"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Style Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Users size={48} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Why Clients Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-teal-100">Client Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Native</div>
                <div className="text-teal-100">Language Specialists</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-teal-100">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the quality and professionalism that leading
            organizations trust
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
