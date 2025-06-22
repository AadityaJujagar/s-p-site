import { Link } from "react-router-dom";
import BgImg from "@/assets/sp-landing-page.png";
import {
  Truck,
  Shield,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  Users,
  Clock,
  Globe,
  Shell,
  Bolt,
  Cog,
  Cable,
  CircleGauge,
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8 text-vibrant-blue" />,
      title: "Fast Delivery",
      description: "Quick nationwide delivery with reliable logistics partners",
    },
    {
      icon: <Shield className="w-8 h-8 text-vibrant-emerald" />,
      title: "Durable Products",
      description:
        "High-quality materials built to last in demanding conditions",
    },
    {
      icon: <Award className="w-8 h-8 text-vibrant-amber" />,
      title: "ISO Certified",
      description: "ISO 9001:2015 certified manufacturing processes",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-vibrant-green" />,
      title: "Quality Assured",
      description: "Rigorous testing and quality control on every product",
    },
  ];

  const categories = [
    {
      icon: <Shell className="w-12 h-12 text-vibrant-purple" />,
      title: "C-PVC",
      description: "Complete range of PVC, CPVC, and HDPE pipes",
      link: "/category/cpvc",
      gradient: "from-vibrant-cyan to-vibrant-blue",
    },
    {
      icon: <Bolt className="w-12 h-12 text-vibrant-cyan" />,
      title: "SWR",
      description: "Elbows, tees, couplings, and specialized fittings",
      link: "/category/swr",
      gradient: "from-vibrant-purple to-vibrant-purple",
    },
    {
      icon: <Cog className="w-12 h-12 text-vibrant-orange" />,
      title: "U-PVC",
      description: "Ball valves, gate valves, and premium taps",
      link: "/category/upvc",
      gradient: "from-vibrant-emerald to-vibrant-teal",
    },
    {
      icon: <Cable className="w-12 h-12 text-vibrant-green" />,
      title: "Ecodrain",
      description: "Reliable connections for all plumbing applications",
      link: "/category/ecodrain",
      gradient: "from-vibrant-orange to-vibrant-amber",
    },
    {
      icon: <CircleGauge className="w-12 h-12 text-vibrant-yellow" />,
      title: "PVC",
      description: "Reliable connections for all plumbing applications",
      link: "/category/pvc",
      gradient: "from-vibrant-blue to-vibrant-pink",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-vibrant-blue" />,
      number: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: <Clock className="w-8 h-8 text-vibrant-emerald" />,
      number: "20+",
      label: "Years Experience",
    },
    {
      icon: <Globe className="w-8 h-8 text-vibrant-purple" />,
      number: "500+",
      label: "Cities Served",
    },
    {
      icon: <Award className="w-8 h-8 text-vibrant-amber" />,
      number: "99.9%",
      label: "Quality Rating",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Kumar Construction",
      text: "Shubham Plastic has been our go-to supplier for 5 years. Their quality and reliability are unmatched.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "Modern Builders",
      text: "Excellent product range and timely delivery. Their technical support team is very knowledgeable.",
      rating: 5,
    },
    {
      name: "Amit Patel",
      company: "Patel Plumbing Services",
      text: "Best prices in the market without compromising on quality. Highly recommended for contractors.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${BgImg})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700/40 via-gray-800/50 to-gray-900/60 z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            India's Leading <br />
            <span className="text-blue-200 bg-clip-text">
              Plumbing Components
            </span>
            <br />
            Supplier
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Premium quality pipes, fittings, and plumbing solutions for
            contractors, builders, and industry professionals across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-vibrant-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center shadow-glow hover:shadow-glow-lg"
            >
              Get Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/category/pipes"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-vibrant-blue transition-all duration-200"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-200 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-plumbing-dark mb-2">
                  {stat.number}
                </h3>
                <p className="text-plumbing-gray text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-plumbing-dark mb-6">
              Trusted by Professionals Nationwide
            </h2>
            <p className="text-xl text-plumbing-gray max-w-3xl mx-auto">
              For over two decades, Shubham Plastic has been manufacturing and
              supplying premium plumbing components. Our commitment to quality,
              innovation, and customer satisfaction has made us the preferred
              choice for contractors and builders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-lg transition-all duration-200 animate-slide-in card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-plumbing-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-plumbing-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-plumbing-dark mb-6">
              Our Product Categories
            </h2>
            <p className="text-xl text-plumbing-gray">
              Comprehensive range of plumbing solutions for every project
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group p-8 bg-white rounded-xl shadow-soft hover:shadow-xl transition-all duration-300 border hover:border-vibrant-blue card-hover"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center mb-6 mx-auto group-hover:animate-float`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-plumbing-dark mb-4 group-hover:text-vibrant-blue transition-colors text-center">
                  {category.title}
                </h3>
                <p className="text-plumbing-gray mb-4 text-center">
                  {category.description}
                </p>
                <div className="flex items-center justify-center text-vibrant-blue group-hover:translate-x-2 transition-transform duration-200">
                  <span className="text-sm font-medium">View Products</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-vibrant-blue to-vibrant-indigo text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">What Our Customers Say</h2>
            <p className="text-xl text-blue-100">
              Trusted by thousands of professionals across India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl animate-fade-in border border-white/20"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-blue-100 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for bulk orders, custom solutions, or technical
            support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-vibrant-blue to-vibrant-indigo text-white px-8 py-4 rounded-lg font-semibold hover:from-vibrant-indigo hover:to-vibrant-purple transition-all duration-200 shadow-glow"
            >
              Get Quote Now
            </Link>
            <a
              href="tel:+911234567890"
              target="_blank"
              className="border-2 border-gray-400 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Call Now: +91 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
