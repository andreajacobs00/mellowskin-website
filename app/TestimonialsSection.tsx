'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, NY',
      rating: 5,
      comment: 'The Lavender Dreams body butter is absolutely amazing! My skin has never felt so soft and smooth. The scent is divine and lasts all day.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20happy%20young%20woman%20with%20blonde%20hair%2C%20smiling%20warmly%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20casual%20professional%20appearance%2C%20friendly%20and%20approachable%20expression&width=80&height=80&seq=testimonial-1&orientation=squarish'
    },
    {
      name: 'Emily Chen',
      location: 'Los Angeles, CA',
      rating: 5,
      comment: 'I have sensitive skin and these body butters are perfect! No irritation whatsoever, just pure nourishment. The Vanilla Bliss is my favorite.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20happy%20young%20Asian%20woman%20with%20dark%20hair%2C%20smiling%20warmly%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20casual%20professional%20appearance%2C%20friendly%20and%20approachable%20expression&width=80&height=80&seq=testimonial-2&orientation=squarish'
    },
    {
      name: 'Jessica Williams',
      location: 'Chicago, IL',
      rating: 5,
      comment: 'The quality is outstanding and the packaging is so elegant. These make perfect gifts too! I have ordered multiple times and will continue to do so.',
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20happy%20young%20woman%20with%20curly%20brown%20hair%2C%20smiling%20warmly%2C%20clean%20white%20background%2C%20bright%20natural%20lighting%2C%20casual%20professional%20appearance%2C%20friendly%20and%20approachable%20expression&width=80&height=80&seq=testimonial-3&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our happy customers have to say about Mellow Skin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-500 text-xl"></i>
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center justify-center">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}