import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Users, 
  Target, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Heart,
  Zap
} from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', level: 95 },
    { name: 'Backend Development', level: 90 },
    { name: 'Database Design', level: 85 },
    { name: 'API Development', level: 90 },
    { name: 'Cloud Deployment', level: 80 },
    { name: 'Project Management', level: 85 }
  ];

  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'I believe in writing clean, maintainable, and scalable code that stands the test of time.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'Your success is my success. I work collaboratively with regular communication and transparency.'
    },
    {
      icon: Zap,
      title: 'Results-Driven',
      description: 'Every project focuses on delivering measurable business outcomes and real value.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'I stay current with the latest technologies and apply them appropriately to solve real problems.'
    }
  ];

  const experience = [
    {
      year: '2023-Present',
      title: 'Freelance Software Developer',
      description: 'Building custom web applications and software solutions for growing businesses.',
      achievements: [
        'Delivered 2+ successful client projects',
        'Achieved 100% client satisfaction rate',
        'Specialized in React, Node.js, and cloud deployment'
      ]
    },
    {
      year: '2021-2023',
      title: 'Full-Stack Developer',
      description: 'Developed and maintained web applications using modern technologies.',
      achievements: [
        'Built scalable web applications serving thousands of users',
        'Improved application performance by 40% on average',
        'Mentored junior developers and led code reviews'
      ]
    },
    {
      year: '2019-2021',
      title: 'Frontend Developer',
      description: 'Focused on creating responsive and user-friendly web interfaces.',
      achievements: [
        'Converted designs into pixel-perfect, responsive websites',
        'Implemented modern JavaScript frameworks and libraries',
        'Collaborated with designers and backend developers'
      ]
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'MongoDB Certified Developer',
    'React Advanced Certification'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Building Digital Solutions{' '}
                <span className="text-blue-600">That Matter</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                I'm a passionate software developer with a mission to help businesses 
                thrive through innovative technology solutions. With expertise in modern 
                web technologies and a client-focused approach, I turn ideas into reality.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">
                  Let's Work Together <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-600 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-gray-600 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Values & Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every project and client relationship
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-4 mx-auto">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Technical Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in software development, I've mastered 
                the technologies needed to build robust, scalable applications 
                that drive business growth.
              </p>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Certifications & Achievements
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Key Achievements</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-600 text-sm">2+ successful client projects delivered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-600 text-sm">100% client satisfaction rate</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-600 text-sm">50% average performance improvement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Professional Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of my growth and experience in software development
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-center font-semibold">
                    {exp.year}
                  </div>
                </div>
                <div className="md:w-3/4 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {exp.description}
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why I Love What I Do
                </h2>
                <p className="text-gray-600 mb-6">
                  Technology has the power to transform businesses and improve lives. 
                  Every line of code I write is an opportunity to solve real problems 
                  and create meaningful impact.
                </p>
                <p className="text-gray-600 mb-6">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or mentoring aspiring developers. 
                  I believe in continuous learning and sharing knowledge with the community.
                </p>
                <div className="flex items-center space-x-4">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span className="text-gray-700">Passionate about creating solutions that matter</span>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Let's Build Something Great Together
                </h3>
                <p className="text-gray-600 mb-6">
                  Ready to turn your ideas into reality? I'd love to hear about 
                  your project and discuss how we can create a solution that 
                  drives real results for your business.
                </p>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Start a Conversation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

