"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ChevronDown, Clock, Shield, Award, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take?",
      answer:
        "Each and every translation we do takes a different amount of time depending on our current workload, the language combination and the difficulty of the text. As a general rule, we can complete 1,500 - 2,000 words a day, which normally allows enough time for proofreading and editing. If you have a tight deadline, send us the text by email (and let us know it's urgent!) or give us a call on +91 40 40100754. We'll give you an achievable turnaround time within the hour.",
    },
    {
      question:
        "How can I be sure of the quality of the translation - and why choose Mother Tongue?",
      answer: `Three reasons:

1. Our track record: we have never lost a customer (and have held on to some high profile customers!)

2. Our guarantee: we will work with you and your contacts where necessary to ensure a translation is carried out to your satisfaction.

3. Our people: our translators are all professional, mother tongue translators with many years' experience behind them.

Our managers are also experienced linguists and recognize that quality of translation is the key to growing our business.`,
    },
    {
      question:
        "How can I believe that the document given has been treated as confidential?",
      answer:
        "We at Mother Tongue treat each and every document as confidential. We enter into Non Disclosure Agreement with every professional who are working with us or whom we hire for a job.",
    },
    {
      question: "What do you do with my personal details?",
      answer:
        "Your contact details are securely stored on our database and no third party is ever given access to these. Please read our privacy statement for more details.",
    },
    {
      question: "How do I know everything's secure?",
      answer:
        "Mother Tongue has taken every measure possible to ensure the security of information submission on this site. Use of Secure Sockets Layer (SSL), the industry standard, for encrypting all personal information keeps all your information confidential. It will also be treated in the utmost confidence.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-teal-100 px-4 py-2 rounded-full mb-6">
              <HelpCircle className="text-teal-600" size={20} />
              <span className="text-teal-700 font-semibold">FAQ</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Commonly Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to frequently asked questions about our translation
              services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`text-teal-600 flex-shrink-0 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                      size={24}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Trust Mother Tongue?
              </h2>
              <p className="text-xl text-gray-600">
                Our commitment to quality and security
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-teal-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fast Turnaround
                </h3>
                <p className="text-gray-600">
                  1,500-2,000 words per day with quality proofreading included
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  100% Confidential
                </h3>
                <p className="text-gray-600">
                  NDA agreements with all professionals and SSL encryption
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Quality Guaranteed
                </h3>
                <p className="text-gray-600">
                  Professional mother tongue translators with years of
                  experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Contact us and we'll respond within 24
            hours
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="tel:+914040100754"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-teal-600 transition"
            >
              Call +91 40 4010 0754
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
