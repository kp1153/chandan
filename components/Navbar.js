// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <a
                href="tel:+914040100754"
                className="flex items-center gap-2 hover:text-teal-200"
              >
                <Phone size={14} />
                <span>+91 40 4010 0754</span>
              </a>
              <a
                href="mailto:info@mothertongue.co.in"
                className="flex items-center gap-2 hover:text-teal-200"
              >
                <Mail size={14} />
                <span>info@mothertongue.co.in</span>
              </a>
            </div>
            <div className="hidden md:block">
              <span className="text-teal-100">14+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">MT</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-teal-700">
                Mother Tongue
              </h1>
              <p className="text-xs text-gray-600">We Speak Your Language</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-700 hover:text-teal-600 font-medium transition">
                Services
                <ChevronDown size={16} />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  href="/services#translation"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                >
                  Translation Services
                </Link>
                <Link
                  href="/services#document-localization"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                >
                  Document Localization
                </Link>
                <Link
                  href="/services#publishing"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                >
                  Publishing Localization
                </Link>
                <Link
                  href="/services#clinical"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                >
                  Clinical Research Translation
                </Link>
                <Link
                  href="/services#website"
                  className="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                >
                  Website Translation
                </Link>
              </div>
            </div>

            <Link
              href="/languages"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Languages
            </Link>
            <Link
              href="/our-rates"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Our Rates
            </Link>
            <Link
              href="/clients"
              className="text-gray-700 hover:text-teal-600 font-medium transition"
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 font-medium transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-2 text-gray-700"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-2 mt-2">
                  <Link
                    href="/services#translation"
                    className="block py-1 text-gray-600 hover:text-teal-600"
                  >
                    Translation Services
                  </Link>
                  <Link
                    href="/services#document-localization"
                    className="block py-1 text-gray-600 hover:text-teal-600"
                  >
                    Document Localization
                  </Link>
                  <Link
                    href="/services#publishing"
                    className="block py-1 text-gray-600 hover:text-teal-600"
                  >
                    Publishing Localization
                  </Link>
                  <Link
                    href="/services#clinical"
                    className="block py-1 text-gray-600 hover:text-teal-600"
                  >
                    Clinical Research Translation
                  </Link>
                  <Link
                    href="/services#website"
                    className="block py-1 text-gray-600 hover:text-teal-600"
                  >
                    Website Translation
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/languages"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              Languages
            </Link>
            <Link
              href="/our-rates"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              Our Rates
            </Link>
            <Link
              href="/clients"
              className="block py-2 text-gray-700 hover:text-teal-600"
            >
              Clients
            </Link>
            <Link
              href="/contact"
              className="block py-2 mt-2 bg-teal-600 text-white px-4 py-2 rounded-full text-center hover:bg-teal-700"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
