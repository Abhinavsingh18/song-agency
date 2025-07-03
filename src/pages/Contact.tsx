
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@soundwavedigital.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Los Angeles, CA",
      description: "Schedule an appointment"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24 Hours",
      description: "Average response time"
    }
  ];

  const faqs = [
    {
      question: "How long does distribution take?",
      answer: "Your music typically goes live on all platforms within 24-48 hours of submission."
    },
    {
      question: "Do you take ownership of my music?",
      answer: "No, you retain 100% ownership of your music and masters. We never claim rights to your work."
    },
    {
      question: "What percentage of royalties do I keep?",
      answer: "You keep 85-95% of royalties depending on your package. We have transparent, no-hidden-fee pricing."
    },
    {
      question: "Can I distribute cover songs?",
      answer: "Yes, we can help with cover song licensing and distribution through our legal partners."
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
              Get In Touch
            </h1>
            <p className="text-xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
              Ready to take your music to the next level? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins text-2xl flex items-center">
                    <MessageCircle className="mr-3 text-primary" size={28} />
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Service Interested In</label>
                        <Select onValueChange={(value) => handleChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="distribution">Music Distribution</SelectItem>
                            <SelectItem value="promotion">Music Promotion</SelectItem>
                            <SelectItem value="social">Social Media Campaign</SelectItem>
                            <SelectItem value="press">Press Release</SelectItem>
                            <SelectItem value="custom">Custom Package</SelectItem>
                            <SelectItem value="consultation">Free Consultation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select onValueChange={(value) => handleChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100">Under $100</SelectItem>
                          <SelectItem value="100-500">$100 - $500</SelectItem>
                          <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                          <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                          <SelectItem value="over-5000">Over $5,000</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your music, goals, and how we can help..."
                      />
                    </div>

                    <Button type="submit" className="w-full gradient-bg text-white hover:opacity-90 transition-opacity">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div>
                <h2 className="font-poppins font-bold text-3xl mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with us through any of these channels. Our team is here to help you succeed.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="font-poppins font-semibold text-lg mb-1">{info.title}</h3>
                          <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="font-poppins text-xl">Quick Answers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <h4 className="font-semibold text-sm mb-2">{faq.question}</h4>
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-poppins font-bold text-3xl mb-4">
            Prefer to Start Right Away?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Check out our packages and get your music distributed today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-bg text-white hover:opacity-90 px-8 py-4">
              <a href="/packages">View Packages</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-4">
              <a href="/how-it-works">How It Works</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
