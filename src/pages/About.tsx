
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Globe, Award, Music, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Artist-First Approach",
      description: "We believe artists deserve to keep their rights and the majority of their earnings. Your music, your rules."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "From local scenes to international stages, we help artists connect with audiences worldwide."
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "No hidden fees, clear reporting, and honest communication every step of the way."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We stay ahead of industry trends to provide cutting-edge distribution and promotion strategies."
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      bio: "Former A&R executive with 15+ years in the music industry. Passionate about empowering independent artists.",
      specialties: ["Music Industry Strategy", "Artist Development", "Label Relations"]
    },
    {
      name: "Marcus Thompson",
      role: "Head of Distribution",
      bio: "Technology expert who built our proprietary distribution platform. Ensures your music reaches every corner of the globe.",
      specialties: ["Platform Integration", "Technical Operations", "Quality Assurance"]
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      bio: "Digital marketing specialist with a track record of viral campaigns. Knows what makes music discoverable.",
      specialties: ["Social Media Strategy", "Playlist Placement", "Influencer Marketing"]
    },
    {
      name: "David Rodriguez",
      role: "Artist Relations",
      bio: "Former touring musician turned industry advocate. Your success is his mission.",
      specialties: ["Artist Support", "Career Guidance", "Industry Networking"]
    }
  ];

  const milestones = [
    { year: "2019", event: "SoundWave Digital founded with a mission to democratize music distribution" },
    { year: "2020", event: "Reached 1,000 artists and 10 million streams distributed" },
    { year: "2021", event: "Expanded to 100+ platforms and launched social media promotion services" },
    { year: "2022", event: "Introduced AI-powered playlist targeting and influencer matching" },
    { year: "2023", event: "Crossed 10,000 artists and 100 million streams milestone" },
    { year: "2024", event: "Launched premium packages and expanded to 150+ platforms worldwide" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              About SoundWave Digital
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Empowering artists to share their music with the world since 2019. We're more than a distribution service - we're your partners in success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                To democratize music distribution and give every artist - regardless of size or budget - the tools and support they need to reach global audiences and build sustainable music careers.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We believe that great music should be heard, and talented artists should be fairly compensated for their work. That's why we've built a platform that puts artists first, with transparent pricing, comprehensive promotion, and dedicated support.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center">
                  <Music className="text-white" size={32} />
                </div>
                <div>
                  <div className="font-poppins font-semibold text-lg">10,000+ Artists Trust Us</div>
                  <div className="text-gray-600">To distribute their music worldwide</div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-none">
                <CardContent className="p-0">
                  <div className="text-center">
                    <Award className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                    <h3 className="font-poppins font-bold text-2xl mb-4">Industry Recognition</h3>
                    <p className="text-gray-700 mb-6">
                      Voted "Best Independent Distribution Service" by Music Industry Weekly for three consecutive years.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">98%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">24/7</div>
                        <div className="text-sm text-gray-600">Artist Support</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-white" size={32} />
                  </div>
                  <h3 className="font-poppins font-semibold text-xl mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Music industry veterans and technology experts working together to amplify your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="font-poppins font-semibold text-lg text-center mb-1">{member.name}</h3>
                  <p className="text-sm text-purple-600 text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to industry leader - our growth story
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-primary opacity-20"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10">
                    {milestone.year}
                  </div>
                  <div className="ml-8">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Join Our Community of Artists
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Ready to take your music career to the next level? We're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
