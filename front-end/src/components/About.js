import React from 'react';

const About = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-600 text-center">About Us</h1>
      
      {/* Introduction Section */}
      <section className="mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to our premier car dealership, where customer satisfaction and quality vehicles are at the heart of everything we do. With over a decade of experience in the automotive industry, we’ve built a reputation for providing a seamless car-buying experience and a wide range of vehicles to suit every lifestyle and budget.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="mt-10 bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
        <p className="mt-4 text-gray-700">
          Our mission is to deliver exceptional automotive solutions by combining high-quality vehicles with outstanding customer service. We strive to make car ownership accessible, enjoyable, and reliable for everyone.
        </p>
      </section>

      {/* Our Values Section */}
      <section className="mt-10 bg-blue-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold text-blue-600">Our Core Values</h2>
        <ul className="mt-4 list-disc list-inside text-gray-700">
          <li><strong>Integrity:</strong> Transparency and honesty in every interaction.</li>
          <li><strong>Excellence:</strong> Commitment to quality in vehicles and service.</li>
          <li><strong>Customer Focus:</strong> Prioritizing customer needs and satisfaction.</li>
          <li><strong>Community:</strong> Giving back and building strong relationships locally.</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-600">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Wide Selection</h3>
            <p className="mt-2 text-gray-700">Explore our inventory of new and pre-owned vehicles to find your perfect match.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Competitive Pricing</h3>
            <p className="mt-2 text-gray-700">We offer the best prices in the market to ensure value for your money.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Customer Support</h3>
            <p className="mt-2 text-gray-700">Our team is here to assist you before, during, and after your purchase.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Quality Assurance</h3>
            <p className="mt-2 text-gray-700">All vehicles undergo rigorous inspections to meet the highest standards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Flexible Financing</h3>
            <p className="mt-2 text-gray-700">We provide flexible financing solutions tailored to your needs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Experienced Team</h3>
            <p className="mt-2 text-gray-700">Our knowledgeable staff ensures a smooth and stress-free experience.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-blue-600">What Our Customers Say</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">"The best car-buying experience I've ever had! Friendly staff and great prices."</p>
            <p className="mt-4 text-right font-semibold">- John D.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">"They helped me find the perfect car for my family. Highly recommend!"</p>
            <p className="mt-4 text-right font-semibold">- Sarah W.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <p className="italic text-gray-600">"Amazing service and great vehicle options. I'll definitely come back!"</p>
            <p className="mt-4 text-right font-semibold">- Emily R.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="mt-10 bg-blue-600 text-white text-center p-6 rounded-lg">
        <h2 className="text-2xl font-semibold">Ready to Find Your Next Car?</h2>
        <p className="mt-4">Visit us today or browse our inventory online to get started!</p>
        <button className="mt-4 bg-white text-blue-600 font-semibold py-2 px-4 rounded hover:bg-gray-200">
          Browse Inventory
        </button>
      </section>
    </div>
  );
};

export default About;
