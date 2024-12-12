import React from 'react';

const ContactUs = () => {
  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-blue-600 text-center">Contact Us</h1>
      <p className="text-center text-gray-700 mt-4">
        We’re here to assist you. Feel free to reach out with any inquiries or feedback.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Send Us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>

        {/* Contact Details & Map */}
        <div>
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">Our Location</h2>
          <iframe
            className="w-full h-64 rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.318186315781!2d-79.54325468260792!3d43.7750758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d3bca1a3f78f%3A0x815365ed6c3b957e!2sLambton+College+In+Toronto!5e0!3m2!1sen!2sin!4v1633518264561!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Lambton College Location"
          ></iframe>
          <div className="mt-6 space-y-4">
            <p className="text-gray-700 font-medium">
              <span className="text-blue-600 font-bold">Address:</span> 265 Yorkland Blvd, North York, ON M2J 1S5
            </p>
            <p className="text-gray-700 font-medium">
              <span className="text-blue-600 font-bold">Phone:</span> +1 416-555-1234
            </p>
            <p className="text-gray-700 font-medium">
              <span className="text-blue-600 font-bold">Email:</span> support@cardealership.com
            </p>
          </div>
        </div>
      </div>

      {/* Additional Contact Info Section */}
      <div className="mt-12 bg-blue-600 text-white p-10 rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Get In Touch</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold">Customer Support</h3>
            <p className="mt-2">+1 416-555-9876</p>
            <p className="text-sm">Mon-Fri: 9 AM - 5 PM</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Sales Inquiry</h3>
            <p className="mt-2">+1 416-555-8765</p>
            <p className="text-sm">Mon-Sat: 10 AM - 6 PM</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold">Technical Support</h3>
            <p className="mt-2">tech@cardealership.com</p>
            <p className="text-sm">24/7 Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
