import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Users, Target, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                About Mother Tongue
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Pioneer in Localization & Market Facilitation
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mother Tongue, a pioneer in localization and market facilitation
              services in India, provides multilingual translation to adapt your
              brochures, documents, website, multimedia presentations and
              software into any language or culture in the world at very
              impressive tariff.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mother Tongue was established in <strong>2005</strong>. Our staffs
              consists of professionals and domain specialists including content
              developers, native in-country language specialists, subject
              experts, project managers, engineers and technical staff who
              ensure compliance to project requirements.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Today Mother Tongue employs translators across the globe to
              provide cost effective, accurate and native translation solutions
              for companies in almost all industry verticals.
            </p>

            {/* Mission */}
            <div className="bg-teal-50 border-l-4 border-teal-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Target className="text-teal-600" size={24} />
                Our Mission
              </h3>
              <p className="text-gray-700">
                We strive to deliver Value, Excellence and Caring to the
                language community as a whole and thus support the greater goal
                of facilitating communication among members of the global
                community.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Native Translators
                  </h4>
                  <p className="text-sm text-gray-600">
                    In-country language specialists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Domain Experts
                  </h4>
                  <p className="text-sm text-gray-600">
                    Subject matter specialists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Quality Assured
                  </h4>
                  <p className="text-sm text-gray-600">Rigorous QA processes</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle
                  className="text-teal-600 flex-shrink-0 mt-1"
                  size={20}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Cost Effective
                  </h4>
                  <p className="text-sm text-gray-600">Competitive pricing</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition"
              >
                Learn More About Us
              </Link>
            </div>
          </div>

          {/* Right - Images */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl p-8">
                <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/banner-6.jpg"
                    alt="Global Translation Company"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-32 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/logo-4.png"
                    alt="Mother Tongue Logo"
                    fill
                    className="object-contain bg-white p-4"
                  />
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <Users className="text-teal-600" size={28} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900">
                      14 Years
                    </h4>
                    <p className="text-sm text-gray-600">Of Excellence</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Successfully completed 14 years of operations with significant
                  achievements.
                </p>
                <Link
                  href="/about"
                  className="text-teal-600 font-semibold text-sm mt-3 inline-block hover:underline"
                >
                  Read More →
                </Link>
              </div>

              {/* Achievement Badge */}
              <div className="absolute -top-8 -right-8 bg-gradient-to-br from-orange-400 to-orange-600 text-white rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-xl">
                <Award size={32} className="mb-1" />
                <span className="text-xs font-bold text-center">
                  ISO 9001:2015
                  <br />
                  Certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Note */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-gray-400">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Human Translators Matter
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Although the IT companies are high-tech in origin, they still rely
            on human translators—either in-house or as contractors. That's
            because computer translation technologies have not improved to the
            point of providing consistent, high-quality translations.
          </p>
          <p className="text-gray-700 mt-4 font-semibold">
            "They are not there yet, and many times they do not replace a human
            native language translator."
          </p>
        </div>
      </div>
    </section>
  );
}
