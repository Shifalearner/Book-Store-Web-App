import React from 'react';

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6 sm:p-12 mt-12 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">About Us</h2>
        <p className="text-lg leading-8 mb-4">
          Welcome to our bookstore! We are passionate about bringing the best stories, knowledge, and learning experiences to readers of all ages. Our carefully curated collection includes timeless classics, modern bestsellers, and hidden gems waiting to be discovered.
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-8">
        <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
          <p className="text-lg leading-8">
            Our mission is to foster a love for reading and lifelong learning. We believe that books have the power to transform lives, and we strive to provide a diverse and inclusive range of books that cater to all interests and backgrounds. Whether you're seeking knowledge, entertainment, or inspiration, we have something for you.
          </p>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">What We Offer</h3>
          <ul className="list-disc list-inside text-lg leading-8">
            <li>Wide range of genres and categories</li>
            <li>Exclusive collections and rare finds</li>
            <li>Friendly and knowledgeable staff</li>
            <li>Regular events and book signings</li>
            <li>Community-focused programs</li>
          </ul>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">Join Our Community</h3>
        <p className="text-lg leading-8">
          Become a part of our vibrant community of book lovers. Follow us on social media, subscribe to our newsletter, and participate in our events to stay connected and discover new favorites. We look forward to embarking on this literary journey with you.
        </p>
      </div>
    </div>
  );
};

export default About;
