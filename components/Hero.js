import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Languages, FileCheck, Award } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-32 pb-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-1.jpg"
          alt="Global Translation Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/90 via-white/95 to-blue-50/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                14+ Years of Excellence in Translation Services
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We Speak Your <span className="text-teal-600">Language</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              As we all can imagine, language is very pervasive in all global
              business and that is the reason we believe{" "}
              <strong>"language is our business."</strong>
            </p>

            <p className="text-lg text-gray-600">
              Businesses have become more sensitized to the fact that there are
              a lot of different cultures and{" "}
              <strong>
                "if you want to engage with them effectively, you need to speak
                their languages."
              </strong>
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/contact"
                className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-teal-600">14+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-teal-600">50+</h3>
                <p className="text-gray-600">Languages</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-teal-600">100+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Content - Logo and Badges */}
          <div className="relative">
            {/* Main Logo Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
              <div className="relative h-48 mb-6">
                <Image
                  src="/images/logo-2.png"
                  alt="Mother Tongue - We speak your language"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Truly a Global Translation Company
                </h2>
                <p className="text-gray-600">
                  Courtesy, efficiency, accuracy and a sincere desire to satisfy
                  clients are the key standards by which we would like to be
                  measured
                </p>
              </div>
            </div>

            {/* ISO Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl">
              <div className="relative w-28 h-28">
                <Image
                  src="/images/iso-badge.png"
                  alt="ISO 9001:2015 Certified"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Floating Services Card */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-xl shadow-xl max-w-xs">
              <h3 className="font-bold text-lg mb-3 border-b border-teal-400 pb-2">
                Our Core Services
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Translate
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Localize
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Internationalize
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Globalize
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Multilingualize
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Bar */}
      <div className="container mx-auto px-4 mt-20 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-teal-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Translators across the globe
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Languages className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">50+ Languages</h3>
              <p className="text-gray-600 text-sm">Multilingual expertise</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="text-purple-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Native translators only</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ISO Certified</h3>
              <p className="text-gray-600 text-sm">Industry standards met</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
