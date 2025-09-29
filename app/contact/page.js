"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  FileText,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    contact_for: "quote",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We will get back to you soon.");
    // Reset form
    setFormData({
      email: "",
      name: "",
      phone: "",
      contact_for: "quote",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-teal-600 font-semibold text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mt-4 mb-6">
              Let's Discuss Your Translation Needs
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help you communicate effectively across languages
              and cultures
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-lg">
                  Please send us your query by using the contact form or reach
                  us directly through our contact details below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-teal-600 p-3 rounded-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        Registered Office - India
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Mother Tongue</strong>
                        <br />
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

                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        Phone
                      </h3>
                      <a
                        href="tel:+914040100754"
                        className="text-blue-600 hover:text-blue-700 font-semibold text-lg"
                      >
                        +91 40 4010 0754
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        Email
                      </h3>
                      <a
                        href="mailto:info@mothertongue.co.in"
                        className="text-purple-600 hover:text-purple-700 font-semibold"
                      >
                        info@mothertongue.co.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-3 rounded-lg">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">
                        Business Hours
                      </h3>
                      <p className="text-gray-700">
                        <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                        <br />
                        <strong>Saturday:</strong> 9:00 AM - 2:00 PM
                        <br />
                        <strong>Sunday:</strong> Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Translators */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      For Translators & Freelancers
                    </h3>
                    <p className="mb-3 text-teal-50">
                      Join our network of professional translators. Please send
                      your resume to:
                    </p>
                    <a
                      href="mailto:resume@mothertongue.co.in"
                      className="text-white underline font-semibold hover:text-teal-100 flex items-center gap-2"
                    >
                      <Mail size={18} />
                      resume@mothertongue.co.in
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="text-teal-600" size={28} />
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
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
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                    placeholder="Your Full Name"
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
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition"
                    placeholder="+91 1234567890"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Contact For *
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                      <input
                        type="radio"
                        name="contact_for"
                        value="quote"
                        checked={formData.contact_for === "quote"}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-600 w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700 font-medium">
                        Quote request
                      </span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                      <input
                        type="radio"
                        name="contact_for"
                        value="project"
                        checked={formData.contact_for === "project"}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-600 w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700 font-medium">
                        On going project
                      </span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                      <input
                        type="radio"
                        name="contact_for"
                        value="other"
                        checked={formData.contact_for === "other"}
                        onChange={handleChange}
                        className="text-teal-600 focus:ring-teal-600 w-4 h-4"
                      />
                      <span className="ml-3 text-gray-700 font-medium">
                        Other
                      </span>
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
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent transition resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>

                <div className="flex gap-4">
                  <button
                    type="reset"
                    onClick={() =>
                      setFormData({
                        email: "",
                        name: "",
                        phone: "",
                        contact_for: "quote",
                        message: "",
                      })
                    }
                    className="px-6 py-3 border-2 border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition"
                  >
                    Reset Form
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
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

      {/* Map or Additional Info Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Contact Us?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-bold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">
                  We respond to all inquiries within 24 hours
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Professional Service
                </h3>
                <p className="text-gray-600">
                  Expert consultation for your needs
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Custom Solutions
                </h3>
                <p className="text-gray-600">
                  Tailored to your specific requirements
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
