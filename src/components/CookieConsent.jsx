import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Cookie, X, Check, Settings } from 'lucide-react';

const CONSENT_KEY = 'vt_cookie_consent';

// Called by this component to update GA4 consent state
function updateGAConsent(granted) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  });
}

export function getCookieConsent() {
  try { return localStorage.getItem(CONSENT_KEY); } // 'granted' | 'denied' | null
  catch { return null; }
}

const CookieConsent = () => {
  const [visible, setVisible]   = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // Only show if user hasn't decided yet
    const existing = getCookieConsent();
    if (!existing) {
      // Small delay so it doesn't flash on first paint
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
    // Re-apply saved consent on every page load
    updateGAConsent(existing === 'granted');
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'granted');
    updateGAConsent(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    updateGAConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 animate-slide-up"
    >
      <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden">

        {/* Main row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 sm:p-6">

          {/* Icon */}
          <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
            <Cookie className="h-5 w-5 text-blue-400" />
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold mb-1">
              We use cookies to improve your experience
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              We use Google Analytics to understand how visitors use our site.
              No personal data is sold or shared with third parties.{' '}
              <Link
                to="/privacy-policy"
                className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors"
                onClick={decline}
              >
                Privacy Policy
              </Link>
            </p>

            {/* Expanded details */}
            {expanded && (
              <div className="mt-3 pt-3 border-t border-slate-700 space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-xs font-medium">Essential cookies — always on</p>
                    <p className="text-slate-500 text-xs">Required for the site to function. Cannot be disabled.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="h-4 w-4 mt-0.5 flex-shrink-0 rounded-full border border-slate-500 flex items-center justify-center">
                    <div className="h-2 w-2 rounded-full bg-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-xs font-medium">Analytics cookies — optional</p>
                    <p className="text-slate-500 text-xs">Google Analytics (GA4) — helps us understand page performance and traffic sources. No personal data collected.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Toggle details */}
            <button
              onClick={() => setExpanded((e) => !e)}
              className="mt-2 flex items-center gap-1 text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              <Settings className="h-3 w-3" />
              {expanded ? 'Hide details' : 'Cookie details'}
            </button>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
            <button
              onClick={decline}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white border border-slate-700 hover:border-slate-500 transition-all duration-200"
            >
              <X className="h-3.5 w-3.5" />
              Decline
            </button>
            <button
              onClick={accept}
              className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-5 py-2 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              <Check className="h-3.5 w-3.5" />
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;