import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, FileText, Rocket, Loader2, AlertCircle } from 'lucide-react';

// ─── EmailJS config ───────────────────────────────────────────────────────────
// 1. Sign up free at https://emailjs.com
// 2. Create a service (Gmail / Outlook) → paste Service ID below
// 3. Create a template → paste Template ID below
// 4. Account → API Keys → paste Public Key below
// Template variables to use: {{from_name}} {{from_email}} {{company}}
//   {{project_type}} {{budget}} {{timeline}} {{message}}
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_FORM = { from_name: '', from_email: '', company: '', project_type: '', budget: '', timeline: '', message: '' };

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus('success');
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: Mail,  title: 'Email',         value: 'hello@veloratech.com',  description: 'Send us an email anytime' },
    { icon: Phone, title: 'Phone',         value: '+94 (076) 114-8054',     description: 'Call for urgent inquiries' },
    { icon: MapPin,title: 'Location',      value: 'Nagollagama, Sri Lanka', description: 'Available for worldwide projects' },
    { icon: Clock, title: 'Response Time', value: '< 24 hours',            description: 'We typically respond within 24 hours' },
  ];

  const processSteps = [
    { icon: MessageSquare, title: 'Initial Consultation', description: 'Free 30-minute discovery call to discuss your needs' },
    { icon: FileText,      title: 'Proposal',             description: 'Detailed project proposal with timeline and pricing' },
    { icon: CheckCircle,   title: 'Agreement',            description: 'Contract signing and project kickoff' },
    { icon: Calendar,      title: 'Development',          description: 'Regular updates and milestone reviews' },
    { icon: Rocket,        title: 'Launch',               description: 'Testing, deployment, and go-live support' },
  ];

  const projectTypes = ['Website Development','Web Application','E-commerce Platform','Software Solution','API Development','Technical Consulting','Other'];
  const budgetRanges = ['$5,000 - $10,000','$10,000 - $25,000','$25,000 - $50,000','$50,000+',"Let's discuss"];
  const timelines    = ['ASAP','1-3 months','3-6 months','6+ months','Flexible'];

  const faqs = [
    { q: 'How long does a typical project take?', a: "Timelines vary by scope. A simple website might take 2–4 weeks, while a complex web application could take 2–6 months. We'll provide a detailed timeline during our initial consultation." },
    { q: 'Do you provide ongoing support after launch?', a: 'Yes! We offer support packages covering bug fixes, updates, performance monitoring, and feature enhancements.' },
    { q: 'What technologies do you work with?', a: 'We specialise in React, Vue.js, Node.js, Python, PHP, and WordPress. We choose the best stack based on your specific goals.' },
    { q: 'How do you handle project communication?', a: "We believe in transparent communication with regular updates, scheduled check-ins, and full visibility into project progress via email or phone." },
  ];

  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <SEO title="Message Sent" description="Your message has been sent to Velora Tech." />
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-6">Thanks for reaching out. We'll get back to you within 24 hours.</p>
          <Button onClick={() => setStatus('idle')} className="bg-blue-600 hover:bg-blue-700">Send Another Message</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us"
        description="Get in touch with Velora Tech to start your web or software project. Free initial consultation. Response within 24 hours."
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's Build Something <span className="text-blue-600">Great Together</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to start your project? Let's discuss your needs and create a solution that drives real results.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">We're here to help bring your ideas to life. Reach out and let's start the conversation.</p>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start space-x-4">
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

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h2>

                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6">
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      Something went wrong. Please try again or email us directly at{' '}
                      <a href="mailto:hello@veloratech.com" className="underline font-medium">hello@veloratech.com</a>.
                    </p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="from_name" name="from_name" required value={formData.from_name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="from_email" name="from_email" required value={formData.from_email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="project_type" className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                      <select id="project_type" name="project_type" required value={formData.project_type} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select type</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select budget</option>
                        {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        <option value="">Select timeline</option>
                        {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and any specific requirements..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>

                  <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60">
                    {status === 'loading' ? <><Loader2 className="h-5 w-5 mr-2 animate-spin" />Sending...</> : <><Send className="h-5 w-5 mr-2" />Send Message</>}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Here's how we'll work together to bring your project to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-8">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
