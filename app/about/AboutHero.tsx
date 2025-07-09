'use client';

export default function AboutHero() {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Beautiful%20natural%20skincare%20workshop%20with%20artisan%20crafting%20premium%20body%20butters%2C%20warm%20lighting%2C%20organic%20ingredients%20scattered%20around%2C%20peaceful%20crafting%20environment%2C%20glass%20jars%20and%20natural%20botanicals%2C%20soft%20cream%20and%20pink%20color%20palette%2C%20professional%20photography&width=1920&height=1080&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafted with
            <span className="block text-pink-300">Love & Nature</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Our journey began with a simple belief: your skin deserves the purest, most nourishing ingredients nature has to offer
          </p>
        </div>
      </div>
    </section>
  );
}