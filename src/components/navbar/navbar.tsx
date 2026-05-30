"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

const servicesLinks = [
  { label: "For Farmers", href: "/for-farmers" },
  { label: "For Logistics", href: "/for-logistics" },
  { label: "For Organizations", href: "/for-organizations" },
  { label: "For Retailers & Buyers", href: "/for-retailers" },
];

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Add background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed m-3 top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo and Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logos/logo_1.svg"
              alt="FarmNomad Logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-white text-lg">FarmNomad</span>
          </Link>

          <Link
            href="/about"
            className="text-white/90 hover:text-white text-sm transition-colors"
          >
            About
          </Link>
          <Link
            href="/how-it-works"
            className="text-white/90 hover:text-white text-sm transition-colors"
          >
            How It Works
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className="flex items-center gap-1 text-white/90 hover:text-white text-sm transition-colors"
            >
              <span>Services</span>
              <span className="flex mt-1 items-center justify-center">
                {servicesOpen ? (
                  <ChevronUpIcon width={16} height={16} />
                ) : (
                  <ChevronDownIcon width={16} height={16} />
                )}
              </span>
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-lg shadow-xl py-1 z-50">
                {servicesLinks.map((item, i) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-white/90 hover:text-white text-sm transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white/90 hover:text-white text-sm transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3">
          <Link
            href="/early-access"
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-5 py-2 rounded-full transition-colors"
          >
            Join Early Access
          </Link>
          <Link
            href="/partner"
            className="border border-white text-white hover:bg-white/10 text-sm px-5 py-2 rounded-full transition-colors"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
