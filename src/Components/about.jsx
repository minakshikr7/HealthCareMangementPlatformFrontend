'use client';
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - CareSync</title>
        <meta
          name="description"
          content="Learn more about CareSync – our mission, our team, and our vision for a smarter healthcare system."
        />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">About CareSync</h1>
            <p className="mt-4 text-lg text-blue-100">
              Empowering smarter healthcare experiences through technology and compassion.
            </p>
          </div>
        </div>

        {/* Centered Mission Section */}
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            CareSync was created with a simple goal — to make healthcare smarter, faster, and more accessible for everyone.
            By combining real-time data, AI-powered insights, and a patient-centric approach, we aim to streamline hospital management and enhance patient outcomes.
          </p>
          <p className="text-gray-600 mb-6">
            Whether it's managing OPD queues, providing emergency assistance, or offering personalized recommendations, CareSync stands for innovation with empathy.
          </p>
          <Link href="/contact">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
