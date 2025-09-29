import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  DollarSign,
  Mail,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function OurRatesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
              <DollarSign className="text-teal-600" size={20} />
              <span className="text-teal-700 font-semibold">Our Rates</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Competitive Translation Rates
            </h1>
            <p className="text-xl text-gray-600">
              Get professional translation services at very impressive tariff
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Pricing Info Card */}
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 lg:p-12 mb-12 border border-teal-100">
              <div className="text-center mb-8">
                <FileText className="text-teal-600 mx-auto mb-4" size={48} />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  For Translation Rates
                </h2>
                <p className="text-lg text-gray-700">
                  Contact us using any of the following email links and we
                  promise to get back to you as soon as possible. Please help us
                  serving you better by providing us your inquiry in detail.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-100 p-3 rounded-lg">
                      <Mail className="text-teal-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        For Pricing & Translation Details
                      </h3>
                      <a
                        href="mailto:info@mothertongue.co.in?subject=Translation Rate Inquiry"
                        className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2"
                      >
                        info@mothertongue.co.in
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        For Existing Clients
                      </h3>
                      <a
                        href="mailto:info@mothertongue.co.in?subject=Existing Client Inquiry"
                        className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2"
                      >
                        info@mothertongue.co.in
                        <ArrowRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Affects Pricing */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                What Affects Translation Pricing?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="text-teal-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Language Combination
                      </h3>
                      <p className="text-gray-600">
                        Source and target language pair affects the rate
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="text-teal-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Document Complexity
                      </h3>
                      <p className="text-gray-600">
                        Technical or specialized content may require domain
                        experts
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="text-teal-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Word Count
                      </h3>
                      <p className="text-gray-600">
                        Total volume of content to be translated
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="text-teal-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Turnaround Time
                      </h3>
                      <p className="text-gray-600">
                        Rush orders may have expedited pricing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="text-teal-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        Additional Services
                      </h3>
                      <p className="text-gray-600">
                        Proofreading, editing, desktop publishing, etc.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      className="text-teal-600 flex-shrink-0 mt-1"
                      size={20}
                    />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">
                        File Format
                      </h3>
                      <p className="text-gray-600">
                        Complex layouts may require additional work
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Why Our Rates Are Competitive
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">No Hidden Costs</h3>
                    <p className="text-teal-100">
                      Transparent pricing with no surprise charges
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Quality Assured</h3>
                    <p className="text-teal-100">
                      Professional native translators at competitive rates
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Flexible Options</h3>
                    <p className="text-teal-100">
                      Custom packages based on your needs and budget
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Volume Discounts</h3>
                    <p className="text-teal-100">
                      Special rates for large projects and ongoing work
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get a Quote?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today with your project details and we'll provide you
            with a competitive quote within 24 hours
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 transition shadow-lg"
            >
              Request a Quote
            </Link>
            <a
              href="mailto:info@mothertongue.co.in"
              className="inline-block border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-teal-50 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
