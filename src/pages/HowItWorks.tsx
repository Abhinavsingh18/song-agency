
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Upload, Settings, Globe, TrendingUp, BarChart3, DollarSign } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Submit Your Music",
      description: "Upload your tracks, artwork, and metadata through our secure platform. We support all audio formats and provide quality guidelines.",
      details: [
        "High-quality audio files (WAV, FLAC, MP3)",
        "Album artwork (3000x3000px minimum)",
        "Complete metadata and credits",
        "Release date scheduling"
      ]
    },
    {
      number: "02",
      icon: Settings,
      title: "Quality Review",
      description: "Our team reviews your submission for technical quality and metadata accuracy to ensure optimal distribution.",
      details: [
        "Audio quality assessment",
        "Metadata verification",
        "Artwork compliance check",
        "Platform-specific optimization"
      ]
    },
    {
      number: "03",
      icon: Globe,
      title: "Global Distribution",
      description: "Your music goes live on 150+ platforms worldwide within 24-48 hours, reaching millions of potential fans.",
      details: [
        "Automated platform submission",
        "ISRC and UPC code assignment",
        "Playlist consideration",
        "Social media integration"
      ]
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Promotion Campaign",
      description: "We launch targeted marketing campaigns to maximize your music's visibility and engagement across digital platforms.",
      details: [
        "Playlist pitch campaigns",
        "Social media promotion",
        "Blog and press outreach",
        "Influencer collaborations"
      ]
    },
    {
      number: "05",
      icon: BarChart3,
      title: "Track Performance",
      description: "Monitor your music's performance with detailed analytics and insights from all platforms in one dashboard.",
      details: [
        "Real-time streaming data",
        "Geographic breakdowns",
        "Audience demographics",
        "Revenue tracking"
      ]
    },
    {
      number: "06",
      icon: DollarSign,
      title: "Collect Royalties",
      description: "Receive your earnings directly with transparent reporting and keep up to 95% of your royalties.",
      details: [
        "Monthly royalty payments",
        "Detailed earnings reports",
        "Multi-currency support",
        "Tax documentation"
      ]
    }
  ];

  const platforms = [
    "Spotify", "Apple Music", "YouTube Music", "Amazon Music",
    "Deezer", "Tidal", "Pandora", "SoundCloud",
    "Gaana", "JioSaavn", "Shazam", "TikTok"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              How It Works
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Simple, transparent process to get your music heard worldwide. From upload to earnings, we handle everything.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="flex items-center mb-6">
                    <div className="text-6xl font-bold text-gray-100 mr-4">{step.number}</div>
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center">
                      <step.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h2 className="font-poppins font-bold text-3xl mb-4">{step.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex-1 animate-fade-in" style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                  <Card className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50 border-none shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-center">
                        <div className="w-24 h-24 gradient-bg rounded-full flex items-center justify-center mx-auto mb-6">
                          <step.icon className="text-white" size={48} />
                        </div>
                        <h3 className="font-poppins font-semibold text-xl mb-4">Step {step.number}</h3>
                        <div className="bg-white rounded-lg p-6">
                          <div className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <div key={idx} className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Timeline Overview
            </h2>
            <p className="text-xl text-gray-600">
              From submission to global availability - here's what to expect
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary opacity-20"></div>
            
            <div className="space-y-8">
              {[
                { time: "Day 1", event: "Music submission and review" },
                { time: "Day 2-3", event: "Quality check and metadata verification" },
                { time: "Day 3-4", event: "Distribution to all platforms begins" },
                { time: "Day 5-7", event: "Music goes live worldwide" },
                { time: "Week 2", event: "Promotion campaigns launch" },
                { time: "Month 1", event: "First royalty payments processed" }
              ].map((item, index) => (
                <div key={index} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex-1 text-right pr-8">
                    <div className="font-poppins font-semibold text-lg">{item.time}</div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full z-10"></div>
                  <div className="flex-1 pl-8">
                    <div className="text-gray-700">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Where Your Music Will Be Available
            </h2>
            <p className="text-xl text-gray-600">
              We distribute to 150+ platforms, including all major streaming services
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="font-medium text-gray-700">{platform}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full">
              <span className="font-semibold">+138 more platforms</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Join thousands of artists who trust us with their music distribution and promotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4">
                Choose Your Package
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
