
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Play, Users, Globe, TrendingUp, Music, Headphones, Radio, Share2 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
              Amplify Your Music
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-400">
                Worldwide
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Professional music distribution and promotion services. Get your songs on Spotify, Apple Music, YouTube, and 150+ platforms worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Link to="/packages">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                  Distribute Your Song Now
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 text-lg">
                  <Play className="mr-2" size={20} />
                  How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Music Icons */}
        <div className="absolute top-20 left-10 animate-bounce-gentle">
          <Music className="text-white/30" size={40} />
        </div>
        <div className="absolute top-40 right-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
          <Headphones className="text-white/30" size={35} />
        </div>
        <div className="absolute bottom-20 left-20 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
          <Radio className="text-white/30" size={45} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Platforms</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">Artists Served</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
              <div className="text-gray-600">Streams Generated</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
              Why Choose SoundWave Digital?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive music distribution and promotion services to help your music reach the right audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Global Distribution</h3>
                <p className="text-gray-600">
                  Get your music on 150+ platforms including Spotify, Apple Music, YouTube, Amazon Music, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={32} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Smart Promotion</h3>
                <p className="text-gray-600">
                  Advanced marketing strategies including social media campaigns and influencer outreach.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Expert Support</h3>
                <p className="text-gray-600">
                  Dedicated team of music industry professionals providing personalized guidance and support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <CardContent className="pt-6">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="text-white" size={32} />
                </div>
                <h3 className="font-poppins font-semibold text-xl mb-3">Rights Management</h3>
                <p className="text-gray-600">
                  Complete rights management and royalty collection to ensure you get paid for your music.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Share Your Music with the World?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of artists who trust SoundWave Digital to distribute and promote their music globally.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4">
                View Packages
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
