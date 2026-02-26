import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide cursor-pointer">
            MyBrand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="home" className="hover:text-yellow-400 transition">
              Home
            </Link>
            <Link to="about-us" className="hover:text-yellow-400 transition">
              About
            </Link>
            <Link to="services" className="hover:text-yellow-400 transition">
              Services
            </Link>
            <Link to="contact-us" className="hover:text-yellow-400 transition">
              Contact
            </Link>
          </div>
        </div>
      </div>

    </nav>
  );
}
