'use client';

export default function FeaturesSection() {
  const features = [
    {
      icon: 'ri-leaf-line',
      title: 'Natural Ingredients',
      description: 'Made with 100% natural and organic ingredients, free from harmful chemicals and preservatives.'
    },
    {
      icon: 'ri-heart-line',
      title: 'Handcrafted with Love',
      description: 'Each jar is carefully handcrafted in small batches to ensure the highest quality and freshness.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cruelty-Free',
      description: 'We never test on animals and are committed to ethical and sustainable beauty practices.'
    },
    {
      icon: 'ri-truck-line',
      title: 'Free Shipping',
      description: 'Enjoy free shipping on all orders over $50. Fast and secure delivery to your doorstep.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Mellow Skin?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing you with the finest body care products that nourish and pamper your skin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors">
                <i className={`${feature.icon} text-2xl text-pink-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}