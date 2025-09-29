import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Globe2,
  BookOpen,
  Stethoscope,
  Code,
  Edit3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Comprehensive Translation Solutions
            </h1>
            <p className="text-xl text-gray-600">
              We provide translation services in any form from print media to
              electronic media in any language
            </p>
          </div>
        </div>
      </section>

      {/* Translation Services */}
      <section id="translation" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-teal-100 px-4 py-2 rounded-full mb-6">
                <FileText className="text-teal-600" size={20} />
                <span className="text-teal-700 font-semibold">
                  Translation Services
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Translation in Any Language
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We provide translation services in any form from print media to
                electronic media in any language (foreign language to English
                and Indian language to English and vice versa).
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-teal-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-gray-700">
                    Translation in any form (From print media to electronic
                    media)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-teal-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-gray-700">
                    Translation in any subject (Technical and Business
                    documents)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle
                    className="text-teal-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-gray-700">
                    Translation with Integrated Services
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What We Translate
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Business Documents</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Technical Manuals</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Marketing Materials</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Legal Documents</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-3 rounded-lg">
                  <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                  <span className="text-gray-700">Academic Papers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Document Localization */}
      <section id="document-localization" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Localization Process
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      step: "1",
                      title: "Project Assessment",
                      desc: "Feasibility and requirements analysis",
                    },
                    {
                      step: "2",
                      title: "Resource Allocation",
                      desc: "Expert team assignment",
                    },
                    {
                      step: "3",
                      title: "Translation",
                      desc: "Native language specialists work",
                    },
                    {
                      step: "4",
                      title: "Proofreading",
                      desc: "Quality check and verification",
                    },
                    {
                      step: "5",
                      title: "Integration",
                      desc: "Design and graphics integration",
                    },
                    {
                      step: "6",
                      title: "Final Review",
                      desc: "Complete quality assurance",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 pb-4 border-b border-gray-200 last:border-0"
                    >
                      <div className="bg-teal-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-3 bg-blue-100 px-4 py-2 rounded-full mb-6">
                <Globe2 className="text-blue-600" size={20} />
                <span className="text-blue-700 font-semibold">
                  Document Localization
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Customization for Global Markets
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We do customization (and translation) of documents, letters, for
                any country, especially those countries which have language,
                cultural and other trade barriers.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Through localization, your company and your products can be
                presented to the target audience to ensure smooth and hindrance
                free acceptance projecting an international image of the company
                having high quality products.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Localization ensures cultural acceptability by eliminating the
                language barriers and any offensive colors, graphics, symbols,
                geographic significance, etc.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Start Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Localization */}
      <section id="publishing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <BookOpen className="text-purple-600" size={20} />
                <span className="text-purple-700 font-semibold">
                  Publishing Localization
                </span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Brochures & Product Manuals
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Publishing localization and Internationalization refers to
                customization (and translation) of brochures and product
                manuals, for any country, especially those countries which have
                language, cultural and other trade barriers.
              </p>

              <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl mb-6">
                <h4 className="font-bold text-gray-900 mb-3">
                  Software We Use:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "QuarkXPress",
                    "FrameMaker",
                    "InDesign",
                    "PageMaker",
                    "Illustrator",
                    "CorelDraw",
                    "Photoshop",
                  ].map((soft, idx) => (
                    <span
                      key={idx}
                      className="bg-white px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {soft}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition"
              >
                Request Service <ArrowRight size={18} />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                What's Included
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-purple-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Brochure Design
                    </h4>
                    <p className="text-sm text-gray-600">
                      Multilingual marketing materials
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-purple-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Product Manuals
                    </h4>
                    <p className="text-sm text-gray-600">
                      Technical documentation translation
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-purple-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Graphics Integration
                    </h4>
                    <p className="text-sm text-gray-600">
                      Layout design in multiple languages
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle
                    className="text-purple-600 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Cultural Adaptation
                    </h4>
                    <p className="text-sm text-gray-600">
                      Ensuring cultural acceptability
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Research Translation */}
      <section id="clinical" className="py-20 bg-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-rose-100 px-4 py-2 rounded-full mb-6">
              <Stethoscope className="text-rose-600" size={20} />
              <span className="text-rose-700 font-semibold">
                Clinical Research Translation
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Specialized Medical Translation Services
            </h2>
            <p className="text-xl text-gray-600">
              Expert translation for clinical trials, medical documents, and
              pharmaceutical industry requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Clinical Trials</h3>
              <p className="text-gray-600">
                Informed consent forms, patient diaries, and trial protocols
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">
                Medical Documents
              </h3>
              <p className="text-gray-600">
                Medical reports, research papers, and case studies
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3">Pharmaceutical</h3>
              <p className="text-gray-600">
                Drug labels, package inserts, and regulatory documents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Translation */}
      <section id="website" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <Code className="text-orange-600" size={20} />
              <span className="text-orange-700 font-semibold">
                Website Translation
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Multilingual Website Solutions
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Expand your global reach with professional website translation and
              localization services
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-700 transition shadow-lg"
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Editing & Proofreading */}
      <section id="editing" className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-green-100 px-4 py-2 rounded-full mb-6">
              <Edit3 className="text-green-600" size={20} />
              <span className="text-green-700 font-semibold">
                Editing & Proofreading
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional Quality Assurance
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert editors and proofreaders ensure accuracy, consistency,
              and quality in all translations
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your translation needs and get a free
            quote
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
