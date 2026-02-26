import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">MyBrand</h2>
            <p className="text-sm leading-6">
              We build modern, scalable and high-performance web applications
              with clean UI and optimized user experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-yellow-400 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm">Email: info@mybrand.com</p>
            <p className="text-sm">Phone: +880 1234-567890</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MyBrand. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
