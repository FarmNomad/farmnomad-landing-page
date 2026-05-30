"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    country: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    // TODO: wire up to your API
    console.log("Waitlist form submitted:", form);
  };

  return (
    <footer className="bg-green-700">
      {/* Waitlist Section */}
      <div className="max-w-8xl mx-auto px-8 pt-16">
        <h2 className="text-white text-[3rem] mb-2">Join the Waitlist</h2>
        <p className="text-white/80 text-md mb-8">
          Be Part of the Future of Agricultural Logistics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-full">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-transparent border border-white/60 text-white placeholder:text-white/60 rounded px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="bg-transparent border border-white/60 text-white placeholder:text-white/60 rounded px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="bg-transparent border border-white/60 text-white placeholder:text-white/60 rounded px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="bg-transparent border border-white/60 text-white placeholder:text-white/60 rounded px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="mt-4 text-white text-xs uppercase tracking-widest underline underline-offset-4 hover:text-white/70 transition-colors"
        >
          PARTNER WITH US
        </button>
      </div>

      {/* Logo Watermark Grid */}
      <div className="relative overflow-hidden w-full my-2 py-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <Image
            key={i}
            src="./icons/logo_footer.svg"
            alt="FarmNomad Footer Logo"
            width={1600}
            height={60}
          />
        ))}
      </div>

      {/* Footer Links */}
      <div className="max-w-8xl mx-auto px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Business Enquiries */}
          <div>
            <p className="text-white text-xs uppercase tracking-widest mb-3">
              Business Enquiries
            </p>
            <a
              href="mailto:info@farmnomad.com"
              className="block text-white/80 hover:text-white text-sm mb-1 transition-colors"
            >
              info@farmnomad.com
            </a>
            <a
              href="tel:+44 7380972982"
              className="block text-white/80 hover:text-white text-sm transition-colors"
            >
              +44 7380972982
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-xs uppercase tracking-widest mb-3">
              Quick Links
            </p>
            {["About", "Work", "Talent"].map((link) => (
              <Link
                key={link}
                href={`/${link.toLowerCase()}`}
                className="block text-white/80 hover:text-white text-sm mb-1 transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Media */}
          <div>
            <p className="text-white text-xs uppercase tracking-widest mb-3">
              Social Media
            </p>
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "LinkedIn", href: "https://linkedin.com" },
              { label: "Tiktok", href: "https://tiktok.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-white text-sm mb-1 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-xs">
            © 2026 FARMNOMAD. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/60 hover:text-white text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-white text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
