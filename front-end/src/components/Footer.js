const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-8 mt-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <p className="text-lg">&copy; 2024 Car Dealership. All Rights Reserved.</p>
        </div>
        <div>
          <p className="text-sm mb-4">Follow us on:</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-blue-200 hover:text-white transition duration-300">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition duration-300">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition duration-300">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-300">For inquiries, please contact us at: <a href="mailto:contact@cardealership.com" className="text-blue-200 hover:text-white transition duration-300">contact@cardealership.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
