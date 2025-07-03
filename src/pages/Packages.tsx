
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Packages = () => {
  const packages = [
    {
      name: "Starter",
      icon: Zap,
      price: "$29",
      period: "per release",
      description: "Perfect for independent artists getting started",
      popular: false,
      features: [
        "Distribution to 50+ platforms",
        "Basic metadata management",
        "ISRC code generation",
        "Monthly sales reports",
        "Email support",
        "Keep 85% of royalties"
      ],
      excluded: [
        "Social media promotion",
        "Playlist submission",
        "Press release",
        "Priority support"
      ]
    },
    {
      name: "Pro",
      icon: Star,
      price: "$79",
      period: "per release",
      description: "Ideal for serious artists looking to grow",
      popular: true,
      features: [
        "Distribution to 150+ platforms",
        "Advanced metadata management",
        "ISRC & UPC code generation",
        "Playlist submission to 100+ curators",
        "Basic social media promotion",
        "Weekly sales reports",
        "Priority email support",
        "Keep 90% of royalties"
      ],
      excluded: [
        "Press release",
        "Influencer outreach"
      ]
    },
    {
      name: "Premium",
      icon: Crown,
      price: "$149",
      period: "per release",
      description: "Complete package for professional artists",
      popular: false,
      features: [
        "Distribution to 150+ platforms",
        "Premium metadata optimization",
        "ISRC & UPC code generation",
        "Playlist submission to 300+ curators",
        "Full social media campaign",
        "Professional press release",
        "Influencer outreach campaign",
        "Radio promotion (select markets)",
        "Daily sales reports",
        "Dedicated account manager",
        "Phone & email support",
        "Keep 95% of royalties"
      ],
      excluded: []
    }
  ];

  const addOns = [
    {
      name: "Extended Social Campaign",
      price: "$99",
      description: "Additional 30-day social media promotion across all platforms"
    },
    {
      name: "Video Promotion",
      price: "$149",
      description: "YouTube and TikTok video promotion campaign"
    },
    {
      name: "International Radio Push",
      price: "$199",
      description: "Radio promotion in USA, UK, Canada, and Australia"
    },
    {
      name: "Spotify Playlist Campaign",
      price: "$79",
      description: "Targeted submission to 100+ Spotify playlists"
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
              Choose Your Package
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Flexible pricing options designed to fit every artist's needs and budget. No hidden fees, transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 animate-fade-in ${pkg.popular ? 'ring-2 ring-primary scale-105' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-bg text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${pkg.popular ? 'gradient-bg' : 'bg-gray-100'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <pkg.icon className={pkg.popular ? 'text-white' : 'text-gray-600'} size={32} />
                  </div>
                  <CardTitle className="font-poppins text-2xl">{pkg.name}</CardTitle>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-gray-500">{pkg.period}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{pkg.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {pkg.excluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3 opacity-50">
                        <div className="w-4 h-4 border border-gray-300 rounded mt-0.5 flex-shrink-0"></div>
                        <span className="text-sm text-gray-400 line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact">
                    <Button className={`w-full ${pkg.popular ? 'gradient-bg text-white hover:opacity-90' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}>
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Boost Your Campaign
            </h2>
            <p className="text-xl text-gray-600">
              Add these services to any package for maximum impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">{addon.price}</div>
                  <h3 className="font-poppins font-semibold text-lg mb-3">{addon.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{addon.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Add to Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Why Choose Our Packages?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-green-600" size={32} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">No Hidden Fees</h3>
              <p className="text-gray-600">Transparent pricing with no setup fees, annual charges, or hidden costs.</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-blue-600" size={32} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Keep Your Rights</h3>
              <p className="text-gray-600">You retain 100% ownership of your music and masters. We never claim rights.</p>
            </div>
            
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="text-purple-600" size={32} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Fast Distribution</h3>
              <p className="text-gray-600">Your music goes live on all platforms within 24-48 hours of submission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Our team of music industry experts is here to help you select the perfect package for your goals.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100 font-semibold px-8 py-4">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
