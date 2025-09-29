import Link from "next/link";
import {
  FileText,
  Globe2,
  BookOpen,
  Stethoscope,
  Code,
  Edit3,
  ArrowRight,
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: "Translation Services",
      description:
        "Translation in any form from print media to electronic media in any language (foreign to English and Indian to English and vice versa).",
      color: "teal",
      link: "/services#translation",
    },
    {
      icon: Globe2,
      title: "Document Localization",
      description:
        "Customization and translation of documents for any country, eliminating language, cultural and trade barriers.",
      color: "blue",
      link: "/services#document-localization",
    },
    {
      icon: BookOpen,
      title: "Publishing Localization",
      description:
        "Customization of brochures and product manuals with cultural acceptability and international image.",
      color: "purple",
      link: "/services#publishing",
    },
    {
      icon: Stethoscope,
      title: "Clinical Research Translation",
      description:
        "Specialized translation services for clinical trials, medical documents and pharmaceutical industry.",
      color: "rose",
      link: "/services#clinical",
    },
    {
      icon: Code,
      title: "Website Translation",
      description:
        "Multilingual website translation and localization to reach global audiences effectively.",
      color: "orange",
      link: "/services#website",
    },
    {
      icon: Edit3,
      title: "Editing & Proofreading",
      description:
        "Professional editing and proofreading services to ensure accuracy and quality in translations.",
      color: "green",
      link: "/services#editing",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      teal: "bg-teal-100 text-teal-600 group-hover:bg-teal-600",
      blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600",
      purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600",
      rose: "bg-rose-100 text-rose-600 group-hover:bg-rose-600",
      orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600",
      green: "bg-green-100 text-green-600 group-hover:bg-green-600",
    };
    return colors[color];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Comprehensive Translation Solutions
          </h2>
          <p className="text-xl text-gray-600">
            We provide translation services in any form from print media to
            electronic media in any language
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Link
                href={service.link}
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 rounded-xl ${getColorClasses(
                    service.color
                  )} flex items-center justify-center mb-6 transition-colors group-hover:text-white`}
                >
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center text-teal-600 font-semibold group-hover:gap-2 transition-all">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Integrated Services */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Translation with Integrated Services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer comprehensive integrated services including graphics
                integration, audio and video documentation, and internet
                multilingual catalogues and manuals.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Brochure & Presentation Design
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Profile Graphics Integration</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">Audio & Video Documentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Internet Multilingual Catalogues
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                  <p className="text-gray-700">
                    Technical Manuals & Documentation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                What We Do...
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Translation in any form (From print media to electronic
                    media)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Translation in any subject (Technical and Business
                    documents)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Translation with Integrated Services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Clinical Research Translation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Web Site Translation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-teal-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Editing & Proofreading</span>
                </li>
              </ul>

              <Link
                href="/services"
                className="inline-block mt-8 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
