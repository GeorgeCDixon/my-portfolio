import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Moon, Sun, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    description: '',
    timeline: '',
    budget: '',
    additionalRequirements: '',
    referralSource: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        description: '',
        timeline: '',
        budget: '',
        additionalRequirements: '',
        referralSource: ''
      });
    }, 3000);
  };

  const skills = {
    'Mobile Development': ['React Native', 'Android SDK'],
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Vue.js', 'Electron.js', 'Bootstrap'],
    'Backend & APIs': ['Node.js', 'PHP', 'Python', 'Express.js', 'REST APIs', 'Firebase'],
    'Databases': ['MySQL', 'MongoDB', 'Supabase', 'Firebase Firestore', 'CouchDB', 'PouchDB'],
    'CI/CD': ['Git', 'GitHub', 'Bitbucket'],
    'Others': ['Redux', 'OAuth', 'JWT', 'NPM/Yarn']
  };

  const experience = [
    {
      title: 'Associate Software Engineer',
      company: 'Omak Technology',
      period: 'Mar 2024 - Present',
      projects: [
        'Cloud-Based POS System / ERP Enhancements - Contributed to ongoing feature development using Electron, Vue.js, Node.js, and CouchDB',
        'Android Waiter Ordering Application - Designed and developed mobile version using React Native',
        'Mobile POS System Development - Converting POS web app to mobile version using React Native and Node.js'
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'SLT Digital Labs',
      period: 'Aug 2023 - Feb 2024',
      projects: [
        'PowerCrunch (Management Tool) - Built web-based inventory management app using HTML, CSS, Bootstrap, PHP, and MySQL',
        'AquaCLI Mobile App - Developed React Native mobile app for aquarium management with IoT integration and Firebase'
      ]
    }
  ];

  const [activeProject, setActiveProject] = useState('mobile');

  const projects = {
    mobile: [
      {
        name: 'Android Waiter Ordering Application',
        tech: 'React Native, Node.js',
        description: 'Completed the mobile transformation of the existing waiter ordering web module. Designed and developed a mobile version ensuring seamless integration with backend services, streamlining restaurant and retail order workflows.',
        company: 'Omak Technology',
        period: 'Mar 2024 - Present'
      },
      {
        name: 'Mobile POS System',
        tech: 'React Native, Node.js, CouchDB',
        description: 'Working on converting the POS web app into a mobile version. This helped users access the system easily from different mobile devices with offline-first capabilities.',
        company: 'Omak Technology',
        period: 'Mar 2024 - Present'
      },
      {
        name: 'AquaCLI Mobile App',
        tech: 'React Native, Firebase, IoT',
        description: 'Developed AquaCLI, a React Native mobile app for aquarium management. Connected the app with IoT devices to show real-time updates, interactive charts, and alerts. Used Firebase for database and login system.',
        company: 'SLT Digital Labs',
        period: 'Aug 2023 - Feb 2024'
      }
    ],
    web: [
      {
        name: 'Cloud-Based POS System / ERP',
        tech: 'Vue.js, Node.js, CouchDB',
        description: 'Contributed to ongoing feature development of enterprise-level POS system. Developed and enhanced RESTful APIs, improving billing, payment, inventory, and customer management modules.',
        company: 'Omak Technology',
        period: 'Mar 2024 - Present'
      },
      {
        name: 'PowerCrunch Management Tool',
        tech: 'HTML, CSS, Bootstrap, PHP, MySQL',
        description: 'Designed and built a web-based inventory management app that helps calculate product costs and pricing. Created easy-to-use dashboards for comprehensive business analytics.',
        company: 'SLT Digital Labs',
        period: 'Aug 2023 - Feb 2024'
      }
    ],
    desktop: [
      {
        name: 'Cloud-Based POS System (Desktop)',
        tech: 'Electron, Vue.js, Node.js, CouchDB',
        description: 'Built desktop application version of the POS system using Electron. Provides offline-first capabilities with local database syncing and cross-platform compatibility for Windows, macOS, and Linux.',
        company: 'Omak Technology',
        period: 'Mar 2024 - Present'
      }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              GCD
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors touch-manipulation cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg touch-manipulation cursor-pointer ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 touch-manipulation cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left px-3 py-2 rounded-md touch-manipulation cursor-pointer ${
                    activeSection === item.toLowerCase()
                      ? 'bg-cyan-500 text-white'
                      : isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              George C Dixon
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-400 mb-6">Software Engineer</p>
            <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Building scalable cross-platform mobile and web applications with 2+ years of experience
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="mailto:christiedixon70@gmail.com" 
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all touch-manipulation cursor-pointer"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
            </a>
            <a 
              href="tel:+94711444288" 
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 ${isDarkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} transition-all touch-manipulation cursor-pointer`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Phone className="w-5 h-5" />
              <span>Call</span>
            </a>
            <a 
              href="https://linkedin.com/in/GeorgeCDixon" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 ${isDarkMode ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'} transition-all touch-manipulation cursor-pointer`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* <div className={`flex justify-center space-x-4 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>📍 Hatton, Sri Lanka</span>
          </div> */}
        </div>
      </section>

      <section id="about" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Software Engineer with hands-on experience in building scalable cross-platform mobile and web applications 
              using React, Vue.js, React Native, Node.js, and modern frameworks over the last 2 years. Skilled in full-stack 
              development, API integrations, and CI/CD pipelines. Proven ability to deliver robust solutions aligned with 
              system performance, security, and business goals in fast-paced environments.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all`}>
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-8 border-l-4 border-cyan-500`}>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-cyan-400">{job.title}</h3>
                    <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{job.company}</p>
                  </div>
                  <span className={`mt-2 md:mt-0 px-4 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                    {job.period}
                  </span>
                </div>
                <ul className={`space-y-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {job.projects.map((project, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-cyan-400 mr-2 mt-1">▹</span>
                      <span>{project}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveProject('mobile')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all touch-manipulation cursor-pointer ${
                activeProject === 'mobile'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              📱 Mobile Apps
            </button>
            <button
              onClick={() => setActiveProject('web')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all touch-manipulation cursor-pointer ${
                activeProject === 'web'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              🌐 Web Apps
            </button>
            <button
              onClick={() => setActiveProject('desktop')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all touch-manipulation cursor-pointer ${
                activeProject === 'desktop'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  : isDarkMode 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              💻 Desktop Apps
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects[activeProject].map((project, index) => (
              <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} hover:border-cyan-500 transition-all hover:transform hover:scale-105`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-cyan-400 flex-1">{project.name}</h3>
                  <span className={`ml-2 px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {project.period}
                  </span>
                </div>
                <p className={`text-sm mb-2 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.company}</p>
                <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>{project.tech}</p>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education & Publications
          </h2>
          <div className="space-y-6">
            <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-2">Bachelor's Degree in Information Technology</h3>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Sri Lanka Institute of Information Technology</p>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>2021 - 2025</p>
            </div>
            
            <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} rounded-xl p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">Publications</h3>
              <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                <p className="font-medium mb-2">ML-Driven HR System: Candidate Assessment for Enhanced Recruitment Outcomes</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  2024 3rd International Conference on Automation, Computing and Renewable Systems (ICACRS) – IEEE, Pudukkottai, India, December 2024
                </p>
                <p className={`text-sm mt-1 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>DOI: 10.1109/ICACRS62842.2024.10841641</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className={`text-center mb-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind? Fill out the form below and I'll get back to you soon!
          </p>

          {formSubmitted ? (
            <div className={`${isDarkMode ? 'bg-green-900/20 border-green-500' : 'bg-green-50 border-green-300'} border rounded-xl p-8 text-center`}>
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-500 mb-2">Thank You!</h3>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>Your project request has been submitted successfully. I'll get back to you soon!</p>
            </div>
          ) : (
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-8 border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block mb-2 font-medium">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                  >
                    <option value="">Select a type</option>
                    <option value="web">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="fullstack">Full-Stack Solution</option>
                    <option value="api">API Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Timeline/Urgency *</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">Urgent</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                >
                  <option value="">Select budget range</option>
                  <option value="<1000">Less than $1,000</option>
                  <option value="1000-5000">$1,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">Project Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">Additional Requirements</label>
                <textarea
                  name="additionalRequirements"
                  value={formData.additionalRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none resize-none`}
                  placeholder="Any specific requirements or features?"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-medium">How did you hear about me?</label>
                <input
                  type="text"
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg ${isDarkMode ? 'bg-gray-900 border-gray-700 text-gray-100' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:border-cyan-500 focus:outline-none`}
                  placeholder="LinkedIn, referral, search engine, etc."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 touch-manipulation cursor-pointer"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                Submit Project Request
              </button>
            </div>
          )}
        </div>
      </section>

      <footer className={`py-8 px-4 border-t ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
            Living, Learning, Failing & leveling up — George C Dixon.
          </p>
        </div>
      </footer>
    </div>
  );
}