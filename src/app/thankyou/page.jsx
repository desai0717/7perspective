import React from 'react';

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-600 mb-6">Thank You!</h1>
        <p className="text-gray-700 text-lg mb-4">
          Your message has been successfully sent. We will get back to you shortly.
        </p>
        <a
          href="/"
          className="mt-6 inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}
