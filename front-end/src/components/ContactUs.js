import React from 'react';

function ContactUs() {
  return (
    <div className="container mx-auto py-16 text-center">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <iframe
        src="https://maps.google.com/maps?q=your+address+here&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default ContactUs;
