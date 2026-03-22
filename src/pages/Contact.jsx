import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle,
  MessageSquare, Calendar, FileText, Rocket, Loader2, AlertCircle,
} from 'lucide-react';
import contactHeroBg from '../assets/hero-bg.jpg';

// ─── EmailJS config ───────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID       = 'service_o3s43jb';       // e.g. service_o3s43jb
const EMAILJS_TEMPLATE_ID      = 'template_gnjz92p';      // notifies YOU of new enquiry
const EMAILJS_AUTOREPLY_ID     = 'template_yhulxmm';     // auto-reply sent TO client
const EMAILJS_PUBLIC_KEY       = 'e9YUkcM48gRrP1aZg';
// ─────────────────────────────────────────────────────────────────────────────

const INITIAL_FORM = {
  from_name: '', from_email: '', company: '',
  project_type: '', budget: '', timeline: '', message: '',
};

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      await Promise.all([
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID,  formRef.current, EMAILJS_PUBLIC_KEY),
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_ID, formRef.current, EMAILJS_PUBLIC_KEY),
      ]);
      setStatus('success');
      setFormData(INITIAL_FORM);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: Mail,   title: 'Email',         value: 'hello@veloratech.com.lk', description: 'Send us an email anytime' },
    { icon: Phone,  title: 'Phone',         value: '+94 (076) 114-8054',       description: 'Call for urgent inquiries' },
    { icon: MapPin, title: 'Location',      value: 'Nagollagama, Sri Lanka',   description: 'Available for worldwide projects' },
    { icon: Clock,  title: 'Response Time', value: '< 24 hours',              description: 'We typically respond within 24 hours' },
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
    { q: 'How long does a typical project take?',        a: "Timelines vary by scope. A simple website might take 2–4 weeks, while a complex web application could take 2–6 months. We'll provide a detailed timeline during our initial consultation." },
    { q: 'Do you provide ongoing support after launch?', a: 'Yes! We offer support packages covering bug fixes, updates, performance monitoring, and feature enhancements.' },
    { q: 'What technologies do you work with?',          a: 'We specialise in React, Vue.js, Node.js, Python, PHP, and WordPress. We choose the best stack based on your specific goals.' },
    { q: 'How do you handle project communication?',     a: "We believe in transparent communication with regular updates, scheduled check-ins, and full visibility into project progress." },
  ];

  // ── Success screen ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <SEO title="Message Sent" description="Your message has been sent to Velora Tech." />
        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-4">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-2">Thanks for reaching out. We'll get back to you within 24 hours.</p>
          <p className="text-gray-500 text-sm mb-6">
            A confirmation email has been sent to <strong>{formData.from_email || 'your email'}</strong>.
          </p>
          <Button onClick={() => setStatus('idle')} className="bg-blue-600 hover:bg-blue-700">
            Send Another Message
          </Button>
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

      {/* ── Hero with background image ── */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${contactHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-purple-900/85" />

        {/* Decorative orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

        {/* Breadcrumb */}
        <div className="absolute top-8 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-white text-sm">
              <ul className="flex space-x-2">
                <li>
                  <Link to="/" className="hover:text-blue-300 transition-colors uppercase tracking-wide">
                    Home
                  </Link>
                </li>
                <li className="text-gray-400 before:content-['/'] before:mr-2">
                  <Link to="/contact" className="text-blue-300 font-semibold uppercase tracking-wide">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <div className="flex justify-center mb-6">
            <span className="inline-block w-12 h-1 bg-blue-400 rounded-full mr-2" />
            <span className="inline-block w-4 h-1 bg-purple-400 rounded-full" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Build Something{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
              Great Together
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to start your project? Let's discuss your needs and create a solution
            that drives real results for your business.
          </p>

          {/* Clickable contact pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@veloratech.com.lk"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full transition-all text-sm font-medium"
            >
              <Mail className="h-4 w-4" /> hello@veloratech.com.lk
            </a>
            <a
              href="tel:+94761148054"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full transition-all text-sm font-medium"
            >
              <Phone className="h-4 w-4" /> +94 (076) 114-8054
            </a>
          </div>
        </div>

        {/* Bottom fade into white */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── Form + Info ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                We're here to help bring your ideas to life. Reach out and let's start the conversation.
              </p>
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
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Start Your Project</h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill in your details and we'll send you a confirmation email right away.
                </p>

                {status === 'error' && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6">
                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">
                      Something went wrong. Please try again or email us at{' '}
                      <a href="mailto:hello@veloratech.com.lk" className="underline font-medium">
                        hello@veloratech.com.lk
                      </a>.
                    </p>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="from_name" name="from_name" required value={formData.from_name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                    </div>
                    <div>
                      <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="from_email" name="from_email" required value={formData.from_email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your company name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="project_type" className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                      <select id="project_type" name="project_type" required value={formData.project_type} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                        <option value="">Select type</option>
                        {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                      <select id="budget" name="budget" value={formData.budget} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                        <option value="">Select budget</option>
                        {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                      <select id="timeline" name="timeline" value={formData.timeline} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                        <option value="">Select timeline</option>
                        {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and any specific requirements..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white" />
                  </div>

                  <Button type="submit" size="lg" disabled={status === 'loading'} className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60">
                    {status === 'loading'
                      ? <><Loader2 className="h-5 w-5 mr-2 animate-spin" />Sending...</>
                      : <><Send className="h-5 w-5 mr-2" />Send Message</>
                    }
                  </Button>

                  <p className="text-center text-gray-400 text-xs">
                    By submitting this form you'll receive a confirmation email and we'll follow up within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Steps ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's how we'll work together to bring your project to life
            </p>
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

      {/* ── FAQ ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
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