'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      details: '1-800-MELLOW-1',
      subtitle: 'Mon-Fri, 9AM-6PM EST',
      action: 'Call us'
    },
    {
      icon: 'ri-mail-line',
      title: 'Email',
      details: 'hello@mellowskin.com',
      subtitle: 'Response within 24 hours',
      action: 'Send email'
    },
    {
      icon: 'ri-chat-3-line',
      title: 'Live Chat',
      details: 'Available on website',
      subtitle: 'Mon-Fri, 9AM-6PM EST',
      action: 'Start chat'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Visit Us',
      details: '123 Wellness Street',
      subtitle: 'San Francisco, CA 94102',
      action: 'Get directions'
    }
  ];

  const faqs = [
    {
      question: 'How long do your body butters last?',
      answer: 'Our body butters have a shelf life of 12 months when stored properly in a cool, dry place.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship worldwide! International shipping typically takes 7-14 business days.'
    },
    {
      question: 'Are your products suitable for sensitive skin?',
      answer: 'Absolutely! All our products are made with gentle, natural ingredients perfect for sensitive skin.'
    },
    {
      question: 'Can I return products if I am not satisfied?',
      answer: 'Yes, we offer a 30-day satisfaction guarantee. Contact us for easy returns.'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className={`${method.icon} text-xl text-pink-600`}></i>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-gray-700 font-medium">{method.details}</p>
                <p className="text-gray-600 text-sm">{method.subtitle}</p>
              </div>
              <button className="text-pink-600 hover:text-pink-700 text-sm font-medium cursor-pointer whitespace-nowrap">
                {method.action}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-gray-600 text-sm">
            Don't see your question here? <span className="text-pink-600 font-medium cursor-pointer">Contact us directly</span> and we'll be happy to help!
          </p>
        </div>
      </div>

      <div className="bg-pink-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Inquiries</h3>
        <p className="text-gray-600 mb-6">
          Interested in wholesale, partnerships, or custom formulations? We'd love to explore opportunities to work together.
        </p>
        <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap">
          Business Contact Form
        </button>
      </div>
    </div>
  );
}