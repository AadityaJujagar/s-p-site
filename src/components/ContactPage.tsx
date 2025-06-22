
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary" />,
      title: "Address",
      details: ["123 Industrial Area, Phase-2", "Mumbai, Maharashtra 400001", "India"]
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary" />,
      title: "Phone",
      details: ["+91 123 456 7890", "+91 987 654 3210"]
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary" />,
      title: "Email",
      details: ["info@shubhamplastic.com", "sales@shubhamplastic.com"]
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary" />,
      title: "Business Hours",
      details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: Closed"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524230572899-a752b3835840?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        
        <div className="relative z-20 responsive-container">
          <h1 className="responsive-text-3xl md:responsive-text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="responsive-text-lg md:responsive-text-xl text-gray-200 max-w-3xl mx-auto px-4">
            Get in touch for quotes, technical support, or partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="responsive-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Contact Form */}
            <div className="animate-slide-in">
              <h2 className="responsive-text-2xl md:responsive-text-3xl font-bold text-plumbing-dark mb-4 sm:mb-6">
                Send us a Message
              </h2>
              <p className="responsive-text-base md:responsive-text-lg text-plumbing-gray mb-6 sm:mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block responsive-text-sm md:responsive-text-base font-medium text-plumbing-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-colors responsive-text-base"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block responsive-text-sm md:responsive-text-base font-medium text-plumbing-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-colors responsive-text-base"
                    placeholder="your.email@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block responsive-text-sm md:responsive-text-base font-medium text-plumbing-dark mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-plumbing-primary focus:border-transparent transition-colors resize-none responsive-text-base"
                    placeholder="Tell us about your requirements, quantity needed, or any questions you have..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-plumbing-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-plumbing-secondary transition-colors duration-200 flex items-center justify-center responsive-text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="responsive-text-2xl md:responsive-text-3xl font-bold text-plumbing-dark mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="responsive-text-base md:responsive-text-lg text-plumbing-gray mb-6 sm:mb-8">
                We're here to help with all your plumbing component needs. Contact us through any of the following channels.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-gray-50 rounded-lg"
                  >
                    <div className="flex-shrink-0 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="responsive-text-base md:responsive-text-lg font-semibold text-plumbing-dark mb-1 sm:mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="responsive-text-sm md:responsive-text-base text-plumbing-gray">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                <a
                  href="tel:+911234567890"
                  className="w-full bg-green-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center justify-center responsive-text-base"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Call Now: +91 123 456 7890
                </a>
                <a
                  href="mailto:info@shubhamplastic.com"
                  className="w-full border-2 border-plumbing-primary text-plumbing-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-plumbing-primary hover:text-white transition-colors duration-200 flex items-center justify-center responsive-text-base"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Email Us
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
              Located in the heart of Mumbai's industrial area
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-64 sm:h-80 md:h-96 lg:h-[28rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.3827108894847!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9be7923c9d7%3A0x3f86b4b5a6a66b47!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shubham Plastic Office Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
