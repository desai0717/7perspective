// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-8 flex justify-between items-center">
      {/* Left: Copyright */}
      <p className="text-sm">&copy; 2023 7perspective. All rights reserved.</p>

      {/* Right: Social and Contact Icons */}
      <div className="flex gap-6 items-center">
        <a href="https://dummy.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-5 h-5 hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.5 2A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9a5.5 5.5 0 005.5-5.5v-9A5.5 5.5 0 0016.5 2h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.75a1 1 0 110 2 1 1 0 010-2z" />
          </svg>
        </a>
        <a href="https://dummy.facebook.com" target="_blank" rel="noopener noreferrer">
          <svg className="w-5 h-5 hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3H14v7A10 10 0 0022 12z" />
          </svg>
        </a>
        <Link href="/contact">
          <svg className="w-5 h-5 hover:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2 4a2 2 0 012-2h16a2 2 0 012 2v2l-10 6L2 6V4zm0 4.6l10 6 10-6V20a2 2 0 01-2 2H4a2 2 0 01-2-2V8.6z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
