
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Music, 
  TrendingUp, 
  Share2, 
  FileText, 
  Users, 
  Sparkles,
  Headphones,
  Radio,
  Globe,
  Target,
  BarChart3,
  Megaphone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Music,
      title: "Music Distribution",
      description: "Get your music on 150+ platforms worldwide including Spotify, Apple Music, YouTube, Amazon Music, Gaana, JioSaavn, and more.",
      features: [
        "Global distribution to 150+ platforms",
        "Automated release scheduling",
        "ISRC code generation",
        "Metadata management",
        "Quality control checks"
      ]
    },
    {
      icon: TrendingUp,
      title: "Music Promotion & Marketing",
      description: "Strategic promotion campaigns designed to maximize your music's reach and engagement across digital platforms.",
      features: [
        "Targeted playlist submissions",
        "Blog and media outreach",
        "Radio promotion campaigns",
        "Digital advertising management",
        "Analytics and reporting"
      ]
    },
    {
      icon: Share2,
      title: "Social Media Campaigns",
      description: "Comprehensive social media marketing to build your fanbase and increase engagement across all major platforms.",
      features: [
        "Content creation and curation",
        "Multi-platform posting",
        "Audience engagement strategies",
        "Hashtag optimization",
        "Performance tracking"
      ]
    },
    {
      icon: FileText,
      title: "Press Releases & PR",
      description: "Professional press release writing and distribution to music blogs, magazines, and industry publications.",
      features: [
        "Professional PR writing",
        "Media list development",
        "Press kit creation",
        "Interview coordination",
        "Media monitoring"
      ]
    },
    {
      icon: Users,
      title: "Influencer Outreach",
      description: "Connect with relevant influencers and content creators to amplify your music's reach and credibility.",
      features: [
        "Influencer identification",
        "Outreach campaign management",
        "Collaboration facilitation",
        "Content strategy development",
        "Performance measurement"
      ]
    },
    {
      icon: Sparkles,
      title: "Custom Package Deals",
      description: "Tailored solutions combining multiple services to meet your specific goals and budget requirements.",
      features: [
        "Personalized service combinations",
        "Flexible pricing options",
        "Dedicated account management",
        "Custom reporting dashboards",
        "Priority support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Comprehensive music distribution and promotion services designed to help artists and creators reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-4">
                    <service.icon className="text-white" size={32} />
                  </div>
                  <CardTitle className="font-poppins text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Distribute to 150+ Platforms
            </h2>
            <p className="text-xl text-gray-600">
              Your music will be available on all major streaming and download platforms worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              "Spotify", "Apple Music", "YouTube Music", "Amazon Music", 
              "Gaana", "JioSaavn", "Deezer", "Tidal", 
              "Pandora", "SoundCloud", "Shazam", "TikTok"
            ].map((platform, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-full text-center">
                <span className="font-medium text-gray-700">{platform}</span>
              </div>
            ))}
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
            Choose from our flexible packages or contact us for a custom solution tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/packages">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4">
                View Packages
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

export default Services;
