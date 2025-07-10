import { MapPin, Phone, Mail } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary" />,
      title: "Address",
      details: ["C-14, MIDC, Akkalkot Road, ", "Solapur-413003, ", "India"],
      link: "https://www.google.com/maps/place/17%C2%B040'00.4%22N+75%C2%B055'54.6%22E/@17.6637231,75.92629,1415m/data=!3m1!1e3!4m4!3m3!8m2!3d17.6667778!4d75.9318333?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwNy4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary" />,
      title: "Phone",
      details: ["+91 8793607697", "+91 8669666060"],
      link: ["#", "#"],
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary" />,
      title: "Email",
      details: ["shubhamplastic6060@gmail.com"],
      link: "mailto:shubhamplastic6060@gmail.com",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

        <div className="relative z-20 responsive-container">
          <h1 className="responsive-text-3xl md:responsive-text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="responsive-text-lg md:responsive-text-xl text-gray-200 max-w-3xl mx-auto px-4">
            Get in touch for quotes, technical support, or partnership
            opportunities
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="responsive-container flex mx-auto">
          <div className="flex mx-auto gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="responsive-text-2xl md:responsive-text-3xl font-bold text-plumbing-dark mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="responsive-text-base md:responsive-text-lg text-plumbing-gray mb-6 sm:mb-8">
                We're here to help with all your plumbing component needs.
                Contact us through any of the following channels.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 mt-1">{info.icon}</div>
                    <div className="flex flex-col">
                      <h3 className="responsive-text-base md:responsive-text-lg font-semibold text-plumbing-dark mb-1 sm:mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <a
                          href={
                            Array.isArray(info.link)
                              ? info.link[detailIndex] || "#"
                              : info.link
                          }
                          target="_blank"
                          key={detailIndex}
                          className="responsive-text-sm md:responsive-text-base text-plumbing-gray"
                        >
                          {detail}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <a
                  href="tel:+918669666060"
                  target="_blank"
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold flex items-center border-2 border-plumbing-primary hover:text-white hover:bg-plumbing-primary justify-center responsive-text-base text-plumbing-primary"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call Now: +91 8669666060
                </a>
                <a
                  href="https://wa.me/8793607697"
                  target="_blank"
                  className="w-full border-2  bg-green-600 text-white hover:bg-green-700  px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center responsive-text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp: +91 8793607697
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="responsive-container">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="responsive-text-2xl md:responsive-text-3xl font-bold text-plumbing-dark mb-3 sm:mb-4">
              Visit Our Office
            </h2>
            <p className="responsive-text-base md:responsive-text-lg text-plumbing-gray">
              Located in the heart of Solapur's industrial area
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[28rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d1831.697741572253!2d75.9313504291895!3d17.666269081958404!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDQwJzAwLjQiTiA3NcKwNTUnNTQuNiJF!5e1!3m2!1sen!2sin!4v1752134913669!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shubham Plastic Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
