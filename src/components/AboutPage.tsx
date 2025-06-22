
import React from 'react';
import { Factory, Users, Globe, Award, CheckCircle, Target } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2000', event: 'Company founded with a focus on quality plumbing solutions' },
    { year: '2005', event: 'Expanded manufacturing facility and introduced CPVC pipes' },
    { year: '2010', event: 'Achieved ISO 9001:2008 certification' },
    { year: '2015', event: 'Launched nationwide distribution network' },
    { year: '2018', event: 'Introduced eco-friendly product lines' },
    { year: '2020', event: 'Digital transformation and online ordering system' },
    { year: '2023', event: 'Reached 10,000+ satisfied customers milestone' }
  ];

  const values = [
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-plumbing-primary" />,
      title: "Quality First",
      description: "Every product undergoes rigorous testing to ensure superior performance and durability."
    },
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-plumbing-primary" />,
      title: "Customer Focus",
      description: "We prioritize customer satisfaction through reliable products and exceptional service."
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-plumbing-primary" />,
      title: "Innovation",
      description: "Continuously developing new solutions to meet evolving industry requirements."
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-plumbing-primary" />,
      title: "Reliability",
      description: "Consistent quality and timely delivery that professionals can depend on."
    }
  ];

  const stats = [
    { number: '23+', label: 'Years of Experience' },
    { number: '10,000+', label: 'Satisfied Customers' },
    { number: '500+', label: 'Product Variants' },
    { number: '50+', label: 'Cities Served' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        
        <div className="relative z-20 responsive-container">
          <h1 className="responsive-text-4xl md:responsive-text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            About Shubham Plastic
          </h1>
          <p className="responsive-text-lg md:responsive-text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto px-4">
            Building India's infrastructure with premium plumbing solutions since 2000
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="responsive-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
            <div className="animate-slide-in order-2 lg:order-1">
              <h2 className="responsive-text-3xl md:responsive-text-4xl font-bold text-plumbing-dark mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="responsive-text-base md:responsive-text-lg text-plumbing-gray mb-4 sm:mb-6 leading-relaxed">
                To provide superior quality plumbing components that ensure reliable, 
                long-lasting performance for residential, commercial, and industrial applications. 
                We are committed to supporting India's infrastructure development through innovative 
                products and exceptional customer service.
              </p>
              <p className="responsive-text-base md:responsive-text-lg text-plumbing-gray mb-6 sm:mb-8 leading-relaxed">
                Since our establishment in 2000, Shubham Plastic has grown from a small manufacturing 
                unit to one of India's most trusted names in plumbing components. Our state-of-the-art 
                manufacturing facility combines traditional craftsmanship with modern technology to 
                deliver products that exceed industry standards.
              </p>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-plumbing-primary flex-shrink-0" />
                <span className="responsive-text-sm md:responsive-text-base text-plumbing-gray">
                  ISO 9001:2015 Certified Manufacturing
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-plumbing-primary to-plumbing-secondary text-white rounded-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="responsive-text-2xl md:responsive-text-3xl lg:text-4xl font-bold mb-2">
                    {stat.number}
                  </div>
                  <div className="responsive-text-xs md:responsive-text-sm lg:text-base text-blue-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="responsive-container">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="responsive-text-3xl md:responsive-text-4xl font-bold text-plumbing-dark mb-4 sm:mb-6">
              Our Core Values
            </h2>
            <p className="responsive-text-lg md:responsive-text-xl text-plumbing-gray max-w-3xl mx-auto px-4">
              The principles that guide everything we do at Shubham Plastic
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  {value.icon}
                </div>
                <h3 className="responsive-text-lg md:responsive-text-xl font-semibold text-plumbing-dark mb-2 sm:mb-3">
                  {value.title}
                </h3>
                <p className="responsive-text-sm md:responsive-text-base text-plumbing-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="responsive-container max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="responsive-text-3xl md:responsive-text-4xl font-bold text-plumbing-dark mb-4 sm:mb-6">
              Our Journey
            </h2>
            <p className="responsive-text-lg md:responsive-text-xl text-plumbing-gray">
              Key milestones in our growth and development
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on larger screens */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-plumbing-primary"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center mb-6 sm:mb-8 animate-fade-in ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                }`}>
                  <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border-l-4 md:border-l-4 border-plumbing-primary">
                    <div className="responsive-text-xl md:responsive-text-2xl font-bold text-plumbing-primary mb-2">
                      {milestone.year}
                    </div>
                    <p className="responsive-text-sm md:responsive-text-base text-plumbing-gray leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
                
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-plumbing-primary rounded-full border-4 border-white shadow-md"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-plumbing-primary text-white">
        <div className="responsive-container">
          <div className="text-center mb-8 sm:mb-12">
            <Award className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-6 text-yellow-400" />
            <h2 className="responsive-text-3xl md:responsive-text-4xl font-bold mb-4 sm:mb-6">
              Quality Assurance
            </h2>
            <p className="responsive-text-lg md:responsive-text-xl text-blue-100 max-w-3xl mx-auto px-4 leading-relaxed">
              Our commitment to excellence is backed by rigorous quality control processes, 
              international certifications, and continuous improvement initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
              <h3 className="responsive-text-lg md:responsive-text-xl font-semibold mb-3 sm:mb-4">
                Testing Laboratory
              </h3>
              <p className="responsive-text-sm md:responsive-text-base text-blue-100 leading-relaxed">
                In-house testing facility with advanced equipment for quality verification
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
              <h3 className="responsive-text-lg md:responsive-text-xl font-semibold mb-3 sm:mb-4">
                Raw Material Control
              </h3>
              <p className="responsive-text-sm md:responsive-text-base text-blue-100 leading-relaxed">
                Stringent quality checks on all incoming raw materials and components
              </p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg">
              <h3 className="responsive-text-lg md:responsive-text-xl font-semibold mb-3 sm:mb-4">
                Final Inspection
              </h3>
              <p className="responsive-text-sm md:responsive-text-base text-blue-100 leading-relaxed">
                100% inspection of finished products before packaging and dispatch
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
