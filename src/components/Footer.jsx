import React from 'react';

const Footer = () => {
   return (
      <footer className="bg-black text-[#A1A1AA]">
      <div className="max-w-11/12 mx-auto py-[80px] grid grid-cols-1 gap-10 sm:grid-cols-5 sm:gap-[100px] sm:container mt-16">


         <div>
            <h3 className="text-white text-lg font-bold">CS — Ticket System</h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.</p>
         </div>


         <div>
            <h3 className="text-white text-xl mb-3">Company</h3>
            <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Mission</a></li>
            <li><a href="#" className="hover:text-white">Contact Saled</a></li>
            </ul>
         </div>


         <div>
            <h3 className="text-white text-xl mb-3">Services</h3>
            <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">Products & Services</a></li>
            <li><a href="#" className="hover:text-white">Customer Stories</a></li>
            <li><a href="#" className="hover:text-white">Download Apps</a></li>
            </ul>
         </div>


         <div>
            <h3 className="text-white text-xl mb-3">Information</h3>
            <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Join Us</a></li>
            </ul>
         </div>


         <div>
            <h3 className="text-white text-xl mb-3">Social Links</h3>
            <ul className="space-y-4 text-sm">
               <li><i className="fa-brands fa-x-twitter"></i> @CS — Ticket System</li>
               <li><i className="fa-brands fa-linkedin"></i> @CS — Ticket System</li>
               <li><i className="fa-brands fa-facebook"></i> @CS — Ticket System</li>
               <li><i className="fa-solid fa-envelope"></i> support@cst.com</li>
            </ul>
         </div>


      </div>


      <div className="max-w-11/12 mx-auto border-t border-gray-700"></div>


      <div className="text-center text-sm text-white py-8">© 2025 CS — Ticket System. All rights reserved.</div>
      </footer>
);
}

export default Footer;