import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import {
  ArrowRight, ArrowUpRight, CheckCircle, Package,
  Banknote, Truck, Globe, Languages, ShoppingCart,
  Zap, Shield, Users, ExternalLink,
} from 'lucide-react';
import orderaGif from '@/assets/ordera-hero.gif';

const features = [
  { icon: ShoppingCart, title: 'Order Pipeline',         description: 'Visual order flow from new to delivered. See every order status at a glance and update with one click.' },
  { icon: Banknote,     title: 'COD Tracking',           description: 'Track cash-on-delivery collections per order and per courier. Know exactly what is collected and what is pending.' },
  { icon: CheckCircle,  title: 'Bank Slip Verification', description: 'Customers upload bank slips directly. Verify and confirm payments without a single WhatsApp message.' },
  { icon: Truck,        title: 'Courier Dispatch',        description: 'One-click dispatch to Koombiyo, Pronto, and Domex. Auto-generate waybills and track delivery status.' },
  { icon: Globe,        title: 'Public Order Form',       description: 'Every merchant gets a branded order page. Share the link — customers place orders directly.' },
  { icon: Languages,    title: 'Sinhala + English UI',    description: 'Full interface in both Sinhala and English. Built for Sri Lankan sellers, not adapted from a foreign product.' },
];

const problems = [
  'Managing 50+ orders through WhatsApp threads',
  'Losing track of COD collections in Excel',
  'Manually calling couriers to book pickups',
  'Customers asking "where is my order?" daily',
  'Bank slip photos buried in chat history',
];

const solutions = [
  'One dashboard for every order, every status',
  'Automatic COD tracking per courier and route',
  'Direct Koombiyo, Pronto & Domex integration',
  'Customers track their own orders via order form',
  'Structured bank slip upload and verification',
];

const Products = () => (
  <div className="min-h-screen bg-white">
    <SEO
      title="Products — Ordera"
      description="Ordera is a free order management platform built for Sri Lankan online businesses. Track COD, verify bank slips, dispatch to couriers — all in one dashboard."
    />

    {/* ── Hero — GIF full background ── */}
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">

      {/* GIF background */}
      <img
        src={orderaGif}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark indigo overlay — keeps brand colour and legibility */}
      <div className="absolute inset-0 bg-[#1e1b4b]/80" />

      {/* Subtle vignette on edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      {/* Breadcrumb */}
      <div className="absolute top-8 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-white/60 text-sm flex gap-2 items-center">
            <Link to="/" className="hover:text-white transition-colors uppercase tracking-wide text-xs">
              Home
            </Link>
            <span>/</span>
            <span className="text-violet-300 font-semibold uppercase tracking-wide text-xs">
              Products
            </span>
          </nav>
        </div>
      </div>

      {/* Hero content — centred like other pages */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">

        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 text-violet-300 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live · Free Beta
        </div>

        <p className="text-white/40 text-sm uppercase tracking-widest mb-4 font-medium">
          Built by Velora Tech
        </p>

        <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-none tracking-tight">
          Ordera
        </h1>

        <p className="text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed">
          Order management for Sri Lankan businesses
        </p>

        <p className="text-base text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          Stop managing COD orders through WhatsApp and Excel.
          One clean dashboard for orders, bank slips, and courier dispatch.
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Order Pipeline', 'COD Tracking', 'Bank Slip Verification', 'Koombiyo · Pronto · Domex', 'Sinhala + English'].map((tag) => (
            <span
              key={tag}
              className="text-xs bg-white/10 border border-white/15 text-white/70 px-3 py-1.5 rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://ordera.veloratech.com.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/40 text-base"
          >
            Try Ordera Free <ArrowUpRight className="h-5 w-5" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 text-base backdrop-blur-sm"
          >
            Request a Demo <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* Bottom fade into white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>

    {/* ── Problem vs Solution ── */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sound familiar?</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Every Sri Lankan online seller starts the same way. Ordera is how you grow past it.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before */}
          <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 text-sm font-bold">✕</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">Before Ordera</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <span className="text-red-400 mt-0.5 flex-shrink-0 text-lg leading-none">—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#1e1b4b] rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-violet-500/30 rounded-full flex items-center justify-center">
                <span className="text-violet-300 text-sm font-bold">✓</span>
              </div>
              <h3 className="text-lg font-bold text-white">With Ordera</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <CheckCircle className="h-5 w-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* ── Features ── */}
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-wide">
            Features
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything you need. Nothing you don't.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Built specifically for how Sri Lankan online sellers actually work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-violet-200 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-[#1e1b4b] rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-600 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-violet-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Who it's for + Pricing ── */}
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-violet-100 text-violet-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              Who it's for
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Built for Sri Lankan online sellers
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Whether you sell on Facebook, Instagram, or your own website — if you're handling
              COD orders and dealing with local couriers, Ordera was built for you.
            </p>
            <div className="space-y-4">
              {[
                { icon: Users,   label: 'Facebook & Instagram sellers' },
                { icon: Package, label: 'Small e-commerce stores' },
                { icon: Truck,   label: 'Dropshippers using local couriers' },
                { icon: Zap,     label: 'Growing businesses replacing WhatsApp & Excel' },
                { icon: Shield,  label: 'Businesses that need payment verification' },
              ].map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-violet-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing card */}
          <div className="bg-[#1e1b4b] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Free Beta · No Credit Card
              </div>
              <div className="mb-2">
                <span className="text-6xl font-black text-white">Free</span>
              </div>
              <p className="text-white/50 mb-8 text-sm">during beta · full access · no limits</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited orders',
                  'All courier integrations',
                  'Bank slip verification',
                  'Public order form',
                  'Sinhala + English UI',
                  'Priority support during beta',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/70">
                    <CheckCircle className="h-4 w-4 text-violet-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://ordera.veloratech.com.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30"
              >
                Get Started Free <ArrowUpRight className="h-5 w-5" />
              </a>
              <p className="text-white/30 text-xs text-center mt-4">ordera.veloratech.com.lk</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Built by Velora ── */}
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400 text-sm uppercase tracking-widest font-medium mb-4">
          A Velora Tech Product
        </p>
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          We use the tools we build
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Ordera isn't a side project — it's a product we built because we saw the problem firsthand
          working with Sri Lankan e-commerce clients. We run it, maintain it, and keep improving it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://ordera.veloratech.com.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1e1b4b] hover:bg-[#2d2a6e] text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300"
          >
            Visit Ordera <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
          >
            Talk to Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Products;