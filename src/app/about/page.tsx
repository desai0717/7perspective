import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 py-16 px-8 md:px-24 lg:px-32">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in [Year], [Company Name] was born from a vision to [briefly state the core vision or mission]. We believe in [mention a key principle or value] and strive to [mention a key action or goal]. Our journey began with [mention a significant starting point or event], and we've been passionately working towards [mention a long-term aspiration] ever since.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We are a team of [mention the general type of people, e.g., dedicated professionals, creative individuals] who are united by a shared commitment to [reiterate a core value or goal].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to [clearly and concisely state the organization's mission]. We aim to achieve this by [list 2-3 key strategies or approaches]. We are driven by the desire to [mention the positive impact or outcome you want to create].
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Our Values</h2>
          <p className="text-gray-600 leading-relaxed">
            At [Company Name], our core values—Innovation, Integrity, Customer Focus, Collaboration, and Impact—drive everything we do. We believe that by prioritizing innovation, we can continuously improve and deliver cutting-edge solutions. Upholding the highest standards of integrity in all our interactions builds trust with our stakeholders. Our dedication to customer focus ensures that we are always striving to meet and exceed the needs of our audience. Collaboration, both internally and externally, fosters a dynamic and creative environment. Ultimately, our aim is to make a significant and positive impact in [mention the broader area of impact]. These values are not just words; they are the foundation of our culture and the guiding principles behind every decision we make.
          </p>
        </section>

        {/* <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Meet the Team (Optional)</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We are a diverse and passionate team dedicated to [mention a shared goal].
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="Team Member 1"
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">John Doe</h3>
              <p className="text-gray-600 text-center text-sm">CEO</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="Team Member 2"
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">Jane Smith</h3>
              <p className="text-gray-600 text-center text-sm">Head of Marketing</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src="https://via.placeholder.com/150" // Replace with actual image URL
                alt="Team Member 3"
                className="w-24 h-24 rounded-full mx-auto mb-2 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">Peter Jones</h3>
              <p className="text-gray-600 text-center text-sm">Lead Developer</p>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}