'use client';

export default function LocationMap() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Our Studio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come see where the magic happens! Our studio is open for visits by appointment.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0192616607934!2d-122.41941908468179!3d37.774929779759094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mellow Skin Studio Location"
            ></iframe>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-map-pin-line text-xl text-pink-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600 text-sm">
                  123 Wellness Street<br />
                  San Francisco, CA 94102
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-xl text-pink-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Studio Hours</h3>
                <p className="text-gray-600 text-sm">
                  Mon-Fri: 10AM-5PM<br />
                  Sat: 11AM-3PM<br />
                  Sun: Closed
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-car-line text-xl text-pink-600"></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600 text-sm">
                  Free street parking<br />
                  Public transit accessible<br />
                  Bike-friendly area
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 pt-8 border-t border-gray-100">
              <p className="text-gray-600 mb-4">
                Want to schedule a studio visit or product consultation?
              </p>
              <button className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors cursor-pointer whitespace-nowrap">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}