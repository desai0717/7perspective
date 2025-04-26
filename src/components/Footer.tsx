// components/Footer.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 px-8 flex justify-between items-center">
            {/* Left: Copyright */}
            <p className="text-sm">&copy; 2025 7perspective. All rights reserved.</p>

            {/* Right: Social and Contact Icons */}
            <div className="flex gap-6 items-center">
                <a href="https://www.instagram.com/7.perspectivearchitects/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 hover:text-gray-400" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.6 141 224.1 141zm0 189.6c-41.2 0-74.7-33.5-74.7-74.7 0-41.2 33.5-74.7 74.7-74.7 41.2 0 74.7 33.5 74.7 74.7 0 41.2-33.5 74.7-74.7 74.7zm146.4-194.3c0 14.9-12.1 27-27 27s-27-12.1-27-27 12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-93C385.5 18.3 354.1 10.1 318.8 8.4 283.2 6.7 167.9 6.7 132.3 8.4 97 10.1 65.5 18.3 39.2 44.6c-26.3 26.3-34.5 57.7-36.2 93C0.7 176.8 0.7 331.2 3 366.8c1.7 35.3 9.9 66.7 36.2 93 26.3 26.3 57.7 34.5 93 36.2 35.6 2.3 190 2.3 225.6 0 35.3-1.7 66.7-9.9 93-36.2 26.3-26.3 34.5-57.7 36.2-93 2.3-35.6 2.3-190 0-225.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z"/>
                    </svg>
                </a>
                <a href="https://www.facebook.com/pushkar.gaikwad.1/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 hover:text-gray-400" fill="currentColor" viewBox="0 0 320 512">
                        <path d="M279.14 288l14.22-92.66h-88.91V127.45c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S264.43 0 225.36 0C141.09 0 89.53 54.42 89.53 154.66V195.3H0v92.66h89.53V512h107.78V288z"/>
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/ar-pushkar-gaikwad-9238b9106/" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 hover:text-gray-400" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.53 0 53.8S24.09-.5 53.79-.5s53.79 24.59 53.79 54.3c0 29.73-24.09 54.3-53.79 54.3zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.5-2.9 13.2-2.9 20.9V448h-92.4s1.2-270.2 0-298.1h92.4v42.3c-.2.3-.5.6-.7.9h.7v-.9c12.3-19 34.4-46.1 83.6-46.1 61 0 106.7 39.8 106.7 125.2V448z" />
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
