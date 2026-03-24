import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed space-y-3">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  const lastUpdated = 'March 2025';

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Privacy Policy"
        description="Velora Tech privacy policy — how we collect, use, and protect your personal information."
      />

      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-900 py-20 pt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-sm p-8 lg:p-12">

          <p className="text-gray-600 leading-relaxed mb-10">
            Velora Technologies ("we", "us", or "our") operates the website{' '}
            <a href="https://veloratech.com.lk" className="text-blue-600 hover:underline">veloratech.com.lk</a>.
            This Privacy Policy explains how we collect, use, and protect your personal information when
            you use our website or contact us about our services. By using our site you agree to the
            practices described here.
          </p>

          <Section title="1. Information We Collect">
            <p>We collect information in two ways:</p>
            <p>
              <strong className="text-gray-800">Information you provide directly</strong> — When you
              submit our contact form, we collect your name, email address, company name, and any project
              details you share. We use this solely to respond to your enquiry and discuss potential work together.
            </p>
            <p>
              <strong className="text-gray-800">Information collected automatically</strong> — Like most
              websites, we may collect basic analytics data such as pages visited, time on site, and
              browser/device type through standard web analytics tools. This data is aggregated and not
              linked to individual identities.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your enquiries and provide quotes or consultations</li>
              <li>Communicate about projects you engage us for</li>
              <li>Improve our website and services based on aggregate usage data</li>
              <li>Send service-related emails (not marketing without your consent)</li>
            </ul>
            <p>We do not sell, rent, or trade your personal information to any third party.</p>
          </Section>

          <Section title="3. Email Communications">
            <p>
              If you contact us via our contact form, we will use your email address to reply to your
              enquiry. We will not add you to any mailing list without your explicit consent. You may
              opt out of any communication at any time by replying with "unsubscribe" or emailing us
              directly.
            </p>
          </Section>

          <Section title="4. Cookies">
            <p>
              Our website may use cookies to improve your browsing experience. Cookies are small text
              files stored on your device. We use them for basic analytics and to remember your
              preferences. You can disable cookies in your browser settings, though some site features
              may not function as intended.
            </p>
          </Section>

          <Section title="5. Third-Party Services">
            <p>We may use the following third-party services which have their own privacy policies:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-gray-800">EmailJS</strong> — used to process contact form submissions</li>
              <li><strong className="text-gray-800">WhatsApp</strong> — used for optional chat support</li>
              <li><strong className="text-gray-800">Vercel</strong> — our hosting provider</li>
            </ul>
            <p>We are not responsible for the privacy practices of these third parties.</p>
          </Section>

          <Section title="6. Data Security">
            <p>
              We take reasonable steps to protect your personal information from unauthorized access,
              disclosure, or misuse. However, no method of transmission over the internet is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain contact form submissions and project correspondence only as long as necessary
              to provide our services or as required for legitimate business purposes. You may request
              deletion of your data at any time by contacting us.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Request access to the personal data we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for any processing based on consent</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:hello@veloratech.com.lk" className="text-blue-600 hover:underline">
                hello@veloratech.com.lk
              </a>.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our website is not directed at children under the age of 13. We do not knowingly collect
              personal information from children. If you believe a child has provided us with personal
              information, please contact us and we will delete it promptly.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              "last updated" date at the top of this page. We encourage you to review this policy
              periodically. Continued use of our website after changes constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <div className="bg-gray-50 rounded-xl p-6 mt-2">
              <p><strong className="text-gray-800">Velora Technologies</strong></p>
              <p>Nagollagama, Sri Lanka</p>
              <p>
                Email:{' '}
                <a href="mailto:hello@veloratech.com.lk" className="text-blue-600 hover:underline">
                  hello@veloratech.com.lk
                </a>
              </p>
              <p>Phone: +94 (076) 114-8054</p>
            </div>
          </Section>

          <div className="border-t border-gray-200 pt-8 mt-8 text-center">
            <Link to="/" className="text-blue-600 hover:underline text-sm">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
