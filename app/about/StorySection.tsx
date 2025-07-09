'use client';

export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Mellow Skin was born from a personal journey of discovering the transformative power of natural skincare. After struggling with sensitive skin for years, our founder Sarah began experimenting with pure, organic ingredients in her kitchen.
              </p>
              <p>
                What started as a quest for gentle, effective skincare quickly became a passion for creating luxurious body butters that nourish both skin and soul. Each recipe was carefully crafted, tested, and perfected through countless hours of dedication and love.
              </p>
              <p>
                Today, we're proud to share these artisanal creations with you. Every jar of Mellow Skin body butter represents our commitment to quality, sustainability, and the belief that beautiful skin comes from beautiful ingredients.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">2019</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">50k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Artisan%20woman%20carefully%20crafting%20natural%20body%20butter%20in%20bright%2C%20clean%20workshop%20setting%2C%20surrounded%20by%20organic%20ingredients%20like%20shea%20butter%2C%20essential%20oils%2C%20and%20botanical%20elements%2C%20warm%20natural%20lighting%2C%20professional%20lifestyle%20photography%2C%20modern%20minimalist%20workspace&width=600&height=700&seq=story-image&orientation=portrait"
              alt="Our founder crafting body butters"
              className="w-full h-auto rounded-2xl shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}