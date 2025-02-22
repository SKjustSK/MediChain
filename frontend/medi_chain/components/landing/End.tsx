import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaReddit, FaWhatsapp, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white-800 flex justify-center items-center ">
      <footer className="bg-gray-900 text-white-700 border-t border-gray-200 w-full">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Logo & Description */}
            <div>
              <h2 className="text-xl font-semibold flex items-center space-x-2">
                <span className="text-white text-2xl">Medi</span> <span>Sync</span>
              </h2>
              <p className="mt-2 text-sm text-white">
                Lorem ipsum dolor sit amet consectetur. Imperdiet aliquet faucibus malesuada vitae.
              </p>
              <p className="mt-2 text-sm text-white font-semibold">(219) 555-0114</p>
              {/* Social Icons */}
              <div className="flex space-x-3 mt-3">
                <Link href="#" className="text-blue-600"><FaFacebook /></Link>
                <Link href="#" className="text-red-600"><FaReddit /></Link>
                <Link href="#" className="text-green-500"><FaWhatsapp /></Link>
                <Link href="#" className="text-pink-600"><FaPinterest /></Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">My Account</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="text-white hover:text-gray-900">My Account</Link></li>
                <li><Link href="#" className="text-white hover:text-gray-900">Order History</Link></li>
                <li><Link href="#" className="text-white hover:text-gray-900">Shopping Cart</Link></li>
                <li><Link href="#" className="text-white hover:text-gray-900">Wishlist</Link></li>
              </ul>
            </div>
            {/* Help Section */}
            <div>
              <h3 className="text-white font-semibold mb-2">Helps</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="text-white hover:text-blue-600">Contact</Link></li>
                <li><Link href="#" className="text-white hover:text-blue-600">FAQs</Link></li>
                <li><Link href="#" className="text-white hover:text-blue-600">Terms & Condition</Link></li>
                <li><Link href="#" className="text-white hover:text-blue-600">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Categories</h3>
              <ul className="text-sm space-y-2">
                <li><Link href="#" className="text-white hover:text-blue-600">Printers</Link></li>
                <li><Link href="#" className="text-white hover:text-blue-600">Cartridge</Link></li>
                <li><Link href="#" className="text-white hover:text-blue-600">Ink</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          </div>
          <div className="text-center text-sm text-white border-t pt-6">
            ExpertSquad © 2025. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
