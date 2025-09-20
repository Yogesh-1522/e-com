import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-100 mt-10 p-6 text-center">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <div>
          <h3 className="font-bold">Information</h3>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h3 className="font-bold">Follow Us</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div>
          <h3 className="font-bold">Contact Us</h3>
          <p>Email: support@ecomm.com</p>
          <p>Phone: +91 9876543210</p>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        © 2025 E-Comm. All rights reserved.
      </p>
    </footer>
  );
}
