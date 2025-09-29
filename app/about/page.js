import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import {
  Target,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Globe,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              About Mother Tongue
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Pioneer in Localization & Translation Services
            </h1>
            <p className="text-xl text-gray-600">
              Established in 2005, we've been bridging language barriers and
              connecting cultures for over 14 years
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mother Tongue, a pioneer in localization and market
                  facilitation services in India, provides multilingual
                  translation to adapt your brochures, documents, website,
                  multimedia presentations and software into any language or
                  culture in the world at very impressive tariff.
                </p>
                <p>
                  Mother Tongue was established in <strong>2005</strong>. Our
                  staff consists of professionals and domain specialists
                  including content developers, native in-country language
                  specialists, subject experts, project managers, engineers and
                  technical staff who ensure compliance to project requirements.
                </p>
                <p>
                  Today Mother Tongue employs translators across the globe to
                  provide cost effective, accurate and native translation
                  solutions for companies in almost all industry verticals.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src="/images/banner-6.jpg"
                    alt="Global Translation Company"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center bg-white rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    14+ Years
                  </h3>
                  <p className="text-gray-600">Of Translation Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target size={48} className="mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-teal-100 leading-relaxed">
              At Mother Tongue, we strive to deliver Value, Excellence and
              Caring to the language community as a whole and thus support the
              greater goal of facilitating communication among members of the
              global community.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              A diverse team of language experts and domain specialists
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-teal-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Content Developers
              </h3>
              <p className="text-sm text-gray-600">
                Creating quality content across languages
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Native Language Specialists
              </h3>
              <p className="text-sm text-gray-600">
                In-country translation experts
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Subject Experts</h3>
              <p className="text-sm text-gray-600">Domain-specific knowledge</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Project Managers</h3>
              <p className="text-sm text-gray-600">Ensuring timely delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Mother Tongue?
            </h2>
            <p className="text-xl text-gray-600">
              Three compelling reasons to trust us with your translation needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-teal-600 mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Track Record
              </h3>
              <p className="text-gray-600">
                We have never lost a customer and have held on to some high
                profile customers over the years.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-teal-600 mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our Guarantee
              </h3>
              <p className="text-gray-600">
                We will work with you and your contacts where necessary to
                ensure a translation is carried out to your satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-5xl font-bold text-teal-600 mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our People
              </h3>
              <p className="text-gray-600">
                Our translators are all professional, mother tongue translators
                with many years' experience behind them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standards & Compliance */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Quality Standards
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    ISO 9001:2015 Certified
                  </h3>
                  <p className="text-gray-600">
                    Internationally recognized quality management standards
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Confidentiality Assured
                  </h3>
                  <p className="text-gray-600">
                    Non-disclosure agreements with all professionals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Native Translators
                  </h3>
                  <p className="text-gray-600">
                    All translations by mother tongue speakers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-gray-600">
                    Multiple review stages for accuracy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help with your translation needs
          </p>
          <Link
            href="/contact"
            className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
