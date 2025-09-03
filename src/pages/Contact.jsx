import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  Calendar,
  FileText,
  Rocket
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@veloratech.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+94 (076) 114-8054',
      description: 'Call for urgent inquiries'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nagollagama, Sri Lanka',
      description: 'Available for worldwide'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      description: 'Our team typically responds within 24 hours'
    }
  ];

  const processSteps = [
    {
      icon: MessageSquare,
      title: 'Initial Consultation',
      description: 'Free 30-minute discovery call to discuss your needs'
    },
    {
      icon: FileText,
      title: 'Proposal',
      description: 'Detailed project proposal with timeline and pricing'
    },
    {
      icon: CheckCircle,
      title: 'Agreement',
      description: 'Contract signing and project kickoff'
    },
    {
      icon: Calendar,
      title: 'Development',
      description: 'Regular updates and milestone reviews'
    },
    {
      icon: Rocket,
      title: 'Launch',
      description: 'Testing, deployment, and go-live support'
    }
  ];

  const projectTypes = [
    'Website Development',
    'Web Application',
    'E-commerce Platform',
    'Software Solution',
    'API Development',
    'Technical Consulting',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000+',
    'Let\'s discuss'
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Flexible'
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Thank You!
          </h2>
          <p className="text-gray-600 mb-4">
            Your message has been sent successfully. I'll get back to you within 24 hours.
          </p>
          <div className="text-sm text-gray-500">
            Redirecting back to form...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Something{' '}
            <span className="text-blue-600">Great Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your needs and create a 
            solution that drives real results for your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to help bring your ideas to life. Reach out through any
                of these channels, and let's start the conversation.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg flex-shrink-0">
                      <info.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-blue-600 font-medium">{info.value}</p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Start Your Project
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select type</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select budget</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={6}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how we'll work together to bring your project to life
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. A simple website 
                might take 2-4 weeks, while a complex web application could take 2-6 months. 
                We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you provide ongoing support after launch?
              </h3>
              <p className="text-gray-600">
                Yes! We offer various support packages including bug fixes, updates, 
                performance monitoring, and feature enhancements. We can discuss the 
                best support plan for your needs.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What technologies do you work with?
              </h3>
              <p className="text-gray-600">
                We specialize in modern web technologies including React, Vue.js, Node.js, 
                Python, and Wordpress. We choose the best technology stack based 
                on your specific requirements and goals.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How do you handle project communication?
              </h3>
              <p className="text-gray-600">
                We believe in transparent communication with regular updates. We'll have 
                scheduled check-ins, and we're always available for questions via email 
                or phone. You'll have full visibility into the project progress.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

