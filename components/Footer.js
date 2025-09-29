import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">MT</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Mother Tongue</h3>
                <p className="text-sm text-gray-400">We Speak Your Language</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              A pioneer in localization and market facilitation services in
              India, providing multilingual translation solutions since 2005.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-teal-600" />
                <a href="tel:+914040100754" className="hover:text-white">
                  +91 40 4010 0754
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-teal-600" />
                <a
                  href="mailto:info@mothertongue.co.in"
                  className="hover:text-white"
                >
                  info@mothertongue.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/our-rates" className="hover:text-white transition">
                  Our Rates
                </Link>
              </li>
              <li>
                <Link href="/clients" className="hover:text-white transition">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/languages" className="hover:text-white transition">
                  Languages
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Mother Tongue. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">
                Website by{" "}
                <a
                  href="https://www.web-developer-kp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-500 hover:text-teal-400 font-semibold transition-colors underline decoration-dotted"
                >
                  Kamta Prasad
                </a>
              </p>
            </div>
            <div className="flex gap-4 text-sm">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/faq" className="hover:text-white transition">
                FAQ
              </Link>
              <span>|</span>
              <span className="text-gray-500">ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}