import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Building2 } from "lucide-react";

export default function ClientsSection() {
  const clients = [
    { name: "ABN AMRO Bank", website: "www.abnamro.co.in" },
    {
      name: "ACNielsen - A market research Company",
      website: "www.acnielsen.co.in",
    },
    { name: "Asian Clinical Trials", website: "www.act-india.com" },
    {
      name: "Bharat Biotech International Limited",
      website: "www.bharatbiotech.com",
    },
    { name: "Byrraju Foundation", website: "www.byrrajufoundation.org" },
    { name: "Christian Medical College", website: "www.cmcvellore.ac.in" },
    { name: "Dr. Reddy's Laboratories Limited", website: "www.drreddys.com" },
    { name: "GVK Bioscience Pvt. Ltd.", website: "www.gvkbio.com" },
    { name: "Hetero Drugs Limited", website: "www.heterodrugs.com" },
    { name: "Matrix Laboratories Limited", website: "www.matrixlabsindia.com" },
    { name: "Shantha Biotechnics Pvt Ltd", website: "www.shanthabiotech.com" },
    { name: "SKS Microfinance", website: "www.sksindia.com" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Clients
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-gray-600">
            We are proud to serve diverse clients across healthcare, banking,
            research, and technology sectors
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-teal-200 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg group-hover:bg-teal-600 transition-colors">
                  <Building2
                    className="text-teal-600 group-hover:text-white transition-colors"
                    size={24}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition">
                    {client.name}
                  </h3>
                  <a
                    href={`https://${client.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 hover:text-teal-600 flex items-center gap-1 group/link"
                  >
                    <span className="group-hover/link:underline">
                      {client.website}
                    </span>
                    <ExternalLink
                      size={14}
                      className="opacity-0 group-hover/link:opacity-100 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-teal-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">1000+</div>
              <div className="text-teal-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-teal-100">Languages Supported</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">14+</div>
              <div className="text-teal-100">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Join our growing list of satisfied clients
          </p>
          <Link
            href="/clients"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
          >
            View All Clients
          </Link>
        </div>
      </div>
    </section>
  );
}
