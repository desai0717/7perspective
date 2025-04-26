import React from 'react';

export default function Contact() {
  return (
    <div className="bg-gray-100 py-16 px-8 md:px-24 lg:px-32">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-600 leading-relaxed mb-8">
          We&apos;d love to hear from you! Whether you have a question, a project idea, or just want to connect, please don&apos;t hesitate to reach out. Our team is ready to assist you with collaborations, explore innovative ideas, and discuss potential commissions. We value open communication and look forward to the opportunity to connect.
        </p>

        {/* Updated form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
          <form 
            className="space-y-4"
            action="https://formsubmit.co/pushkargaikwad7@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://7perspective.vercel.app/thankyou" />

            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
              />
            </div>

            {/* New Mobile Number Field */}
            <div>
              <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
                Mobile Number
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                pattern="[0-9]{10}"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Mobile Number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Contact details</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            You can also reach us through the following channels:
          </p>
          <p className="text-gray-600 leading-relaxed mb-4 pt-2">
            <strong><em>Ar. Pushkar Gaikwad</em></strong>
          </p>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed">
            <li>Email: <a href="mailto:pushkargaikwad7@gmail.com" className="text-gray-500 hover:underline">pushkargaikwad7@gmail.com</a></li>
            <li>Phone: <a href="tel:+91909606821" className="text-gray-500 hover:underline">+91 909606821</a></li>
            <li>
              Address: <a href="https://maps.app.goo.gl/veHePs8SYLyX6GxV9?g_st=aw" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                Ug 104, Akruti Sankul, Tilak Road, Sadashiv Peth, Pune
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
