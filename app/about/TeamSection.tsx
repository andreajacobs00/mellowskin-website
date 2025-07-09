'use client';

export default function TeamSection() {
  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Founder & CEO',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20confident%20businesswoman%20with%20warm%20smile%2C%20modern%20office%20background%2C%20natural%20lighting%2C%20business%20casual%20attire%2C%20approachable%20and%20friendly%20expression%2C%20high%20quality%20corporate%20headshot&width=400&height=400&seq=team-sarah&orientation=squarish',
      bio: 'Sarah founded Mellow Skin with a mission to create pure, effective skincare. With 10+ years in natural beauty, she leads our product development and quality standards.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Product Development',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20young%20Latina%20scientist%20in%20lab%20coat%2C%20clean%20laboratory%20background%2C%20confident%20and%20intelligent%20expression%2C%20natural%20lighting%2C%20scientific%20professional%20headshot&width=400&height=400&seq=team-emily&orientation=squarish',
      bio: 'Emily brings her chemistry background to formulating our signature blends. She ensures every ingredient meets our strict quality and safety standards.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Sustainability Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20African%20American%20man%20in%20business%20attire%2C%20modern%20office%20environment%2C%20confident%20and%20professional%20demeanor%2C%20natural%20lighting%2C%20corporate%20headshot%20with%20friendly%20expression&width=400&height=400&seq=team-marcus&orientation=squarish',
      bio: 'Marcus oversees our environmental initiatives and ethical sourcing. He works with suppliers worldwide to maintain our sustainability commitments.'
    },
    {
      name: 'Jessica Chen',
      role: 'Customer Experience Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20Asian%20businesswoman%20with%20warm%20smile%2C%20modern%20workplace%20background%2C%20business%20professional%20attire%2C%20approachable%20and%20friendly%20expression%2C%20high%20quality%20corporate%20headshot&width=400&height=400&seq=team-jessica&orientation=squarish',
      bio: 'Jessica ensures every customer has an exceptional experience with Mellow Skin. She leads our customer service team and community engagement efforts.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind Mellow Skin who make our mission possible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-pink-600 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}