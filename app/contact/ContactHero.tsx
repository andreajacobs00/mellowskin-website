'use client';

export default function ContactHero() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We'd love to hear from you! Whether you have questions about our products, need skincare advice, or want to share your Mellow Skin experience
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600">
            <div className="flex items-center">
              <i className="ri-time-line mr-2 text-pink-600"></i>
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center">
              <i className="ri-customer-service-line mr-2 text-pink-600"></i>
              <span>Friendly support team</span>
            </div>
            <div className="flex items-center">
              <i className="ri-chat-smile-line mr-2 text-pink-600"></i>
              <span>Personal attention</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}