
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HelpCircle, MessageCircle, Search, Clock } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "Distribution & Platforms",
      faqs: [
        {
          question: "How long does it take for my music to go live?",
          answer: "Your music typically goes live on all platforms within 24-48 hours of submission. Some platforms like Spotify and Apple Music may take up to 72 hours during peak periods."
        },
        {
          question: "Which platforms do you distribute to?",
          answer: "We distribute to 150+ platforms including Spotify, Apple Music, YouTube Music, Amazon Music, Deezer, Tidal, Gaana, JioSaavn, Pandora, SoundCloud, Shazam, TikTok, and many more regional platforms worldwide."
        },
        {
          question: "Can I choose specific platforms for my release?",
          answer: "Yes! While we recommend distributing to all available platforms for maximum reach, you can choose to exclude certain platforms if needed."
        },
        {
          question: "Do you provide ISRC and UPC codes?",
          answer: "Yes, we automatically generate and assign ISRC codes for each track and UPC codes for each release at no additional cost."
        },
        {
          question: "Can I update my music after it's been distributed?",
          answer: "Once your music is live, major changes require a new release. However, you can update metadata, artwork, and release information through our platform."
        }
      ]
    },
    {
      title: "Rights & Royalties",
      faqs: [
        {
          question: "Do I keep the rights to my music?",
          answer: "Absolutely! You retain 100% ownership of your music and masters. We never claim rights to your work - we're simply your distribution partner."
        },
        {
          question: "What percentage of royalties do I keep?",
          answer: "You keep 85-95% of royalties depending on your package. Starter: 85%, Pro: 90%, Premium: 95%. No hidden fees or deductions."
        },
        {
          question: "When do I get paid?",
          answer: "Royalty payments are processed monthly, typically around the 15th of each month for the previous month's earnings. Minimum payout is $10."
        },
        {
          question: "How do you collect royalties from streaming platforms?",
          answer: "We have direct partnerships with all major platforms and collect performance, mechanical, and sync royalties on your behalf from our network of over 150 platforms."
        },
        {
          question: "Can I distribute cover songs?",
          answer: "Yes, we can help with cover song distribution. However, you'll need to secure mechanical licenses, which we can assist with through our legal partners."
        }
      ]
    },
    {
      title: "Promotion & Marketing",
      faqs: [
        {
          question: "What does your playlist promotion include?",
          answer: "Our playlist promotion includes submission to 100-300+ independent curators (depending on package), Spotify editorial consideration, and targeted pitching based on your genre and style."
        },
        {
          question: "Do you guarantee playlist placement?",
          answer: "While we can't guarantee specific placements, our experienced team has strong relationships with curators and a high success rate. We focus on quality, relevant placements."
        },
        {
          question: "How does social media promotion work?",
          answer: "We create and manage campaigns across Instagram, TikTok, Twitter, and Facebook, including content creation, hashtag optimization, and audience targeting to grow your fanbase."
        },
        {
          question: "Can you help with radio promotion?",
          answer: "Yes! Our Premium package includes radio promotion in select markets. We also offer extended radio campaigns as add-on services for broader reach."
        },
        {
          question: "What's included in your press release service?",
          answer: "We write professional press releases and distribute them to 500+ music blogs, magazines, podcasts, and industry publications relevant to your genre."
        }
      ]
    },
    {
      title: "Technical & Support",
      faqs: [
        {
          question: "What audio formats do you accept?",
          answer: "We accept WAV, FLAC, and high-quality MP3 files (320kbps minimum). We recommend WAV or FLAC for the best quality across all platforms."
        },
        {
          question: "What are the artwork requirements?",
          answer: "Artwork must be at least 3000x3000 pixels, in RGB color mode, JPG or PNG format. It should not contain social media handles, URLs, or promotional text."
        },
        {
          question: "Can I schedule releases in advance?",
          answer: "Yes! You can schedule releases up to 12 months in advance. We recommend at least 2 weeks lead time for optimal playlist consideration."
        },
        {
          question: "Do you offer customer support?",
          answer: "Yes! All packages include email support. Pro and Premium packages get priority support, and Premium includes dedicated account management."
        },
        {
          question: "Can I cancel my distribution?",
          answer: "Yes, you can request takedown of your music at any time. However, it may take 24-72 hours to be removed from all platforms, and some platforms may cache content longer."
        }
      ]
    },
    {
      title: "Pricing & Packages",
      faqs: [
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees ever! Our pricing is completely transparent. You pay the package price upfront, and we take our percentage only from royalties earned."
        },
        {
          question: "Can I upgrade my package after release?",
          answer: "Yes! You can upgrade to a higher tier package at any time to access additional promotion services for your existing releases."
        },
        {
          question: "Do you offer discounts for multiple releases?",
          answer: "Yes, we offer volume discounts for artists planning multiple releases. Contact us for custom pricing on 5+ releases per year."
        },
        {
          question: "What happens if my release doesn't perform well?",
          answer: "We provide detailed analytics to help you understand performance. While we can't guarantee success, our team offers guidance on improving future releases."
        },
        {
          question: "Can I get a refund?",
          answer: "Due to the nature of digital distribution, refunds are only available within 24 hours of submission before distribution begins. We're committed to your success though!"
        }
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
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-white/80" />
            <h1 className="font-poppins font-bold text-4xl md:text-5xl mb-6 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Find answers to common questions about music distribution, promotion, rights, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={32} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">24-48 Hours</h3>
              <p className="text-gray-600">Average distribution time to all platforms</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="text-white" size={32} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">150+ Platforms</h3>
              <p className="text-gray-600">Global distribution reach</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={32} />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here to help you succeed</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <h2 className="font-poppins font-bold text-2xl md:text-3xl mb-6 text-center">
                  {category.title}
                </h2>
                
                <Card>
                  <CardContent className="p-0">
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, faqIndex) => (
                        <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`} className="border-b border-gray-200 last:border-0">
                          <AccordionTrigger className="px-6 py-4 text-left font-medium hover:no-underline hover:bg-gray-50">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team of music industry experts is here to help. Get personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gradient-bg text-white hover:opacity-90 font-semibold px-8 py-4">
                <MessageCircle className="mr-2" size={20} />
                Contact Support
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="px-8 py-4">
              <a href="mailto:hello@soundwavedigital.com">Email Us Directly</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-3xl mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600">
              Learn more about music distribution and promotion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in">
              <CardHeader>
                <CardTitle className="font-poppins text-lg">Getting Started Guide</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Complete guide to preparing and distributing your first release.</p>
                <Link to="/how-it-works">
                  <Button variant="outline" size="sm">Learn More</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle className="font-poppins text-lg">Pricing & Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Compare our packages and find the perfect fit for your needs.</p>
                <Link to="/packages">
                  <Button variant="outline" size="sm">View Packages</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardHeader>
                <CardTitle className="font-poppins text-lg">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Read how other artists have grown their careers with our help.</p>
                <Link to="/testimonials">
                  <Button variant="outline" size="sm">Read Stories</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
