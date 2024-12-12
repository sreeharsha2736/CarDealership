import React from 'react';

const About = () => {
  return (
    <div className="p-10 bg-gradient-to-r from-gray-50 via-gray-100 to-white min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 text-center mb-12">About Us</h1>

      {/* Introduction Section */}
      <section className="bg-white shadow-lg p-8 rounded-xl mb-12 border-t-4 border-blue-600">
        <p className="text-xl text-gray-700 leading-relaxed">
          Welcome to our premier car dealership, where customer satisfaction and quality vehicles are at the heart of everything we do. With over a decade of experience in the automotive industry, we’ve built a reputation for providing a seamless car-buying experience and a wide range of vehicles to suit every lifestyle and budget.
          <br /><br />
          Whether you're a first-time buyer or looking for a luxury upgrade, our team is committed to helping you find the perfect vehicle that meets your needs. Our expansive showroom and online platform offer a diverse selection, and our expert consultants are here to guide you through the process every step of the way.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mt-12 bg-gradient-to-r from-blue-500 to-blue-800 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-3xl font-semibold">Our Mission</h2>
        <p className="mt-4 text-lg">
          Our mission is to deliver exceptional automotive solutions by combining high-quality vehicles with outstanding customer service. We strive to make car ownership accessible, enjoyable, and reliable for everyone.
          <br /><br />
          We believe in empowering our customers by providing them with transparent information, personalized services, and a range of financing options. Our goal is to build long-lasting relationships and ensure our clients feel confident and satisfied with their purchases.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="mt-12 bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
        <h2 className="text-3xl font-semibold text-gray-800">Our Core Values</h2>
        <ul className="mt-4 list-disc list-inside text-lg text-gray-700 space-y-4">
          <li><strong>Integrity:</strong> Transparency and honesty in every interaction. We believe in doing business with the highest ethical standards.</li>
          <li><strong>Excellence:</strong> Commitment to quality in vehicles and service. We constantly strive to exceed customer expectations in all aspects.</li>
          <li><strong>Customer Focus:</strong> Prioritizing customer needs and satisfaction. We are dedicated to providing a personalized experience for every customer.</li>
          <li><strong>Community:</strong> Giving back and building strong relationships locally. We support local initiatives and contribute to the growth of our community.</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">Wide Selection</h3>
            <p className="mt-2 text-gray-700">Explore our inventory of new and pre-owned vehicles to find your perfect match. From compact cars to SUVs, we have something for everyone.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">Competitive Pricing</h3>
            <p className="mt-2 text-gray-700">We offer the best prices in the market to ensure value for your money. Our transparent pricing guarantees no hidden fees or surprises.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">Customer Support</h3>
            <p className="mt-2 text-gray-700">Our team is here to assist you before, during, and after your purchase. From answering questions to post-sale support, we’re always ready to help.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">Quality Assurance</h3>
            <p className="mt-2 text-gray-700">All vehicles undergo rigorous inspections to meet the highest standards, ensuring you drive away with a car you can trust.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">Flexible Financing</h3>
            <p className="mt-2 text-gray-700">We provide flexible financing solutions tailored to your needs. Our easy approval process makes it simple to get into your new car today.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-2xl font-semibold text-blue-700">Experienced Team</h3>
            <p className="mt-2 text-gray-700">Our knowledgeable staff ensures a smooth and stress-free experience. With years of expertise, we’re here to make your car-buying journey enjoyable.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-12 bg-gradient-to-r from-gray-200 via-gray-300 to-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <p className="italic text-gray-600">"The best car-buying experience I've ever had! Friendly staff and great prices. Highly recommend!"</p>
            <p className="mt-4 text-right font-semibold text-blue-600">- John D.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <p className="italic text-gray-600">"They helped me find the perfect car for my family. Their attention to detail and customer service is top-notch!"</p>
            <p className="mt-4 text-right font-semibold text-blue-600">- Sarah W.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <p className="italic text-gray-600">"Amazing service and great vehicle options. I'll definitely come back for my next purchase!"</p>
            <p className="mt-4 text-right font-semibold text-blue-600">- Emily R.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold">Ready to Find Your Next Car?</h2>
        <p className="mt-4 text-lg">Visit us today or browse our inventory online to get started. Let us help you make the right choice.</p>
        <button className="mt-4 bg-white text-blue-800 font-semibold py-3 px-6 rounded hover:bg-blue-100 transition duration-300">
          Browse Inventory
        </button>
      </section>
    </div>
  );
};

export default About;
