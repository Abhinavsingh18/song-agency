
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, Music, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maya Rodriguez",
      role: "Singer-Songwriter",
      location: "Los Angeles, CA",
      image: "/placeholder.svg",
      rating: 5,
      quote: "SoundWave Digital transformed my music career. Within 3 months, my song was featured on major Spotify playlists and I gained over 50K streams. Their promotion strategy is incredible!",
      results: "250K+ streams, Featured on 15 playlists"
    },
    {
      name: "DJ Alex Chen",
      role: "Electronic Music Producer",
      location: "New York, NY",
      image: "/placeholder.svg",
      rating: 5,
      quote: "The distribution speed is amazing - my tracks were live on all platforms within 24 hours. The analytics dashboard helps me understand my audience better than ever before.",
      results: "150+ platforms, Real-time analytics"
    },
    {
      name: "The Midnight Collective",
      role: "Indie Rock Band",
      location: "Austin, TX",
      image: "/placeholder.svg",
      rating: 5,
      quote: "We've tried other distributors, but SoundWave's personal touch and promotional support made all the difference. Our latest album reached #3 on indie charts!",
      results: "#3 Indie Charts, 500K+ streams"
    },
    {
      name: "Priya Sharma",
      role: "Classical Vocalist",
      location: "Mumbai, India",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Excellent support for Indian artists! They helped me reach global audiences while maintaining my cultural authenticity. The royalty payments are always on time.",
      results: "Global reach, Timely payments"
    },
    {
      name: "Marcus Johnson",
      role: "Hip-Hop Artist",
      location: "Atlanta, GA",
      image: "/placeholder.svg",
      rating: 5,
      quote: "Their social media campaigns are fire! My Instagram followers doubled in just one month, and my music videos are getting crazy engagement on TikTok.",
      results: "100% follower growth, Viral TikTok"
    },
    {
      name: "Luna & The Stars",
      role: "Pop Duo",
      location: "Nashville, TN",
      image: "/placeholder.svg",
      rating: 5,
      quote: "From bedroom producers to radio play - SoundWave made it happen! Their press release service got us featured in major music blogs and magazines.",
      results: "Radio play, Major blog features"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Happy Artists" },
    { number: "50M+", label: "Streams Generated" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "150+", label: "Platforms" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              What Artists Say
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Real stories from real artists who've transformed their music careers with SoundWave Digital.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From independent artists to established musicians, see how we've helped artists reach their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                      <User className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-poppins font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={16} />
                    ))}
                  </div>
                  
                  <div className="relative mb-4">
                    <Quote className="absolute -top-2 -left-2 text-purple-200" size={32} />
                    <p className="text-gray-700 italic pl-6">{testimonial.quote}</p>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-sm font-semibold text-purple-700 mb-1">Results:</div>
                    <div className="text-sm text-purple-600">{testimonial.results}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Hear directly from our artists about their experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Music className="text-white" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-lg mb-2">Artist Spotlight #{video}</h3>
                  <p className="text-gray-600 text-sm">Watch how SoundWave Digital helped transform this artist's career.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of artists who've transformed their music careers with our comprehensive distribution and promotion services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4">
                Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
