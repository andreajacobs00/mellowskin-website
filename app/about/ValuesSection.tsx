'use client';

export default function ValuesSection() {
  const values = [
    {
      icon: 'ri-leaf-line',
      title: 'Natural & Pure',
      description: 'We source only the finest organic ingredients, ensuring every product is free from harmful chemicals and synthetic additives.'
    },
    {
      icon: 'ri-recycle-line',
      title: 'Sustainable',
      description: 'Our commitment to the environment drives us to use eco-friendly packaging and sustainable sourcing practices.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Ethically Made',
      description: 'We believe in fair trade practices and never test on animals. Every purchase supports ethical beauty standards.'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Handcrafted',
      description: 'Each product is lovingly made in small batches to ensure the highest quality and attention to detail.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality First',
      description: 'We maintain rigorous quality standards and test every batch to ensure consistency and excellence.'
    },
    {
      icon: 'ri-community-line',
      title: 'Community Focused',
      description: 'We support local communities and give back through various charitable initiatives and partnerships.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            These core principles guide everything we do and shape the way we create our products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${value.icon} text-2xl text-pink-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}