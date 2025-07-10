import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "@/assets/shubham-plastic-logo.png";

const Footer = () => {
  const productCategories = [
    { name: "C-PVC", href: "/category/cpvc" },
    { name: "SWR", href: "/category/swr" },
    { name: "U-PVC", href: "/category/upvc" },
    { name: "Ecodrain", href: "/category/ecodrain" },
    { name: "PVC", href: "/category/pvc" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="responsive-container py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <img src={Logo} width={150} alt="logo" />
            <p className="text-slate-300 responsive-text-xs sm:responsive-text-sm leading-relaxed">
              India's trusted supplier of premium plumbing components. Quality
              guaranteed, nationwide delivery, and professional support for over
              two decades.
            </p>
          </div>

          {/* Product Categories */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="responsive-text-base sm:responsive-text-lg font-semibold text-white">
              Products
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors responsive-text-xs sm:responsive-text-sm block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="responsive-text-base sm:responsive-text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors responsive-text-xs sm:responsive-text-sm block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="responsive-text-base sm:responsive-text-lg font-semibold text-white">
              Contact Info
            </h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 responsive-text-xs sm:responsive-text-sm flex flex-col">
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/17%C2%B040'00.4%22N+75%C2%B055'54.6%22E/@17.6637231,75.92629,1415m/data=!3m1!1e3!4m4!3m3!8m2!3d17.6667778!4d75.9318333?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                  >
                    C-14, MIDC, Akkalkot Road,
                  </a>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/17%C2%B040'00.4%22N+75%C2%B055'54.6%22E/@17.6637231,75.92629,1415m/data=!3m1!1e3!4m4!3m3!8m2!3d17.6667778!4d75.9318333?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                  >
                    Solapur-413003,
                  </a>
                  <a
                    target="_blank"
                    href="https://www.google.com/maps/place/17%C2%B040'00.4%22N+75%C2%B055'54.6%22E/@17.6637231,75.92629,1415m/data=!3m1!1e3!4m4!3m3!8m2!3d17.6667778!4d75.9318333?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D"
                  >
                    India
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <div className="text-slate-300 responsive-text-xs sm:responsive-text-sm flex flex-col">
                  <a target="_blank" href="tel:+918793607697">
                    +91 8793607697
                  </a>
                  <a target="_blank" href="tel:+8669666060">
                    +91 8669666060
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:shubhamplastic6060@gmail.com"
                  target="_blank"
                  className="text-slate-300 responsive-text-xs sm:responsive-text-sm break-all"
                >
                  shubhamplastic6060@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2 sm:space-x-3">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300 responsive-text-xs sm:responsive-text-sm">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0">
            <div className="text-slate-400 responsive-text-xs sm:responsive-text-sm text-center md:text-left">
              © {year} Shubham Plastic. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
