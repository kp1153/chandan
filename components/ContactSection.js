import Link from "next/link";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
                Let's Discuss Your Translation Needs
              </h2>
              <p className="text-xl text-gray-600">
                Please send us your query by using the contact form or reach us
                directly through our contact details below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <MapPin className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Registered Office
                    </h3>
                    <p className="text-gray-600">
                      Flat No. 204, Srinivasa Apartment,
                      <br />
                      10-3-298, Humayun Nagar,
                      <br />
                      Hyderabad (Andhra Pradesh)
                      <br />
                      India, 500028
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                    <a
                      href="tel:+914040100754"
                      className="text-gray-600 hover:text-teal-600"
                    >
                      +91 40 4010 0754
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                    <a
                      href="mailto:info@mothertongue.co.in"
                      className="text-gray-600 hover:text-teal-600"
                    >
                      info@mothertongue.co.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="text-orange-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      Business Hours
                    </h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Translators */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl p-6">
              <h3 className="font-bold text-xl mb-2">
                For Translators & Freelancers
              </h3>
              <p className="mb-4">Please send your resume to:</p>
              <a
                href="mailto:resume@mothertongue.co.in"
                className="text-teal-100 hover:text-white underline font-semibold"
              >
                resume@mothertongue.co.in
              </a>
            </div>
          </div>

          {/* Right - Quick Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="+91 1234567890"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Contact For *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact_for"
                      value="quote"
                      defaultChecked
                      className="text-teal-600 focus:ring-teal-600"
                    />
                    <span className="ml-2 text-gray-700">Quote request</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact_for"
                      value="project"
                      className="text-teal-600 focus:ring-teal-600"
                    />
                    <span className="ml-2 text-gray-700">On going project</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contact_for"
                      value="other"
                      className="text-teal-600 focus:ring-teal-600"
                    />
                    <span className="ml-2 text-gray-700">Other</span>
                  </label>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Comments *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="reset"
                  className="px-6 py-3 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Reset Form
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2"
                >
                  Send Email
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
