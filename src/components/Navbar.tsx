import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/assets/shubham-plastic-logo.png";

const categories = [
  { name: "C-PVC", href: "/category/cpvc" },
  { name: "SWR", href: "/category/swr" },
  { name: "U-PVC", href: "/category/upvc" },
  { name: "Ecodrain", href: "/category/ecodrain" },
  { name: "PVC", href: "/category/pvc" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Categories", href: "#", hasDropdown: true },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src={Logo} alt="logo" width={100} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsCategoriesOpen(true)}
                      onMouseLeave={() => setIsCategoriesOpen(false)}
                    >
                      <button className="flex items-center font-medium text-sm space-x-1 text-plumbing-gray hover:text-plumbing-primary transition-colors duration-200 py-3">
                        <span>Categories</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isCategoriesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Categories Dropdown */}
                      {isCategoriesOpen && (
                        <div className="absolute left-0 top-8 mt-2 w-48 bg-white rounded-md shadow-xl border border-gray-200 py-2 animate-fade-in">
                          {categories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              className="block px-4 py-2 text-sm text-plumbing-gray hover:text-plumbing-primary hover:bg-gray-50 transition-colors duration-200"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-plumbing-primary bg-blue-50"
                          : "text-plumbing-gray hover:text-plumbing-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-plumbing-gray hover:text-plumbing-primary focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                        className="flex items-center justify-between w-full px-3 py-2 text-plumbing-gray hover:text-plumbing-primary"
                      >
                        <span>Categories</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isCategoriesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isCategoriesOpen && (
                        <div className="ml-4 space-y-1">
                          {categories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block px-3 py-2 text-sm text-plumbing-gray hover:text-plumbing-primary"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? "text-plumbing-primary bg-blue-100"
                          : "text-plumbing-gray hover:text-plumbing-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
