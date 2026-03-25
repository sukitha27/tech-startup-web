import { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // In production you'd send this to a service like Sentry
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600 mb-6">
              Oops
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">Something went wrong</h1>
            <p className="text-gray-400 mb-8 leading-relaxed">
              An unexpected error occurred on this page. The rest of the site is still working fine.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => this.setState({ hasError: false, error: null })}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
              >
                Try again
              </button>
              <Link
                to="/"
                className="px-6 py-2.5 border border-slate-600 hover:bg-slate-800 text-white rounded-lg font-medium transition-colors"
              >
                Go home
              </Link>
            </div>
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-8 text-left text-xs text-red-400 bg-slate-800 rounded-lg p-4 overflow-auto max-h-48">
                {this.state.error.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
