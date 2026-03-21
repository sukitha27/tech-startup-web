import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      {/* Blurred blobs for atmosphere */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-lg">
        {/* Big 404 */}
        <div className="text-[10rem] font-black leading-none bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-indigo-600 select-none mb-2">
          404
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">Page not found</h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/" className="flex items-center gap-2">
              <Home className="h-5 w-5" /> Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
