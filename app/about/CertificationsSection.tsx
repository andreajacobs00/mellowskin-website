'use client';

export default function CertificationsSection() {
  const certifications = [
    {
      name: 'USDA Organic',
      description: 'Certified organic ingredients',
      icon: 'ri-award-line'
    },
    {
      name: 'Cruelty-Free',
      description: 'Never tested on animals',
      icon: 'ri-heart-line'
    },
    {
      name: 'Sustainable Sourcing',
      description: 'Ethically sourced materials',
      icon: 'ri-leaf-line'
    },
    {
      name: 'Small Batch',
      description: 'Handcrafted quality assurance',
      icon: 'ri-hand-heart-line'
    }
  ];

  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're proud of the standards we uphold and the certifications that validate our commitment to quality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${cert.icon} text-2xl text-pink-600`}></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These certifications represent our ongoing commitment to excellence, sustainability, and ethical practices. 
            We regularly audit our processes and partnerships to ensure we maintain the highest standards in everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}